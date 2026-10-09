# Báo cáo căn chỉnh cấu trúc

`STRUCTURE.txt` được xem là nguồn chuẩn (source of truth). `standard-import.schema.json` được xem là hợp đồng validation cho mọi file JSON đang hoạt động trong catalog.

- Số standard/capability đang hoạt động sau khi căn chỉnh: **115**
- Standard hiện có được tái sử dụng tại vị trí chuẩn: **47**
- Standard hiện có được migrate/đổi sang code chuẩn mới: **12**
- Standard/capability còn thiếu đã được tạo bổ sung: **56**
- Code legacy không được giữ trong catalog hoạt động vì không có trong `STRUCTURE.txt`: **14**

## Code đã migrate

- `STD-AI` → `STD-AI-DEV` (nguồn: `01-core/STD-AI.json`)
- `STD-AUTH` → `CAP-AUTH` (nguồn: `05-feature/STD-AUTH.json`)
- `STD-PROFILE` → `CAP-PROFILE` (nguồn: `05-feature/STD-PROFILE.json`)
- `STD-CRUD` → `CAP-CRUD` (nguồn: `05-feature/STD-CRUD.json`)
- `STD-UPLOAD` → `CAP-UPLOAD` (nguồn: `05-feature/STD-UPLOAD.json`)
- `STD-NOTIFY` → `CAP-NOTIFY` (nguồn: `05-feature/STD-NOTIFY.json`)
- `STD-CHAT` → `CAP-CHAT` (nguồn: `05-feature/STD-CHAT.json`)
- `STD-SHARE` → `CAP-SHARE` (nguồn: `05-feature/STD-SHARE.json`)
- `STD-AUDIT` → `CAP-AUDIT` (nguồn: `05-feature/STD-AUDIT.json`)
- `STD-PERM` → `CAP-PERM` (nguồn: `05-feature/STD-PERM.json`)
- `STD-SEARCH` → `CAP-SEARCH` (nguồn: `05-feature/STD-SEARCH.json`)
- `STD-DASHBOARD` → `CAP-REPORT` (nguồn: `05-feature/STD-DASHBOARD.json`)

## Code legacy/không chuẩn bị loại khỏi catalog hoạt động

- `STD-DB`
- `STD-FL-ARCH`
- `STD-FL-BUILD`
- `STD-FL-DI`
- `STD-FL-DIO`
- `STD-NEXT-CACHE`
- `STD-NEXT-SEO`
- `STD-QR`
- `STD-REACT-ARCH`
- `STD-REACT-UI`
- `STD-RECOVER`
- `STD-REGISTER`
- `STD-RN-ARCH`
- `STD-RN-EXPO`

## Mục tiêu validation

- Nhóm folder và tên file đang hoạt động phản chiếu `STRUCTURE.txt`.
- Tên mỗi file đang hoạt động khớp với trường JSON `code`.
- Các dependency được nêu rõ trong `STRUCTURE.txt` được biểu diễn trong `depends_on`.
- Nội dung hiện có được giữ lại khi code chuẩn đã tồn tại; nội dung sinh mới chỉ được dùng cho các mục chuẩn còn thiếu.
