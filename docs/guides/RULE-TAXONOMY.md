# Phân loại rule: layer và concerns (Wave 5)

## Hai chiều độc lập

- `layer`: **nơi chịu trách nhiệm thực thi/kiểm tra**. Chỉ chọn tầng gần điểm kiểm soát thực tế nhất. Không chọn `security` hay `process` vì đây không phải tầng kỹ thuật.
- `concerns`: **mục tiêu kiểm soát** của rule; có thể có nhiều, nhưng chỉ dùng tag thực sự liên quan.

Ví dụ: rule kiểm tra quyền đối tượng tại API: `layer: api`, `concerns: [authorization, security]`; rule kiểm tra bàn phím: `layer: ui`, `concerns: [accessibility, usability]`; rule xác thực backup restore: `layer: operations`, `concerns: [resilience, testing]`.

## Layer hợp lệ

| Layer | Phạm vi |
|---|---|
| governance | Quyết định, chính sách, trách nhiệm |
| requirements | Yêu cầu, AC, business rule |
| architecture | Thiết kế kiến trúc và cross-cutting design |
| design | UX, interaction/visual design specification |
| ui | Thành phần giao diện và trạng thái hiển thị |
| client | Web client/browser/runtime |
| mobile | Mobile app runtime/native integration |
| api | HTTP/API boundary, contract, middleware |
| service | Business/backend service, worker |
| integration | Third-party connectors/events/webhooks |
| data | Mô hình và vòng đời dữ liệu |
| db | DB engine, query, schema, transaction |
| infrastructure | Network, cloud, runtime provisioning |
| delivery | Build, CI/CD, phát hành |
| operations | Vận hành, giám sát, sự cố |
| quality | QA, QC, đánh giá và kiểm thử |

## Tính tương thích

- Schema payload vẫn `schemaVersion: 2`, nhưng **enum layer đã mở rộng**, đồng thời thêm field tùy chọn `concerns`. Đây là thay đổi schema KHÔNG bảo đảm tương thích với client hardcode enum cũ.
- Bộ `export-v1` ánh xạ `layer` mới về `ui/api/db/process/security` theo bảng tương thích trong `tools/standard_tool.py`, và loại `concerns` trước khi xuất. Đây là export giảm độ chính xác của taxonomy, không phải round-trip.
- Không thay `Rule ID`. Để filter: `layer == api` và `concerns contains security` thay cho `layer == security`; filter governance/process cũ phải cập nhật sang governance/requirements/delivery/operations/quality tương ứng.
- Tag Wave 5 được suy luận tự động từ nội dung, cần review theo chủ sở hữu từng standard trước khi dùng cho compliance mang tính pháp lý.

## Nguyên tắc bảo trì

1. Không tạo `layer` mới chỉ để mô tả công nghệ (Flutter/React/.NET là scope/technology).
2. Không dùng `layer` để biểu diễn severity hoặc đối tượng xét nghiệm.
3. Nếu một rule ở nhiều tầng, tách thành nhiều rule khi bằng chứng/điểm kiểm soát khác nhau; array layer chỉ khi một kiểm chứng thực sự áp dụng đồng nhất.
4. Khi sửa một rule, review lại cả layer lẫn concerns.
