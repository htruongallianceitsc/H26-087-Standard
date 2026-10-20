# Checklist - developer

Rules: **502**

| Rule | Severity | Verification | Pass/Fail/Waived/NA | Evidence |
|---|---|---|---|---|
| `CAP-AUDIT#R001` - Ghi nhận actor, action, target, outcome và correlation ID | must | test_or_review | [ ] | |
| `CAP-AUDIT#R002` - Bảo vệ audit log khỏi việc chỉnh sửa bởi người dùng thông thường | must | test_or_review | [ ] | |
| `CAP-AUDIT#R003` - Mask các field secret và thực thi chính sách lưu giữ cũng như truy cập | should | test+review | [ ] | |
| `CAP-AUDIT#R004` - Đảm bảo thao tác nghiệp vụ và việc phát audit event luôn nhất quán | should | test_or_review | [ ] | |
| `CAP-AUTH#R001` - Quy định hành vi login, logout, token/session hết hạn và phục hồi | must | test+review | [ ] | |
| `CAP-AUTH#R002` - Áp dụng rate limit và thông báo lỗi chung để chống dò tìm credential | must | test+review | [ ] | |
| `CAP-AUTH#R003` - Kiểm thử credential không hợp lệ, tài khoản bị khóa, session hết hạn và request đồng thời | should | test | [ ] | |
| `CAP-AUTH#R004` - Tách điều hướng phía client khỏi quyết định xác thực có thẩm quyền ở server | should | test+review | [ ] | |
| `CAP-AUTH#R005` - Đăng ký và xác minh danh tính theo chính sách | must | test+review | [ ] | |
| `CAP-AUTH#R006` - Quản lý thiết bị, logout và revoke | should | test+review | [ ] | |
| `CAP-AUTH#R007` - Bảo vệ luồng khôi phục tài khoản | should | test+review | [ ] | |
| `CAP-AUTH#R008` - Ràng buộc kết quả test với AC | should | test | [ ] | |
| `CAP-CHAT#R001` - Sử dụng message ID và deduplication để hiển thị trạng thái phân phối đáng tin cậy | must | test_or_review | [ ] | |
| `CAP-CHAT#R002` - Xử lý reconnect, join lại group và phân trang lịch sử mà không tạo dữ liệu trùng | must | test_or_review | [ ] | |
| `CAP-CHAT#R003` - Xác định thứ tự, trạng thái pending/sent/failed và quy tắc gửi lại khi offline | should | test_or_review | [ ] | |
| `CAP-CHAT#R004` - Kiểm tra quyền thành viên phòng và phân quyền trên server cho từng event | should | test+review | [ ] | |
| `CAP-CRUD#R001` - Xác định hành vi tìm kiếm, lọc, sắp xếp, phân trang và trạng thái rỗng | must | test_or_review | [ ] | |
| `CAP-CRUD#R002` - Phân quyền từng thao tác create/read/update/delete ở phía server | must | test+review | [ ] | |
| `CAP-CRUD#R003` - Xử lý cập nhật đồng thời, submit trùng và rollback thay đổi optimistic | should | test_or_review | [ ] | |
| `CAP-CRUD#R004` - Quy định feedback dễ tiếp cận cho validation và kết quả thao tác | should | test | [ ] | |
| `CAP-NOTIFY#R001` - Tách biệt message event, tùy chọn phân phối và cách trình bày | must | test_or_review | [ ] | |
| `CAP-NOTIFY#R002` - Tránh gửi dữ liệu riêng tư tới người nhận không được phép | must | test+review | [ ] | |
| `CAP-NOTIFY#R003` - Đảm bảo action từ notification có tính idempotent và validation destination | should | test_or_review | [ ] | |
| `CAP-NOTIFY#R004` - Kiểm thử phân phối trùng, bộ đếm chưa đọc và trạng thái dismissal | should | test | [ ] | |
| `CAP-PAYMENT#R001` - Bảo vệ lệnh thanh toán khỏi xử lý trùng | must | test_or_review | [ ] | |
| `CAP-PAYMENT#R002` - Xác minh webhook bằng chữ ký và chống replay | should | test+review | [ ] | |
| `CAP-PAYMENT#R003` - Mô hình trạng thái thanh toán tường minh | should | test_or_review | [ ] | |
| `CAP-PAYMENT#R004` - Đối soát ledger và provider | must | test_or_review | [ ] | |
| `CAP-PAYMENT#R005` - Bảo vệ dữ liệu thẻ và thông tin nhạy cảm | must | test+review | [ ] | |
| `CAP-PAYMENT#R006` - Ràng buộc tiền tệ và chống sửa số tiền | should | test_or_review | [ ] | |
| `CAP-PAYMENT#R007` - Quy trình hoàn tiền và tranh chấp có kiểm soát | should | test+review | [ ] | |
| `CAP-PAYMENT#R008` - Thử nghiệm lỗi tích hợp và kịch bản khôi phục | should | test_or_review | [ ] | |
| `CAP-PERM#R001` - Định nghĩa vai trò và quyền hạn thành các thao tác rõ ràng trên resource | must | test+review | [ ] | |
| `CAP-PERM#R002` - Thực thi kiểm tra quyền trong API thay vì chỉ ẩn UI | must | test+review | [ ] | |
| `CAP-PERM#R003` - Kiểm thử các trường hợp biên về đặc quyền tối thiểu, thu hồi quyền và role kế thừa | should | test | [ ] | |
| `CAP-PERM#R004` - Theo dõi thay đổi role nhạy cảm trong audit log | should | test+review | [ ] | |
| `CAP-PERM#R005` - Ngăn tự nâng đặc quyền | must | test+review | [ ] | |
| `CAP-PERM#R006` - Chuẩn hóa mã quyền giữa backend và UI | should | test+review | [ ] | |
| `CAP-PERM#R007` - Phân tách trách nhiệm cho tác vụ quan trọng | should | test+review | [ ] | |
| `CAP-PERM#R008` - Kiểm thử ma trận vai trò và đối tượng | should | test | [ ] | |
| `CAP-PROFILE#R001` - Giới hạn update cho đúng subject được ủy quyền và các field được phép | must | test+review | [ ] | |
| `CAP-PROFILE#R002` - Validation các field thay đổi và giữ nguyên giá trị hiện có của field không đổi | must | test_or_review | [ ] | |
| `CAP-PROFILE#R003` - Xử lý lỗi avatar/media và response xung đột | should | test_or_review | [ ] | |
| `CAP-PROFILE#R004` - Ghi audit cho các thay đổi hồ sơ nhạy cảm mà không làm lộ dữ liệu riêng tư | should | test+review | [ ] | |
| `CAP-REPORT#R001` - Tài liệu hóa định nghĩa metric, bộ lọc và múi giờ báo cáo | must | test_or_review | [ ] | |
| `CAP-REPORT#R002` - Đảm bảo dữ liệu tổng hợp tuân thủ quyền của tenant và người dùng | must | test_or_review | [ ] | |
| `CAP-REPORT#R003` - Cung cấp chỉ báo trạng thái loading, empty và dữ liệu một phần | should | test_or_review | [ ] | |
| `CAP-REPORT#R004` - Giới hạn query tốn tài nguyên và áp dụng cache theo yêu cầu về độ mới dữ liệu | should | test_or_review | [ ] | |
| `CAP-SEARCH#R001` - Xác định toán tử lọc, các field có thể tìm kiếm và thứ tự sắp xếp mặc định | must | test_or_review | [ ] | |
| `CAP-SEARCH#R002` - Lưu trạng thái filter có thể chia sẻ khi nền tảng cho phép | must | test_or_review | [ ] | |
| `CAP-SEARCH#R003` - Debounce input phía client và hủy các request đã lỗi thời | should | test_or_review | [ ] | |
| `CAP-SEARCH#R004` - Xử lý trường hợp không có kết quả, response chậm và tập dữ liệu phân trang | should | test_or_review | [ ] | |
| `CAP-SHARE#R001` - Validation quyền truy cập resource dùng chung và quy tắc hết hạn | must | test+review | [ ] | |
| `CAP-SHARE#R002` - Xử lý điều hướng khi app đã cài/chưa cài với fallback an toàn | must | test_or_review | [ ] | |
| `CAP-SHARE#R003` - Xem deferred attribution là best-effort và không cam kết tuyệt đối giữa các store | should | test_or_review | [ ] | |
| `CAP-SHARE#R004` - Ngăn open redirect và log an toàn các lỗi resolve link | should | test+review | [ ] | |
| `CAP-UPLOAD#R001` - Validation kích thước, loại và nội dung file trên server đáng tin cậy | must | test_or_review | [ ] | |
| `CAP-UPLOAD#R002` - Cung cấp progress, cancel, retry và cơ chế phục hồi khi lỗi | must | test_or_review | [ ] | |
| `CAP-UPLOAD#R003` - Sử dụng upload credential có thời hạn ngắn và tránh để file nhạy cảm ở chế độ public | should | test+review | [ ] | |
| `CAP-UPLOAD#R004` - Ghi nhận yêu cầu scanning và authorization trước khi chia sẻ nội dung | should | test+review | [ ] | |
| `STD-A11Y#R001` - Đáp ứng WCAG 2.2 AA theo phạm vi đã chọn | must | test | [ ] | |
| `STD-A11Y#R002` - Điều hướng bàn phím đầy đủ | should | test | [ ] | |
| `STD-A11Y#R003` - Tên và vai trò được đọc bởi assistive technology | should | test | [ ] | |
| `STD-A11Y#R004` - Thông báo lỗi và trạng thái dễ tiếp cận | must | test | [ ] | |
| `STD-A11Y#R005` - Đảm bảo tương phản và trạng thái focus | must | test | [ ] | |
| `STD-A11Y#R008` - Kiểm thử với assistive technology và người dùng | should | test | [ ] | |
| `STD-AI-APP#R002` - Giới hạn agency bằng capability tối thiểu và approval cho hành động rủi ro | must | test_or_review | [ ] | |
| `STD-AI-APP#R003` - Validate output model trước khi dùng làm command, query hoặc dữ liệu nghiệp vụ | must | test_or_review | [ ] | |
| `STD-AI-APP#R004` - RAG và vector store phải giữ nguyên authorization boundary | must | test_or_review | [ ] | |
| `STD-AI-APP#R007` - Giới hạn consumption, timeout và fallback để kiểm soát availability/cost | should | test_or_review | [ ] | |
| `STD-ANALYTICS#R001` - Thiết kế event schema và định nghĩa metric | must | test_or_review | [ ] | |
| `STD-ANALYTICS#R002` - Không gửi token hoặc PII không cần thiết | must | test+review | [ ] | |
| `STD-ANALYTICS#R005` - Kiểm thử chất lượng dữ liệu và funnel | should | test | [ ] | |
| `STD-API#R001` - Sử dụng endpoint contract có version với cấu trúc request/response được tài liệu hóa | must | test_or_review | [ ] | |
| `STD-API#R002` - Áp dụng nhất quán xác thực, phân quyền, phân trang và validation | must | test+review | [ ] | |
| `STD-API#R003` - Xác định mã lỗi chuẩn và correlation ID | should | test_or_review | [ ] | |
| `STD-API#R004` - Công bố OpenAPI và chạy kiểm tra contract đối với phần triển khai | should | test_or_review | [ ] | |
| `STD-API#R005` - Mock API phải bám hợp đồng thật và dùng fixture có kiểm soát | should | test | [ ] | |
| `STD-API-HTTP#R001` - Dùng mã 2xx đúng theo ý nghĩa thao tác | must | test_or_review | [ ] | |
| `STD-API-HTTP#R002` - Phân biệt xác thực và phân quyền | must | test+review | [ ] | |
| `STD-API-HTTP#R003` - Chuẩn hóa 400, 404, 405, 409 và 422 | must | test_or_review | [ ] | |
| `STD-API-HTTP#R004` - Áp dụng chính xác 429 và nhóm 5xx | must | test+review | [ ] | |
| `STD-API-HTTP#R005` - Phản hồi lỗi có cấu trúc ổn định | must | test_or_review | [ ] | |
| `STD-API-HTTP#R006` - Phân biệt lỗi cần hiển thị và lỗi nội bộ | must | test_or_review | [ ] | |
| `STD-API-HTTP#R007` - Retry có giới hạn và bảo vệ thao tác không idempotent | must | test_or_review | [ ] | |
| `STD-API-HTTP#R008` - Định nghĩa contract và test theo method | must | test | [ ] | |
| `STD-API-HTTP#R009` - Gắn correlation ID và quan sát lỗi an toàn | must | test+review | [ ] | |
| `STD-API-REST#R001` - Định danh resource và phương thức HTTP nhất quán | must | test_or_review | [ ] | |
| `STD-API-REST#R002` - Response và status nhất quán với STD-API-HTTP | must | test_or_review | [ ] | |
| `STD-API-REST#R003` - Giới hạn phân trang lọc và sort | must | test_or_review | [ ] | |
| `STD-API-REST#R004` - Định nghĩa concurrency và idempotency cho mutation | should | test_or_review | [ ] | |
| `STD-API-REST#R005` - Công bố OpenAPI và contract test | should | test | [ ] | |
| `STD-API-RT#R001` - Bảo vệ handshake và từng subscription | must | test_or_review | [ ] | |
| `STD-API-RT#R002` - Định nghĩa thứ tự, cursor và replay | must | test_or_review | [ ] | |
| `STD-API-RT#R003` - Quản lý heartbeat và reconnect backoff | must | test_or_review | [ ] | |
| `STD-API-RT#R004` - Áp dụng backpressure và giới hạn payload | should | test_or_review | [ ] | |
| `STD-API-RT#R005` - Giữ nhất quán snapshot sau reconnect | should | test_or_review | [ ] | |
| `STD-BE-ARCH#R001` - Tách giao thức, nghiệp vụ và persistence | must | test_or_review | [ ] | |
| `STD-BE-ARCH#R002` - Phụ thuộc đi về abstraction có chủ đích | must | test_or_review | [ ] | |
| `STD-BE-ARCH#R003` - Xác định ranh giới giao dịch theo use case | should | test_or_review | [ ] | |
| `STD-BE-ARCH#R004` - Hợp đồng module rõ và có test | should | test | [ ] | |
| `STD-BE-AUTH#R001` - Xác thực access token/session theo issuer và audience | must | test+review | [ ] | |
| `STD-BE-AUTH#R002` - Ủy quyền trên resource và tenant | should | test+review | [ ] | |
| `STD-BE-AUTH#R003` - Lưu mật khẩu bằng KDF chuyên dụng | should | test_or_review | [ ] | |
| `STD-BE-AUTH#R004` - Giới hạn đăng nhập và tránh enumeration | must | test+review | [ ] | |
| `STD-BE-AUTH#R005` - Quản lý refresh/session và thu hồi | must | test+review | [ ] | |
| `STD-BE-AUTH#R006` - Áp dụng MFA cho hành động nhạy cảm | should | test+review | [ ] | |
| `STD-BE-AUTH#R007` - Không trả credential/secret trong lỗi và log | should | test+review | [ ] | |
| `STD-BE-AUTH#R008` - Ma trận kiểm thử auth/permission | should | test | [ ] | |
| `STD-BE-CONCUR#R001` - Thiết kế idempotency cho lệnh có side effect | must | test_or_review | [ ] | |
| `STD-BE-CONCUR#R002` - Sử dụng transaction cho invariant đa bước | should | test_or_review | [ ] | |
| `STD-BE-CONCUR#R003` - Đặt optimistic concurrency hoặc locking phù hợp | should | test_or_review | [ ] | |
| `STD-BE-CONCUR#R004` - Bảo đảm không xử lý trùng consumer | must | test_or_review | [ ] | |
| `STD-BE-CONCUR#R005` - Outbox cho giao dịch DB và event | must | test_or_review | [ ] | |
| `STD-BE-CONCUR#R006` - Giới hạn concurrency và timeout | should | test_or_review | [ ] | |
| `STD-BE-CONCUR#R007` - Định nghĩa thứ tự và ownership khi bắt buộc | should | test_or_review | [ ] | |
| `STD-BE-CONCUR#R008` - Stress-test race condition theo invariant | should | test | [ ] | |
| `STD-BE-FILE#R001` - Giới hạn và xác thực tệp phía server | must | test_or_review | [ ] | |
| `STD-BE-FILE#R002` - Tên tệp và đường dẫn không do client điều khiển | must | test_or_review | [ ] | |
| `STD-BE-FILE#R003` - Quét và cách ly nội dung nguy hiểm | should | test_or_review | [ ] | |
| `STD-BE-FILE#R004` - Kiểm soát tải xuống và vòng đời | should | test_or_review | [ ] | |
| `STD-BE-FILE#R005` - Pipeline derivative và media caching phía backend | must | test_or_review | [ ] | |
| `STD-BE-HEALTH#R001` - Liveness không kiểm tra phụ thuộc xa | must | test_or_review | [ ] | |
| `STD-BE-HEALTH#R002` - Readiness kiểm tra khả năng nhận traffic | must | test_or_review | [ ] | |
| `STD-BE-HEALTH#R003` - Endpoint health ít lộ thông tin | should | test+review | [ ] | |
| `STD-BE-HEALTH#R004` - Test hoạt động khi dependency gián đoạn | should | test | [ ] | |
| `STD-BE-JOB#R001` - Tác vụ có cơ chế chống chạy trùng | must | test_or_review | [ ] | |
| `STD-BE-JOB#R002` - Thiết lập retry có giới hạn | must | test_or_review | [ ] | |
| `STD-BE-JOB#R003` - Checkpoint và phục hồi công việc dài | should | test_or_review | [ ] | |
| `STD-BE-JOB#R004` - Quan sát lịch sử thực thi và kết quả | should | test_or_review | [ ] | |
| `STD-BE-PERF#R001` - Đặt ngân sách độ trễ theo endpoint | must | test_or_review | [ ] | |
| `STD-BE-PERF#R002` - Tránh N+1 và payload dư thừa | must | test_or_review | [ ] | |
| `STD-BE-PERF#R003` - Giới hạn tài nguyên mỗi request | should | test_or_review | [ ] | |
| `STD-BE-PERF#R004` - Đo hiệu suất trên dữ liệu đại diện | should | test_or_review | [ ] | |
| `STD-BE-QUEUE#R001` - Consumer xử lý at-least-once an toàn | must | test_or_review | [ ] | |
| `STD-BE-QUEUE#R002` - Retry và dead-letter phân loại lỗi | must | test_or_review | [ ] | |
| `STD-BE-QUEUE#R003` - Quản lý thứ tự khi nghiệp vụ cần | should | test_or_review | [ ] | |
| `STD-BE-QUEUE#R004` - Giám sát độ trễ hàng đợi | should | test_or_review | [ ] | |
| `STD-BE-SEC#R001` - Áp dụng middleware bảo mật thống nhất | must | test+review | [ ] | |
| `STD-BE-SEC#R002` - Không tin dữ liệu từ client | should | test+review | [ ] | |
| `STD-BE-SEC#R003` - Giới hạn tần suất và tài nguyên | should | test+review | [ ] | |
| `STD-BE-SEC#R004` - An toàn với truy vấn và dữ liệu | must | test+review | [ ] | |
| `STD-BE-SEC#R005` - Bảo vệ outbound request và SSRF | must | test+review | [ ] | |
| `STD-BE-SEC#R006` - Quản lý secret và khóa | should | test+review | [ ] | |
| `STD-BE-SEC#R007` - Cấu hình CORS, header và transport | should | test+review | [ ] | |
| `STD-BE-SEC#R008` - Kiểm thử endpoint khi không có quyền | should | test | [ ] | |
| `STD-BE-TX#R001` - Transaction bao trọn invariant nội bộ | must | test_or_review | [ ] | |
| `STD-BE-TX#R002` - Không giữ transaction qua network I/O | must | test_or_review | [ ] | |
| `STD-BE-TX#R003` - Xử lý deadlock và serialization | should | test_or_review | [ ] | |
| `STD-BE-TX#R004` - Kiểm tra rollback qua fault injection | should | test_or_review | [ ] | |
| `STD-BE-VALID#R001` - Validate server dựa trên contract | must | test_or_review | [ ] | |
| `STD-BE-VALID#R002` - Phân biệt dữ liệu sai và lỗi nghiệp vụ | must | test_or_review | [ ] | |
| `STD-BE-VALID#R003` - Normalize trước kiểm tra uniqueness | should | test_or_review | [ ] | |
| `STD-BE-VALID#R004` - Không thay authorization bằng validation | should | test+review | [ ] | |
| `STD-CACHE#R001` - Khai báo owner key scope và TTL | must | test_or_review | [ ] | |
| `STD-CACHE#R002` - Định nghĩa invalidation khi write | must | test_or_review | [ ] | |
| `STD-CACHE#R003` - Chống cache stampede và quá tải | must | test_or_review | [ ] | |
| `STD-CACHE#R004` - Bảo vệ tính riêng tư và phân quyền | should | test+review | [ ] | |
| `STD-CACHE#R005` - Quan sát hit-rate và sự cố cache | should | test_or_review | [ ] | |
| `STD-CI#R005` - Pin và kiểm soát third-party CI action, build image và toolchain | must | test+review | [ ] | |
| `STD-CI#R006` - Sinh provenance/attestation gắn source, workflow và artifact digest | should | test+review | [ ] | |
| `STD-CLIENT-API#R001` - Phân loại lỗi networking và HTTP | must | test_or_review | [ ] | |
| `STD-CLIENT-API#R002` - Timeout, retry và backoff có giới hạn | must | test_or_review | [ ] | |
| `STD-CLIENT-API#R003` - Hủy request và tránh stale response | must | test_or_review | [ ] | |
| `STD-CLIENT-API#R004` - Single-flight token refresh và phân biệt 401/403 | should | test_or_review | [ ] | |
| `STD-CLIENT-API#R005` - Theo dõi phục hồi connectivity khi resume | should | test_or_review | [ ] | |
| `STD-CRYPTO#R002` - Tách khóa khỏi dữ liệu và áp dụng least privilege cho key access | must | test_or_review | [ ] | |
| `STD-CRYPTO#R004` - Dùng nguồn ngẫu nhiên mật mã cho token, nonce và secret | must | test_or_review | [ ] | |
| `STD-CRYPTO#R005` - Hash mật khẩu bằng password KDF và hỗ trợ nâng cost an toàn | must | test_or_review | [ ] | |
| `STD-DATA#R001` - Định nghĩa khóa và ràng buộc invariant trong DB | must | test_or_review | [ ] | |
| `STD-DATA#R002` - Thiết kế schema theo truy vấn thực tế | must | test_or_review | [ ] | |
| `STD-DATA#R003` - Quản lý audit và vòng đời bản ghi | must | test+review | [ ] | |
| `STD-DATA#R004` - Lưu tiền và thời gian không mất độ chính xác | should | test_or_review | [ ] | |
| `STD-DATA#R005` - Nâng schema tương thích đa phiên bản | should | test_or_review | [ ] | |
| `STD-DATA-MIG#R001` - Áp dụng expand-migrate-contract không làm gián đoạn | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R002` - Migration có định danh và thứ tự bất biến | should | test_or_review | [ ] | |
| `STD-DATA-MIG#R003` - Backfill theo batch và có checkpoint | should | test_or_review | [ ] | |
| `STD-DATA-MIG#R004` - Mọi thay đổi nguy hiểm có kế hoạch rollback/forward-fix | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R005` - Kiểm soát lock và giao dịch DDL | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R006` - Đảm bảo tương thích API và code version cũ | should | test_or_review | [ ] | |
| `STD-DATA-MIG#R007` - Đối soát dữ liệu sau migration | should | test_or_review | [ ] | |
| `STD-DATA-MIG#R008` - Quan sát và cảnh báo trong rollout | should | test_or_review | [ ] | |
| `STD-DATA-OWNERSHIP#R001` - Chỉ định authoritative source theo dữ liệu | must | test_or_review | [ ] | |
| `STD-DATA-OWNERSHIP#R002` - Định nghĩa cache freshness và invalidation | must | test_or_review | [ ] | |
| `STD-DATA-OWNERSHIP#R003` - Chống response out-of-order | must | test_or_review | [ ] | |
| `STD-DATA-OWNERSHIP#R004` - Quản lý optimistic mutation có đối soát | should | test_or_review | [ ] | |
| `STD-DATA-TX#R001` - Định ranh giới transaction theo invariant | must | test_or_review | [ ] | |
| `STD-DATA-TX#R002` - Kiểm soát update đồng thời và lost update | must | test_or_review | [ ] | |
| `STD-DATA-TX#R003` - Giảm deadlock và giao dịch kéo dài | must | test_or_review | [ ] | |
| `STD-DATA-TX#R004` - Tách transaction nội bộ và distributed workflow | should | test_or_review | [ ] | |
| `STD-DATA-TX#R005` - Xử lý trạng thái không chắc chắn | should | test_or_review | [ ] | |
| `STD-DATETIME#R001` - Phân loại đúng ngữ nghĩa mọi trường thời gian | must | test_or_review | [ ] | |
| `STD-DATETIME#R002` - Instant API phải có offset rõ ràng | must | test_or_review | [ ] | |
| `STD-DATETIME#R003` - Bảo toàn date-only và time-only | must | test_or_review | [ ] | |
| `STD-DATETIME#R004` - Lưu DB đúng kiểu thời gian và precision | must | test_or_review | [ ] | |
| `STD-DATETIME#R006` - Quy định rõ ranh giới convert và presentation | must | test_or_review | [ ] | |
| `STD-DATETIME#R007` - Đồng hồ có thẩm quyền cho nghiệp vụ nhạy thời gian | must | test_or_review | [ ] | |
| `STD-DATETIME#R008` - Query theo local-date phải đổi sang khoảng instant | must | test_or_review | [ ] | |
| `STD-DATETIME#R010` - Migration dữ liệu thời gian không mơ hồ | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R001` - Dùng HTTPS link làm địa chỉ chia sẻ chuẩn | must | test+review | [ ] | |
| `STD-DEEP-LINK#R002` - Cấu hình iOS Universal Links đúng xác thực domain | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R003` - Cấu hình Android App Links bằng Digital Asset Links | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R004` - Đảm bảo fallback khi chưa cài app và mở web an toàn | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R005` - Điều hướng đúng theo trạng thái đăng nhập và vòng đời | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R006` - Chống open redirect, giả mạo và lộ dữ liệu | must | test+review | [ ] | |
| `STD-DEEP-LINK#R007` - Xác định rõ giới hạn deferred deep linking | must | test+review | [ ] | |
| `STD-DEEP-LINK#R008` - Chuẩn hóa attribution, query và canonical URL | must | test_or_review | [ ] | |
| `STD-DEEP-LINK#R009` - Kiểm thử toàn bộ ma trận thiết bị và kênh mở | must | test | [ ] | |
| `STD-DEEP-LINK#R010` - Thiết lập giám sát link và phương án khôi phục | must | test+review | [ ] | |
| `STD-DEPLOY#R005` - Xác minh chữ ký/provenance trước khi promote artifact nhạy cảm | should | test+review | [ ] | |
| `STD-DESIGN#R001` - Handoff thiết kế có trạng thái tương tác | must | test_or_review | [ ] | |
| `STD-DESIGN#R002` - Đối chiếu bản build với thiết kế | must | test_or_review | [ ] | |
| `STD-DESIGN#R003` - Thiết kế tương tác khả thi | should | test | [ ] | |
| `STD-DESIGN#R004` - Quản lý thay đổi phiên bản thiết kế | should | test_or_review | [ ] | |
| `STD-DOTNET#R001` - Tách controller/endpoint khỏi application/domain rule và persistence | must | test_or_review | [ ] | |
| `STD-DOTNET#R002` - Sử dụng dependency injection với vòng đời resource theo scope | must | test_or_review | [ ] | |
| `STD-DOTNET#R003` - Validation DTO đầu vào và triển khai error contract tập trung | should | test_or_review | [ ] | |
| `STD-DOTNET#R004` - Bảo vệ endpoint bằng authorization theo policy và integration test | should | test | [ ] | |
| `STD-DOTNET-API#R001` - Đặt middleware theo thứ tự bảo mật chuẩn | must | test+review | [ ] | |
| `STD-DOTNET-API#R002` - Dùng DI lifetime tương thích scope | must | test_or_review | [ ] | |
| `STD-DOTNET-API#R003` - Validate input và map error thống nhất | must | test_or_review | [ ] | |
| `STD-DOTNET-API#R004` - Luồng async và cancellation xuyên suốt | should | test+review | [ ] | |
| `STD-DOTNET-API#R005` - Áp dụng authorization trên mọi resource | should | test+review | [ ] | |
| `STD-DOTNET-EF#R001` - Đọc dữ liệu không tracking có chủ đích | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R002` - Chặn N+1 query và cartesian explosion | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R003` - Thực thi migration có kiểm soát | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R004` - Quản lý optimistic concurrency và transactions | should | test+review | [ ] | |
| `STD-DOTNET-EF#R005` - Bảo vệ query thô và connection | should | test+review | [ ] | |
| `STD-DOTNET-TEST#R001` - Phân tầng unit và integration test | must | test | [ ] | |
| `STD-DOTNET-TEST#R002` - Test auth và authorization negative case | must | test | [ ] | |
| `STD-DOTNET-TEST#R003` - Cô lập test và dữ liệu deterministic | must | test | [ ] | |
| `STD-DOTNET-TEST#R004` - Kiểm thử failure/retry và concurrency | should | test | [ ] | |
| `STD-DOTNET-TEST#R005` - Đưa test vào quality gate phù hợp | should | test | [ ] | |
| `STD-DS#R001` - Sử dụng design token tập trung | must | test+review | [ ] | |
| `STD-DS#R002` - Định nghĩa component API nhất quán | must | test_or_review | [ ] | |
| `STD-DS#R003` - Kiểm thử component trên các state | should | test | [ ] | |
| `STD-DS#R004` - Version và migration token/component | should | test+review | [ ] | |
| `STD-ENV#R001` - Phân tách môi trường và quyền truy cập | must | test+review | [ ] | |
| `STD-ENV#R006` - Feature/mock flag phải có default an toàn và không thể vô tình bật trên production | must | test+review | [ ] | |
| `STD-ERR#R002` - Sử dụng error/result có kiểu dữ liệu và message an toàn cho người dùng, không làm lộ chi tiết nhạy cảm | must | test_or_review | [ ] | |
| `STD-ERR#R004` - Log ngữ cảnh chẩn đoán nhưng phải ngăn rò rỉ secret và dữ liệu cá nhân | should | test+review | [ ] | |
| `STD-EVENT#R001` - Dùng event envelope ổn định và đủ truy vết | must | test_or_review | [ ] | |
| `STD-EVENT#R002` - Tiến hóa schema theo hướng tương thích và công bố contract | must | test | [ ] | |
| `STD-EVENT#R003` - Định nghĩa delivery semantics, idempotency và duplicate handling | must | test | [ ] | |
| `STD-EVENT#R004` - Xử lý ordering bằng sequence/version thay vì dựa thời điểm nhận | must | test_or_review | [ ] | |
| `STD-EVENT#R005` - Có DLQ/quarantine, replay và retention với guard chống side effect lặp | should | runtime | [ ] | |
| `STD-EVENT#R006` - Quan sát lag, retry, throughput và failure theo producer/consumer contract | should | runtime | [ ] | |
| `STD-FEEDBACK#R001` - Thông báo tương ứng tác động thao tác | must | test_or_review | [ ] | |
| `STD-FEEDBACK#R003` - Ngăn spam thông báo lặp | should | test_or_review | [ ] | |
| `STD-FEEDBACK#R006` - Haptic feedback chỉ dùng cho sự kiện có ý nghĩa và không thay thế feedback thị giác | should | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R001` - Validate MIME, extension, size và nội dung | must | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R002` - Upload an toàn và có thể phục hồi | must | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R003` - Quản lý lifecycle và orphan cleanup | must | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R004` - Bảo vệ download và nội dung nhạy cảm | should | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R005` - Xử lý metadata, thumbnail và EXIF | should | test_or_review | [ ] | |
| `STD-FILE-LIFECYCLE#R006` - Bàn giao media lifecycle sang delivery contract | must | test_or_review | [ ] | |
| `STD-FL-BLOC#R001` - Sử dụng BLoC/Cubit cho feature state và các state transition rõ ràng | must | test_or_review | [ ] | |
| `STD-FL-BLOC#R002` - Widget chỉ render state và dispatch intention; không gọi Dio trực tiếp | must | test_or_review | [ ] | |
| `STD-FL-BLOC#R003` - Kiểm thử các trạng thái success, loading, empty, validation và failure | should | test | [ ] | |
| `STD-FL-BLOC#R004` - Đóng stream/subscription và ngăn phát sinh emission sau khi dispose | should | test_or_review | [ ] | |
| `STD-FL-DART#R001` - Bật analyzer lint nghiêm ngặt và format code nhất quán | must | test_or_review | [ ] | |
| `STD-FL-DART#R002` - Sử dụng model immutable và kiểu null-safe khi phù hợp | must | test_or_review | [ ] | |
| `STD-FL-DART#R003` - Giữ xử lý lỗi async có kiểu dữ liệu rõ ràng và tránh nuốt exception | should | test_or_review | [ ] | |
| `STD-FL-DART#R004` - Tổ chức import thư viện và trách nhiệm file theo cách nhất quán, dễ dự đoán | should | test_or_review | [ ] | |
| `STD-FL-ROUTE#R001` - Xác định named route và path/query parameter đã được validation | must | test_or_review | [ ] | |
| `STD-FL-ROUTE#R002` - Áp dụng redirect guard cho route được bảo vệ mà không tạo vòng lặp redirect | must | test_or_review | [ ] | |
| `STD-FL-ROUTE#R003` - Xử lý deep link khi cold start và khi ứng dụng resume | should | test_or_review | [ ] | |
| `STD-FL-ROUTE#R004` - Kiểm thử semantics của browser/back stack khi hỗ trợ Flutter web | should | test | [ ] | |
| `STD-FL-TEST#R001` - Kiểm thử transition của Cubit cho từng acceptance flow | must | test | [ ] | |
| `STD-FL-TEST#R002` - Sử dụng widget test cho layout, validation và accessibility | must | test | [ ] | |
| `STD-FL-TEST#R003` - Chạy end-to-end test cho auth, navigation và phục hồi offline | should | test | [ ] | |
| `STD-FL-TEST#R004` - Sử dụng fake clock/network có tính xác định khi timing quan trọng | should | test_or_review | [ ] | |
| `STD-FL-TEST#R005` - Cung cấp mock API có thể bật bằng cấu hình và dùng fixture khớp contract | should | test | [ ] | |
| `STD-FL-TEST#R006` - Kiểm thử process death/state restoration và memory regression cho luồng quan trọng | should | test | [ ] | |
| `STD-FL-WIDGET#R001` - Tập trung quản lý màu sắc, typography, spacing và theme token | must | test+review | [ ] | |
| `STD-FL-WIDGET#R002` - Tổ hợp các widget nhỏ thay vì sử dụng build method quá lớn | must | test_or_review | [ ] | |
| `STD-FL-WIDGET#R003` - Tuân thủ MediaQuery, SafeArea và text scale phục vụ accessibility | should | test | [ ] | |
| `STD-FL-WIDGET#R004` - Render và đối chiếu widget với thiết kế màn hình đã được duyệt | should | test_or_review | [ ] | |
| `STD-FL-WIDGET#R005` - Dùng lazy list cho tập dữ liệu dài và chỉ áp dụng extent/keep-alive khi đúng điều kiện | must | test_or_review | [ ] | |
| `STD-FL-WIDGET#R006` - Decode ảnh Flutter theo kích thước render và dùng cache provider có giới hạn | must | test_or_review | [ ] | |
| `STD-FL-WIDGET#R007` - Dispose tài nguyên Flutter do State hoặc controller sở hữu | must | test_or_review | [ ] | |
| `STD-FL-WIDGET#R008` - Dùng Flutter restoration cho state UI phù hợp và persistence riêng cho draft nghiệp vụ | should | test_or_review | [ ] | |
| `STD-FORM#R001` - Xác thực đúng lớp và thời điểm | must | test_or_review | [ ] | |
| `STD-FORM#R002` - Giữ dữ liệu khi gửi lỗi | must | test_or_review | [ ] | |
| `STD-FORM#R003` - Ngăn submit trùng và yêu cầu không cần thiết | should | test_or_review | [ ] | |
| `STD-FORM#R004` - Input truy cập được bằng bàn phím | should | test | [ ] | |
| `STD-I18N#R002` - Định dạng ngày số và tiền theo locale | must | test_or_review | [ ] | |
| `STD-ID#R001` - Phân biệt internal PK và public identifier | must | test_or_review | [ ] | |
| `STD-ID#R002` - Chọn UUID/ULID/int theo access pattern | must | test_or_review | [ ] | |
| `STD-ID#R003` - Serialize ID không mất chính xác | must | test_or_review | [ ] | |
| `STD-ID#R004` - Không tái sử dụng ID và giữ referential integrity | should | test_or_review | [ ] | |
| `STD-INTEGRATION#R001` - Hợp đồng adapter và mapping rõ ràng | must | test_or_review | [ ] | |
| `STD-INTEGRATION#R002` - Bảo vệ credential và dữ liệu truyền đi | must | test+review | [ ] | |
| `STD-INTEGRATION#R003` - Retry chỉ cho lỗi tạm thời và idempotent | must | test_or_review | [ ] | |
| `STD-INTEGRATION#R004` - Giới hạn tài nguyên và cô lập sự cố | should | test_or_review | [ ] | |
| `STD-INTEGRATION#R005` - Đối soát và test contract nâng cấp | should | test | [ ] | |
| `STD-MEDIA#R001` - Phân loại media và contract variant | must | test_or_review | [ ] | |
| `STD-MEDIA#R002` - Thumbnail bắt buộc cho danh sách và preview nhỏ | must | test_or_review | [ ] | |
| `STD-MEDIA#R003` - Chính sách variant và giữ tỷ lệ | should | test_or_review | [ ] | |
| `STD-MEDIA#R004` - Chọn format và compression tương thích | should | test_or_review | [ ] | |
| `STD-MEDIA#R005` - Media URL versioned và cache immutable | must | test_or_review | [ ] | |
| `STD-MEDIA#R006` - Tách chính sách cache theo độ nhạy cảm | must | test_or_review | [ ] | |
| `STD-MEDIA#R007` - Chính sách cache đa tầng có giới hạn | must | test_or_review | [ ] | |
| `STD-MEDIA#R008` - Xử lý original có kiểm soát | must | test_or_review | [ ] | |
| `STD-MEDIA#R009` - Đường sinh derivative an toàn và hiệu quả | must | test_or_review | [ ] | |
| `STD-MEDIA#R010` - Fallback, loading và hiển thị ổn định | must | test_or_review | [ ] | |
| `STD-MEDIA#R011` - Prefetch và huỷ tác vụ theo ngữ cảnh | should | test_or_review | [ ] | |
| `STD-MEDIA#R012` - Observability và acceptance tests cho media | must | test_or_review | [ ] | |
| `STD-MOB-ARCH#R001` - Đặt tích hợp nền tảng phía sau interface/adapter | must | test_or_review | [ ] | |
| `STD-MOB-ARCH#R002` - Tách trách nhiệm presentation, application state và domain/data | must | test_or_review | [ ] | |
| `STD-MOB-ARCH#R003` - Thiết kế hành vi suy giảm chức năng khi mất mạng hoặc tiến trình ứng dụng bị kết thúc | should | test_or_review | [ ] | |
| `STD-MOB-ARCH#R004` - Xác định rõ khác biệt capability giữa iOS và Android | should | test+review | [ ] | |
| `STD-MOB-DEVICE#R001` - Chỉ yêu cầu runtime permission tối thiểu cần thiết và giải thích mục đích sử dụng | must | test+review | [ ] | |
| `STD-MOB-DEVICE#R002` - Xử lý các trạng thái quyền bị từ chối, bị giới hạn và bị từ chối vĩnh viễn | must | test+review | [ ] | |
| `STD-MOB-DEVICE#R003` - Chặn các capability không được nền tảng hỗ trợ và cung cấp phương án thay thế | should | test+review | [ ] | |
| `STD-MOB-DEVICE#R004` - Giải phóng tài nguyên thiết bị khi cancel, chuyển background hoặc thoát | should | test+review | [ ] | |
| `STD-MOB-LIFE#R001` - Mô hình hóa foreground, background, resume và process recreation thành các trường hợp riêng biệt | must | test_or_review | [ ] | |
| `STD-MOB-LIFE#R002` - Reconnect socket và refresh state đã stale bằng logic có giới hạn và idempotent | must | test_or_review | [ ] | |
| `STD-MOB-LIFE#R003` - Dispose listener/controller và hủy các thao tác đã không còn cần thiết | should | test_or_review | [ ] | |
| `STD-MOB-LIFE#R004` - Kiểm thử việc app bị gián đoạn trong quá trình login, upload, notification và realtime session | should | test | [ ] | |
| `STD-MOB-LIFE#R005` - Khôi phục trạng thái người dùng quan trọng sau process recreation | must | test_or_review | [ ] | |
| `STD-MOB-LIFE#R006` - Lưu draft cục bộ cho form quan trọng với TTL và chính sách dữ liệu rõ ràng | should | test_or_review | [ ] | |
| `STD-MOB-NAV#R001` - Xác định route argument có kiểu dữ liệu và guard cho xác thực/điều hướng | must | test_or_review | [ ] | |
| `STD-MOB-NAV#R002` - Hỗ trợ initial link, link khi app resume và destination không hợp lệ/hết hạn | must | test_or_review | [ ] | |
| `STD-MOB-NAV#R003` - Xác minh Android App Links và iOS Universal Links bằng file association của domain | should | test_or_review | [ ] | |
| `STD-MOB-NAV#R004` - Ngăn điều hướng trùng do các callback notification/link cạnh tranh nhau | should | test_or_review | [ ] | |
| `STD-MOB-OFF#R001` - Xác định rõ thao tác có thể đọc và ghi khi offline | must | test_or_review | [ ] | |
| `STD-MOB-OFF#R002` - Sử dụng retry có giới hạn kèm backoff và chỉ retry operation an toàn về idempotency | must | test_or_review | [ ] | |
| `STD-MOB-OFF#R003` - Xác định quy tắc xử lý xung đột và đối soát các thao tác ghi đang chờ | should | test_or_review | [ ] | |
| `STD-MOB-OFF#R004` - Kiểm thử kết nối chập chờn và submit trùng | should | test | [ ] | |
| `STD-MOB-PERF#R001` - Tránh các request khởi động chạy đồng thời không cần thiết và công việc nặng trên main thread | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R002` - Đo thời gian khởi động, frame timing, mức sử dụng mạng và bộ nhớ trên thiết bị thật | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R003` - Giới hạn tần suất background polling, location và vòng lặp reconnect | should | test_or_review | [ ] | |
| `STD-MOB-PERF#R004` - Giải phóng subscription, controller, timer và listener theo đúng vòng đời | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R005` - Giới hạn kích thước decode và bộ nhớ đệm của ảnh theo kích thước hiển thị | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R006` - Virtualize danh sách dài và tránh dựng trước toàn bộ item | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R007` - Giới hạn decoded image cache theo viewport và DPR | must | test_or_review | [ ] | |
| `STD-MOB-PUSH#R001` - Xử lý riêng message ở trạng thái foreground, background và terminated | must | test_or_review | [ ] | |
| `STD-MOB-PUSH#R002` - Yêu cầu quyền thông báo tại thời điểm phù hợp với ngữ cảnh và xử lý được trường hợp người dùng từ chối | must | test+review | [ ] | |
| `STD-MOB-PUSH#R003` - Khử trùng lặp action từ notification và xác thực route payload | should | test_or_review | [ ] | |
| `STD-MOB-PUSH#R004` - Tránh đưa nội dung nhạy cảm vào push payload không đáng tin cậy | should | test+review | [ ] | |
| `STD-MOB-RELEASE#R001` - Lưu signing key và credential trong vùng lưu trữ được bảo vệ | must | test+review | [ ] | |
| `STD-MOB-RELEASE#R002` - Tách application ID, môi trường và build flavor khi cần | must | test_or_review | [ ] | |
| `STD-MOB-RELEASE#R003` - Duy trì version/build number, khai báo quyền riêng tư và credential phục vụ review | should | test+review | [ ] | |
| `STD-MOB-RELEASE#R004` - Kiểm thử release build trên thiết bị iOS/Android thật | should | test | [ ] | |
| `STD-MOB-SEC#R001` - Lưu token nhạy cảm vào kho bảo mật của OS | must | test+review | [ ] | |
| `STD-MOB-SEC#R002` - Xác minh TLS và endpoint | should | test+review | [ ] | |
| `STD-MOB-SEC#R003` - Không hardcode bí mật máy chủ vào ứng dụng | should | test+review | [ ] | |
| `STD-MOB-SEC#R004` - Kiểm tra deep link và app link | must | test+review | [ ] | |
| `STD-MOB-SEC#R005` - Bảo vệ dữ liệu nhạy cảm khi background | must | test+review | [ ] | |
| `STD-MOB-SEC#R006` - Giới hạn dữ liệu lưu offline | should | test+review | [ ] | |
| `STD-MOB-SEC#R007` - Bảo vệ release và cấu hình debug | should | test+review | [ ] | |
| `STD-MOB-SEC#R008` - Kiểm thử threat mobile thực tế | should | test | [ ] | |
| `STD-MOB-STORE#R001` - Lưu secret trong secure storage do OS bảo vệ thay vì preference thông thường | must | test+review | [ ] | |
| `STD-MOB-STORE#R002` - Đặt chính sách lưu giữ, cleanup khi logout và cô lập khi chuyển tài khoản | must | test_or_review | [ ] | |
| `STD-MOB-STORE#R003` - Mã hóa dữ liệu offline nhạy cảm khi threat model yêu cầu | should | test+review | [ ] | |
| `STD-MOB-STORE#R004` - Hỗ trợ migration storage và phục hồi khi state bị hỏng | should | test_or_review | [ ] | |
| `STD-MOB-UI#R001` - Tuân thủ safe area, text scaling và system navigation inset | must | test | [ ] | |
| `STD-MOB-UI#R002` - Giữ input đang focus luôn nhìn thấy khi bàn phím hiển thị | must | test | [ ] | |
| `STD-MOB-UI#R003` - Cung cấp các trạng thái loading, empty, error và tương tác bị gián đoạn | should | test | [ ] | |
| `STD-MOB-UI#R004` - Xác minh portrait/landscape và các mật độ màn hình khác nhau khi được hỗ trợ | should | test | [ ] | |
| `STD-NEXT#R001` - Ưu tiên server component mặc định cho các trường hợp hiển thị dữ liệu phù hợp | must | test_or_review | [ ] | |
| `STD-NEXT#R002` - Chỉ khai báo ranh giới client ở nơi thực sự cần tương tác trình duyệt | must | test_or_review | [ ] | |
| `STD-NEXT#R003` - Bảo vệ server action và route handler bằng authorization và validation | should | test+review | [ ] | |
| `STD-NEXT#R004` - Cấu hình cache, dynamic rendering và revalidation một cách chủ đích | should | test_or_review | [ ] | |
| `STD-NOTIFICATION#R001` - Hợp đồng notification domain event và channel | must | test_or_review | [ ] | |
| `STD-NOTIFICATION#R002` - Kiểm tra consent và preference trước gửi | must | test_or_review | [ ] | |
| `STD-NOTIFICATION#R003` - At-least-once có dedup và backoff | must | test_or_review | [ ] | |
| `STD-NOTIFICATION#R004` - Vòng đời device token và permission | should | test_or_review | [ ] | |
| `STD-NOTIFICATION#R005` - Tracking và observability đảm bảo privacy | should | test_or_review | [ ] | |
| `STD-PAGINATION#R001` - Chọn offset hoặc cursor dựa vào use case | must | test_or_review | [ ] | |
| `STD-PAGINATION#R002` - Đảm bảo total ordering và cursor ổn định | must | test_or_review | [ ] | |
| `STD-PAGINATION#R003` - Chuẩn hóa response paging metadata | must | test_or_review | [ ] | |
| `STD-PAGINATION#R004` - Reset pagination khi filter/sort thay đổi | should | test_or_review | [ ] | |
| `STD-PERF#R003` - Giới hạn tải dữ liệu và số lần gọi | must | test_or_review | [ ] | |
| `STD-PG#R001` - Theo dõi thay đổi schema bằng migration có thể rollback hoặc an toàn theo hướng tiến tới | must | test_or_review | [ ] | |
| `STD-PG#R002` - Sử dụng constraint, foreign key và truy cập có index dựa trên query plan | must | test_or_review | [ ] | |
| `STD-PG#R003` - Parameterize query và quản lý transaction quanh các business invariant | should | test_or_review | [ ] | |
| `STD-PG#R004` - Theo dõi query chậm và áp dụng database role theo nguyên tắc đặc quyền tối thiểu | should | test+review | [ ] | |
| `STD-PRIV#R001` - Lập bản đồ PII và mục đích xử lý | must | test+review | [ ] | |
| `STD-PRIV#R002` - Tối thiểu hóa dữ liệu thu thập và chia sẻ | should | test+review | [ ] | |
| `STD-PRIV#R004` - Kiểm soát truy cập PII theo mục đích | must | test+review | [ ] | |
| `STD-PRIV#R005` - Ẩn PII trong log và môi trường thử nghiệm | must | test+review | [ ] | |
| `STD-PRIV#R007` - Đánh giá bên thứ ba và chuyển dữ liệu | should | test+review | [ ] | |
| `STD-PRIV#R008` - Xử lý sự cố và yêu cầu chủ thể dữ liệu | should | test+review | [ ] | |
| `STD-REACT#R001` - Giữ component thuần và đặt side effect trong hook phù hợp với lifecycle | must | test_or_review | [ ] | |
| `STD-REACT#R002` - Tách các hành vi nghiệp vụ lặp lại thành feature hook/service | must | test_or_review | [ ] | |
| `STD-REACT#R003` - Sử dụng key ổn định và tránh sao chép derived state không cần thiết | should | test_or_review | [ ] | |
| `STD-REACT#R004` - Giữ ranh giới component phù hợp với trách nhiệm và khả năng kiểm thử | should | test | [ ] | |
| `STD-REACT-TEST#R001` - Kiểm thử kết quả người dùng có thể quan sát thay vì chi tiết triển khai nội bộ | must | test | [ ] | |
| `STD-REACT-TEST#R002` - Mock ranh giới network và bao phủ các trạng thái loading/error/empty | must | test_or_review | [ ] | |
| `STD-REACT-TEST#R003` - Chạy kiểm tra tương tác tập trung vào accessibility trên form và dialog | should | test | [ ] | |
| `STD-REACT-TEST#R004` - Kiểm thử hành vi điều hướng và mutation cho các luồng quan trọng | should | test | [ ] | |
| `STD-RES#R004` - Kiểm thử failure injection và phục hồi | should | test | [ ] | |
| `STD-RN#R001` - Bọc các lời gọi native module và xử lý lỗi permission hoặc OS | must | test+review | [ ] | |
| `STD-RN#R002` - Không chặn JS thread bằng các thao tác đồng bộ tốn tài nguyên | must | test_or_review | [ ] | |
| `STD-RN#R003` - Tài liệu hóa các giả định về Expo so với bare workflow cho từng project | should | test_or_review | [ ] | |
| `STD-RN#R004` - Kiểm thử phần triển khai đặc thù nền tảng trên thiết bị thật được hỗ trợ | should | test | [ ] | |
| `STD-RN-NAV#R001` - Chọn một hệ thống routing cho project và định nghĩa route parameter có kiểu dữ liệu rõ ràng | must | test_or_review | [ ] | |
| `STD-RN-NAV#R002` - Xử lý nhất quán back navigation, nested stack và chuyển trạng thái xác thực | must | test_or_review | [ ] | |
| `STD-RN-NAV#R003` - Khử trùng lặp điều hướng được kích hoạt bởi link, push hoặc thay đổi trạng thái ứng dụng | should | test_or_review | [ ] | |
| `STD-RN-NAV#R004` - Chỉ lưu navigation state an toàn và validation destination sau khi khôi phục | should | test_or_review | [ ] | |
| `STD-RN-STATE#R001` - Chọn và tài liệu hóa một chiến lược quản lý client state thống nhất | must | test_or_review | [ ] | |
| `STD-RN-STATE#R002` - Tách biệt remote query state khỏi local UI state | must | test_or_review | [ ] | |
| `STD-RN-STATE#R003` - Chỉ khôi phục state sau process recreation khi bảo đảm an toàn | should | test+review | [ ] | |
| `STD-RN-STATE#R004` - Kiểm thử transition sau background, resume và chuyển tài khoản | should | test | [ ] | |
| `STD-RN-STORE#R001` - Phân loại dữ liệu trước khi lưu thiết bị | must | test+review | [ ] | |
| `STD-RN-STORE#R002` - Tách cache theo tài khoản và xóa khi logout | must | test+review | [ ] | |
| `STD-RN-STORE#R003` - Migration cấu trúc local storage có kiểm thử | must | test | [ ] | |
| `STD-RN-STORE#R004` - Giới hạn cache và khả năng phục hồi | should | test_or_review | [ ] | |
| `STD-RN-STORE#R005` - Không lộ dữ liệu qua backup hoặc debug | should | test+review | [ ] | |
| `STD-RN-TEST#R001` - Kiểm thử màn hình chính trong điều kiện loading, error và offline | must | test | [ ] | |
| `STD-RN-TEST#R002` - Kiểm thử navigation và deep link destination trên thiết bị | must | test | [ ] | |
| `STD-RN-TEST#R003` - Mock native adapter trong unit test và xác minh tích hợp thực tế riêng biệt | should | test | [ ] | |
| `STD-RN-TEST#R004` - Kiểm thử khác biệt nền tảng trong test matrix CI/device | should | test | [ ] | |
| `STD-RQ#R001` - Sử dụng query key bao gồm mọi parameter có ý nghĩa | must | test_or_review | [ ] | |
| `STD-RQ#R002` - Invalidate hoặc cập nhật query sau mutation với ownership rõ ràng | must | test_or_review | [ ] | |
| `STD-RQ#R003` - Xử lý rõ ràng việc hủy, dữ liệu stale và retry policy | should | test_or_review | [ ] | |
| `STD-RQ#R004` - Không sao chép server state vào các global store ad hoc trùng lặp | should | test_or_review | [ ] | |
| `STD-SEARCH#R001` - Định nghĩa chuẩn normalize Unicode có chủ đích | must | test_or_review | [ ] | |
| `STD-SEARCH#R002` - Tách searching khỏi exact matching nghiệp vụ | must | test_or_review | [ ] | |
| `STD-SEARCH#R003` - Giới hạn query và bảo vệ performance | must | test_or_review | [ ] | |
| `STD-SEARCH#R004` - Contract ranking, highlight và paging | should | test_or_review | [ ] | |
| `STD-SEC#R001` - Thực thi authentication và authorization tại ranh giới server đáng tin cậy | must | test+review | [ ] | |
| `STD-SEC#R004` - Thực hiện threat model cho luồng nhạy cảm và review các phát hiện về dependency/security | should | test+review | [ ] | |
| `STD-SEC#R006` - Bảo vệ dữ liệu khi truyền và lưu | should | test+review | [ ] | |
| `STD-TENANCY#R001` - Tenant context phải đến từ identity đáng tin cậy và được kiểm tra phía server | must | test_or_review | [ ] | |
| `STD-TENANCY#R003` - Đưa tenant vào invariant uniqueness, idempotency và rate/quota scope khi cần | must | test_or_review | [ ] | |
| `STD-TENANCY#R005` - Kiểm soát noisy-neighbor bằng quota, fairness và resource isolation | should | test_or_review | [ ] | |
| `STD-TENANCY#R006` - Tenant lifecycle phải bao phủ onboarding, transfer, export, deletion và offboarding | should | test_or_review | [ ] | |
| `STD-TS#R001` - Bật strict mode và tránh ép kiểu `any` khi chưa được review | must | test_or_review | [ ] | |
| `STD-TS#R002` - Tách API DTO khỏi domain model và view model | must | test_or_review | [ ] | |
| `STD-TS#R003` - Validation runtime input không đáng tin cậy tại ranh giới hệ thống | should | test_or_review | [ ] | |
| `STD-TS#R004` - Sử dụng discriminated union cho các biến thể result và state | should | test_or_review | [ ] | |
| `STD-UI-STATE#R001` - Phân biệt đầy đủ các trạng thái dữ liệu | must | test_or_review | [ ] | |
| `STD-UI-STATE#R002` - Chặn response cũ ghi đè response mới | must | test_or_review | [ ] | |
| `STD-UI-STATE#R003` - Trạng thái thao tác độc lập với tải trang | should | test_or_review | [ ] | |
| `STD-UI-STATE#R004` - Làm rõ optimistic update và rollback | should | test_or_review | [ ] | |
| `STD-UX#R001` - Luồng chính có điểm hoàn thành rõ | must | test_or_review | [ ] | |
| `STD-UX#R002` - Hạn chế bất ngờ và hành vi phá hủy | must | test_or_review | [ ] | |
| `STD-UX#R003` - Điều hướng giữ ngữ cảnh | should | test_or_review | [ ] | |
| `STD-UX#R004` - Nội dung hành động cụ thể | should | test_or_review | [ ] | |
| `STD-VULN#R005` - Theo dõi phiên bản bị ảnh hưởng và khả năng phản ứng khẩn cấp | must | test+review | [ ] | |
| `STD-WEB-ARCH#R001` - Tách route/page, feature, shared component và infrastructure adapter | must | test_or_review | [ ] | |
| `STD-WEB-ARCH#R002` - Không đặt quy tắc nghiệp vụ trong logic rendering và browser event handler | must | test_or_review | [ ] | |
| `STD-WEB-ARCH#R003` - Xác định ranh giới tin cậy giữa browser/server và ownership của API contract | should | test+review | [ ] | |
| `STD-WEB-ARCH#R004` - Tránh dependency vòng giữa các feature và module utility dùng chung không có ranh giới rõ ràng | should | test_or_review | [ ] | |
| `STD-WEB-AUTH#R001` - Ưu tiên cookie HttpOnly an toàn khi kiến trúc session hỗ trợ | must | test+review | [ ] | |
| `STD-WEB-AUTH#R002` - Bảo vệ các endpoint thay đổi trạng thái dùng xác thực bằng cookie khỏi CSRF | must | test+review | [ ] | |
| `STD-WEB-AUTH#R003` - Xử lý hết hạn và refresh mà không làm lộ credential cho UI component | should | test+review | [ ] | |
| `STD-WEB-AUTH#R004` - Phân quyền mọi thao tác được bảo vệ ở phía server; route guard chỉ phục vụ UX | should | test+review | [ ] | |
| `STD-WEB-AUTH#R005` - Không leak trạng thái phiên qua URL | must | test+review | [ ] | |
| `STD-WEB-AUTH#R006` - Logout và đổi tài khoản làm sạch state | should | test+review | [ ] | |
| `STD-WEB-AUTH#R007` - Xử lý lỗi thân thiện, không lộ chi tiết | should | test+review | [ ] | |
| `STD-WEB-AUTH#R008` - Kiểm thử session đa tab và cạnh tranh | should | test | [ ] | |
| `STD-WEB-FORM#R001` - Giữ validation phía client đồng bộ với server contract nhưng không tin cậy kiểm tra từ client | must | test_or_review | [ ] | |
| `STD-WEB-FORM#R002` - Hiển thị lỗi theo field, lỗi server và lỗi cấp form theo cách hỗ trợ accessibility | must | test | [ ] | |
| `STD-WEB-FORM#R003` - Ngăn submit hai lần ngoài ý muốn và lưu draft an toàn khi phù hợp | should | test_or_review | [ ] | |
| `STD-WEB-FORM#R004` - Hỗ trợ luồng submit bằng bàn phím và screen reader | should | test | [ ] | |
| `STD-WEB-PERF#R001` - Đặt budget có thể đo lường cho bundle size, LCP, INP và error rate | must | test_or_review | [ ] | |
| `STD-WEB-PERF#R002` - Phân trang hoặc virtualize danh sách dài và tránh API payload không giới hạn | must | test_or_review | [ ] | |
| `STD-WEB-PERF#R003` - Profile rerender, event listener và bộ nhớ trước khi bổ sung tối ưu hóa | should | test_or_review | [ ] | |
| `STD-WEB-PERF#R004` - Trì hoãn công việc không quan trọng và cung cấp các trạng thái loading/empty/error | should | test_or_review | [ ] | |
| `STD-WEB-PERF#R005` - Responsive image và định kích thước render | must | test_or_review | [ ] | |
| `STD-WEB-PERF#R006` - Ưu tiên ảnh LCP thay vì lazy load tất cả | must | test_or_review | [ ] | |
| `STD-WEB-PWA#R001` - Chỉ sử dụng service worker cho các kịch bản cache/offline được xác định rõ | must | test_or_review | [ ] | |
| `STD-WEB-PWA#R002` - Đánh version cho cache entry và tránh cache response riêng tư một cách tùy tiện | must | test+review | [ ] | |
| `STD-WEB-PWA#R003` - Cung cấp fallback hợp lý khi push, install prompt hoặc offline API không được hỗ trợ | should | test_or_review | [ ] | |
| `STD-WEB-PWA#R004` - Kiểm thử update, asset cũ và thay đổi session xuyên suốt vòng đời PWA | should | test | [ ] | |
| `STD-WEB-RESP#R001` - Sử dụng responsive breakpoint dựa trên nội dung layout thay vì chỉ dựa vào loại thiết bị | must | test_or_review | [ ] | |
| `STD-WEB-RESP#R002` - Đảm bảo điều hướng bằng bàn phím, hiển thị focus và semantic labeling | must | test | [ ] | |
| `STD-WEB-RESP#R003` - Xác minh độ tương phản, thay đổi cỡ chữ và tương tác reduced-motion | should | test_or_review | [ ] | |
| `STD-WEB-RESP#R004` - Kiểm thử layout chính trên viewport hẹp và rộng | should | test | [ ] | |
| `STD-WEB-ROUTE#R001` - Xác định route chuẩn, parameter và hành vi khi route không tồn tại | must | test_or_review | [ ] | |
| `STD-WEB-ROUTE#R002` - Giữ trạng thái filter/query có thể điều hướng trong URL khi phù hợp để chia sẻ | must | test_or_review | [ ] | |
| `STD-WEB-ROUTE#R003` - Bảo vệ trang bị giới hạn bằng UI guard nhưng vẫn dựa vào authorization phía server | should | test+review | [ ] | |
| `STD-WEB-ROUTE#R004` - Xử lý reload sâu và điều hướng trực tiếp bằng quy tắc fallback của hosting | should | test_or_review | [ ] | |
| `STD-WEB-SEC#R001` - Thiết lập CSP hạn chế script | must | test+review | [ ] | |
| `STD-WEB-SEC#R002` - Chống XSS tại điểm render | should | test+review | [ ] | |
| `STD-WEB-SEC#R003` - Chống CSRF với cookie auth | should | test+review | [ ] | |
| `STD-WEB-SEC#R004` - Bảo vệ cookie và token trình duyệt | must | test+review | [ ] | |
| `STD-WEB-SEC#R005` - Cấu hình CORS và nhúng trang | must | test+review | [ ] | |
| `STD-WEB-SEC#R006` - Không lộ dữ liệu qua cache/URL | should | test+review | [ ] | |
| `STD-WEB-SEC#R007` - Bảo vệ dependency frontend | should | test+review | [ ] | |
| `STD-WEB-SEC#R008` - Kiểm thử bảo mật browser | should | test | [ ] | |
| `STD-WEB-SEO#R001` - Chọn CSR, SSR hoặc static rendering dựa trên nhu cầu indexing và nội dung | must | test_or_review | [ ] | |
| `STD-WEB-SEO#R002` - Cung cấp canonical URL, metadata và nội dung có thể crawl cho trang công khai | must | test_or_review | [ ] | |
| `STD-WEB-SEO#R003` - Loại trừ route riêng tư/cần xác thực khỏi search indexing | should | test+review | [ ] | |
| `STD-WEB-SEO#R004` - Kiểm thử nội dung render ở production và redirect theo ràng buộc crawler thực tế | should | test | [ ] | |
| `STD-WEB-STORE#R001` - Phân loại dữ liệu trước khi sử dụng cookie, localStorage, sessionStorage hoặc IndexedDB | must | test+review | [ ] | |
| `STD-WEB-STORE#R002` - Tránh lưu bearer secret trong web storage khi có phương án an toàn hơn | must | test+review | [ ] | |
| `STD-WEB-STORE#R003` - Áp dụng thời hạn hết hiệu lực và cơ chế vô hiệu hóa cho response từ server được cache | should | test_or_review | [ ] | |
| `STD-WEB-STORE#R004` - Dọn dẹp cache cũ và cô lập dữ liệu client theo từng tài khoản | should | test_or_review | [ ] | |
| `STD-WEBHOOK#R001` - Xác minh chữ ký và chống replay | must | test+review | [ ] | |
| `STD-WEBHOOK#R002` - Tiếp nhận nhanh và xử lý bất đồng bộ | must | test_or_review | [ ] | |
| `STD-WEBHOOK#R003` - Deduplicate và bảo toàn thứ tự nghiệp vụ | must | test_or_review | [ ] | |
| `STD-WEBHOOK#R004` - Phiên bản hóa hợp đồng event | should | test_or_review | [ ] | |
| `STD-WEBHOOK#R005` - Có khả năng replay và giám sát tồn đọng | should | test+review | [ ] | |
| `STD-WORKFLOW#R001` - Mô hình state và transition được phép | must | test_or_review | [ ] | |
| `STD-WORKFLOW#R002` - Enforce concurrency và idempotency cho transition | must | test_or_review | [ ] | |
| `STD-WORKFLOW#R003` - Định nghĩa compensation và terminal states | must | test_or_review | [ ] | |
| `STD-WORKFLOW#R004` - Test ma trận state transition | should | test_or_review | [ ] | |
