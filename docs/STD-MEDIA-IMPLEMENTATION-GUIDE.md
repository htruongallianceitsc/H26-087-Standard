# STD-MEDIA - Hướng dẫn áp dụng

## Phạm vi

`03-api-integration-data/STD-MEDIA.json` là nguồn chuẩn chung cho image variants, thumbnail, CDN, cache, quyền truy cập và original. Bật trong profile tự động qua `features.media: true`, hoặc thêm `STD-MEDIA` trong `selected_standards` khi dùng profile explicit. Những project chỉ upload file không hiển thị hình ảnh có thể không bật media.

Các nơi triển khai: `STD-WEB-PERF` (responsive image và LCP), `STD-MOB-PERF` (decode/DPR và cache), `STD-BE-FILE` (derivative pipeline), `STD-FILE-LIFECYCLE` (retention/xóa derivative). Không sao chép các rule core vào platform.

## Gợi ý sizing (không phải kích thước bắt buộc)

| UI | Variant ưu tiên | Lưu ý |
| --- | --- | --- |
| Avatar, comment, list, table | thumbnail | Chọn số pixel theo CSS/dp size nhân DPR |
| Search results, card/grid | thumbnail / small | Giữ aspect ratio, tránh request original |
| Feed, detail card | small / medium | Tùy layout, breakpoint và DPR |
| Full-screen gallery | large | Nâng lên original chỉ khi zoom cần thiết |
| Download, image editor, export | original | Có kiểm tra authorization |
| Document preview | thumbnail / preview | Private/no-store với tài liệu nhạy cảm |

Dùng các preset 160/480/960/1600 px **chỉ làm ví dụ**; team phải đo kích thước UI và tạo variant phù hợp traffic.

## Hợp đồng API gợi ý

```json
{
  "id": "img_42",
  "version": "v4",
  "status": "READY",
  "access": "public",
  "variants": {
    "thumbnail": {"url": "https://cdn.example/images/img_42/v4/160.webp", "width": 160, "height": 160, "format": "webp"},
    "small": {"url": "https://cdn.example/images/img_42/v4/480.webp", "width": 480, "height": 320, "format": "webp"}
  }
}
```

Các trường trên mang tính minh họa: ảnh crop có thể khác aspect ratio ảnh gốc; chỉ trả URL/variant mà caller có quyền. Signed URLs phải có expiry và không chứa credential bị lộ qua log.

## Cache/authorization matrix

| Loại ảnh | HTTP/CDN | Client disk/memory |
| --- | --- | --- |
| Public, immutable, URL versioned | Có thể `public, max-age=31536000, immutable` | Cache giới hạn dung lượng; URL mới khi cập nhật |
| Public, URL mutable | TTL ngắn, ETag/Last-Modified | Revalidation theo HTTP cache |
| Private user-owned | Auth trước khi cấp quyền; không shared-cache tùy tiện; `private` khi policy cho phép | Isolate account, purge khi logout nếu lưu |
| Sensitive (ID, passport, hợp đồng) | Thường `no-store`; tránh shared cache | Không persist nếu không có business/security exception |

`no-store` là chính sách cho response, không thay thế authorization. Cache key CDN phải phân biệt variant, format, transform và phạm vi truy cập. Khi dùng content negotiation, bảo đảm `Vary`/CDN cache key đúng.

## Checklist nghiệm thu

- Không có original được tải cho avatar/list/grid nhỏ.
- Kích thước decode gần physical pixels của viewport (CSS/dp × DPR).
- Có placeholder và fallback nếu derivative đang PROCESSING/ERROR.
- Đổi avatar/ảnh cập nhật version URL, không dính cache cũ.
- Ảnh private không hiển thị cho account khác dù chung thiết bị hoặc CDN.
- Xóa media tuân thủ retention và revoke/purge variants khi cần; lưu ý URL immutable tồn tại ở client/CDN cho đến hết TTL nếu không có cơ chế revoke.
- Image processing chịu được input oversized, decompression bomb, corrupt format và retry.
- Hero/LCP không bị lazy load; ảnh dưới viewport lazy load.
- Đo transfer bytes, cache-hit ratio, memory và latency theo ngân sách project.
