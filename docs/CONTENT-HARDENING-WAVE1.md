# Content Hardening — Wave 1 (v2.2-content)

## Phạm vi

Chỉ nâng nội dung tiêu chuẩn, không sửa schema, tools, resolver, applicability, dependency hay cấu trúc thư mục. Giữ nguyên `schemaVersion: 2`; các ID R001..R00x có sẵn được bảo toàn, ID mới cấp tuần tự và cập nhật registry. Với rule skeleton chung không có nội dung kỹ thuật, cập nhật nội dung tại chính ID cũ (lưu ý các importer lưu snapshot mô tả rule nên cần đồng bộ).

## 13 standard đã được nâng

- Security/privacy: `STD-SEC`, `STD-PRIV`, `STD-BE-SEC`, `STD-WEB-SEC`, `STD-MOB-SEC`.
- Auth/permission: `STD-BE-AUTH`, `STD-WEB-AUTH`, `CAP-AUTH`, `CAP-PERM`.
- Critical operation: `CAP-PAYMENT`, `STD-DATA-MIG`, `STD-BE-CONCUR`, `STD-A11Y`.

Mỗi standard nay có 8 rule, với tiêu chí có thể thử nghiệm, positive/negative example. Không khẳng định tự động đạt OWASP/WCAG/PCI chỉ nhờ các rule này; cần kiểm toán theo phạm vi và bản chuẩn áp dụng.

## Kết quả

- 137 standard, từ 503 lên 564 rule (+61).
- Số standard skeleton trong phép đo hiện tại: 55 → 46; boilerplate details/examples: 236 → 220.
- Một số rule boilerplate cũ có câu mở đầu khác template linter nên metric chỉ phản ánh pattern được tool nhận diện, **không** tương đương đánh giá định tính độc lập.
- Chưa thay đổi các standard ngoài Wave 1. Wave tiếp theo: Ops (backup, DR, incident, SLO), UX và phần còn lại.

## Verification

```bash
python tools/standard_tool.py validate
python tools/standard_tool.py test-profiles
python tools/standard_tool.py lint-content
python tools/standard_tool.py generate --check
```

Các rule security vẫn cần thử nghiệm và đánh giá threat model riêng theo dự án.
