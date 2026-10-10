# Wave 6 – Semantic Quality Audit

Báo cáo là **heuristic**, không khẳng định những rule được gắn cờ là sai. Không sửa hoặc xóa rule dựa trên similarity tự động.

- Standard: **137**, rule: **635**
- Rule cần review thủ công: **63**
- Cặp title có thể chồng lấn: **1**

## Nhóm cờ chất lượng

- `can_xem_concern_testing`: 21
- `detail_ngan`: 5
- `vi_du_ngan`: 38

## Rule đã chỉnh layer có bằng chứng rõ

- `STD-API-HTTP#R004`: `db` → `api`
- `STD-API-HTTP#R006`: `db` → `client`

## Cặp rule cần review (tối đa 30)

- `STD-WEBHOOK#R001` ↔ `CAP-PAYMENT#R002` (similarity 0.75)

## Quyết định khi review overlap

- Cùng mục đích, cùng tầng và cùng bằng chứng: giữ một rule chuẩn, dùng traceability tham chiếu ở rule khác; **không xóa Rule ID cũ**.
- Khác tầng hoặc khác vai trò: giữ riêng và viết rõ trách nhiệm của mỗi rule.
- Không dùng điểm similarity làm tiêu chí tự động merge/delete.

## Bằng chứng nghiệm thu

- `review`: PR/ADR/spec có URL, người duyệt, ngày và rule ID.
- `test`: test case hoặc automation có kết quả pass/fail và rule ID.
- `runtime`: dashboard/log/số đo và khoảng thời gian kiểm tra.
- `test+review`: yêu cầu cả kết quả test và xác nhận thiết kế.
- `test_or_review`: chọn phương pháp phù hợp; đây là gợi ý, chưa phải chính sách chính thức.
