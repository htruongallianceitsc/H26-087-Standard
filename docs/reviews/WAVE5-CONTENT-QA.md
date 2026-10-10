# Wave 5 – Content QA & taxonomy

- Bảo toàn số rule và mã rule từ Wave 4.
- Schema v2: mở rộng layer và bổ sung `concerns` để lọc theo hai trục độc lập.
- Phân loại tự động tất cả rule; ưu tiên kiểm duyệt thủ công khi tích hợp vào hệ thống compliance.
- QA linter hiện tại chủ yếu phát hiện các chuỗi boilerplate xác định trước; không chứng nhận rằng mọi ví dụ đúng/sai đều có thể chạy độc lập hoặc đáp ứng mọi yêu cầu chuyên ngành.
- Đề nghị vòng review chuyên sâu: phân biệt các rule trùng gần nghĩa giữa STD-SEC, STD-BE-AUTH, STD-WEB-AUTH, CAP-AUTH; giữa STD-DEEP-LINK, STD-MOB-NAV, CAP-SHARE; giữa STD-TEST và STD-QC-*. Chỉ hợp nhất khi đảm bảo không đổi ngữ nghĩa traceability của Rule ID.

## Thống kê phân bố layer

- `api`: 86
- `architecture`: 33
- `client`: 56
- `data`: 18
- `db`: 17
- `delivery`: 30
- `design`: 4
- `governance`: 27
- `infrastructure`: 12
- `integration`: 27
- `mobile`: 89
- `operations`: 20
- `quality`: 89
- `requirements`: 12
- `service`: 86
- `ui`: 29

## Thống kê concern

- `accessibility`: 24
- `authentication`: 69
- `authorization`: 51
- `automation`: 13
- `compatibility`: 41
- `compliance`: 33
- `cost`: 9
- `data-integrity`: 41
- `documentation`: 105
- `localization`: 7
- `maintainability`: 35
- `networking`: 23
- `observability`: 108
- `performance`: 53
- `privacy`: 38
- `release`: 33
- `reliability`: 90
- `resilience`: 36
- `security`: 153
- `testing`: 468
- `usability`: 36
