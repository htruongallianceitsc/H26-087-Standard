# Checklist - architect_ba

Rules: **122**

| Rule | Severity | Verification | Pass/Fail/Waived/NA | Evidence |
|---|---|---|---|---|
| `STD-A11Y#R006` - Tôn trọng resize và chuyển động giảm | should | test | [ ] | |
| `STD-A11Y#R007` - Hỗ trợ touch target và thời hạn tương tác | should | test | [ ] | |
| `STD-AI-APP#R001` - Coi prompt, tài liệu RAG và tool output là dữ liệu không tin cậy | must | review | [ ] | |
| `STD-AI-APP#R006` - Bảo vệ dữ liệu, retention và logging trong pipeline AI | must | review | [ ] | |
| `STD-AI-DEV#R001` - Đọc requirement, các standard áp dụng và tài liệu tham chiếu thiết kế trước khi code | must | review | [ ] | |
| `STD-AI-DEV#R002` - Lập kế hoạch có xét đến phạm vi ảnh hưởng và ánh xạ thay đổi tới tiêu chí chấp nhận | must | review | [ ] | |
| `STD-AI-DEV#R003` - Triển khai trong phạm vi kiến trúc đã được duyệt và tránh refactor không liên quan | should | review | [ ] | |
| `STD-AI-DEV#R004` - Chạy kiểm tra, so sánh UI bàn giao với design và báo cáo bằng chứng/khoảng lệch | should | review | [ ] | |
| `STD-AI-DEV#R005` - Agent phải phân biệt nguồn instruction đáng tin | must | review | [ ] | |
| `STD-AI-SEC#R001` - Coi source/docs/tool output là dữ liệu không tin cậy | must | review | [ ] | |
| `STD-AI-SEC#R002` - Áp dụng least privilege và phê duyệt thao tác nguy hiểm | must | review | [ ] | |
| `STD-AI-SEC#R003` - Ngăn exfiltration và secret leakage | must | review | [ ] | |
| `STD-AI-SEC#R004` - Xác minh artifact và báo cáo bằng chứng trung thực | should | review | [ ] | |
| `STD-AI-SEC#R005` - Ranh giới tự động hóa và human-in-the-loop | should | review | [ ] | |
| `STD-ANALYTICS#R003` - Tôn trọng consent và cấu hình khu vực | must | review | [ ] | |
| `STD-ANALYTICS#R004` - Ngăn duplicate event khi retry/re-render | should | review | [ ] | |
| `STD-API#R006` - Schema evolution theo expand-migrate-contract | must | review | [ ] | |
| `STD-ARCH#R001` - Ghi ADR cho quyết định có tác động xuyên module | must | review | [ ] | |
| `STD-ARCH#R002` - Kiểm soát chiều phụ thuộc giữa các tầng | must | review | [ ] | |
| `STD-ARCH#R003` - Đánh giá khả năng đảo ngược quyết định | must | review | [ ] | |
| `STD-ARCH#R004` - Đặt NFR vào ranh giới kiến trúc | should | review | [ ] | |
| `STD-ARCH#R005` - Rà soát ADR bị thay thế | should | review | [ ] | |
| `STD-AUDIT#R001` - Ghi actor, action, resource, result và UTC instant | must | review | [ ] | |
| `STD-AUDIT#R002` - Audit transaction phải nhất quán dữ liệu nghiệp vụ | must | review | [ ] | |
| `STD-AUDIT#R003` - Mask PII và giới hạn truy cập audit | must | review | [ ] | |
| `STD-AUDIT#R004` - Phát hiện sửa hoặc xóa trái phép | should | review | [ ] | |
| `STD-BE-JOB#R005` - Idempotent delivery và trace của background job | must | review | [ ] | |
| `STD-BIZ#R001` - Gán mã định danh rõ ràng và owner cho từng quy tắc nghiệp vụ | must | review | [ ] | |
| `STD-BIZ#R002` - Tài liệu hóa trigger, điều kiện, kết quả, ngoại lệ và thứ tự ưu tiên | must | review | [ ] | |
| `STD-BIZ#R003` - Mô hình hóa nhánh quyết định và thay đổi trạng thái khi kết quả phụ thuộc vào ngữ cảnh | should | review | [ ] | |
| `STD-BIZ#R004` - Xác nhận các quy tắc nghiệp vụ xung đột với người chịu trách nhiệm quyết định trước khi triển khai | should | review | [ ] | |
| `STD-COMPLIANCE#R001` - Lập ma trận nghĩa vụ theo sản phẩm và thị trường | must | review | [ ] | |
| `STD-COMPLIANCE#R002` - Thu thập bằng chứng có nguồn gốc và hạn lưu | must | review | [ ] | |
| `STD-COMPLIANCE#R003` - Đánh giá thay đổi trước khi phát hành | must | review | [ ] | |
| `STD-COMPLIANCE#R004` - Quản lý ngoại lệ có thời hạn | should | review | [ ] | |
| `STD-COMPLIANCE#R005` - Kiểm toán định kỳ tính hiệu lực | should | review | [ ] | |
| `STD-CONFIG-RUNTIME#R001` - Quy định owner, schema, typed defaults và validation | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R002` - Tách secret khỏi remote/public config | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R003` - Có rollout/rollback và kill switch | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R004` - Ngăn config drift giữa môi trường | should | review | [ ] | |
| `STD-CRYPTO#R001` - Không tự thiết kế crypto và chỉ dùng primitive/protocol được phê duyệt | must | review | [ ] | |
| `STD-CRYPTO#R003` - Thiết kế rotation, versioning, revocation và re-encryption trước khi cần khẩn cấp | must | review | [ ] | |
| `STD-CRYPTO#R006` - Mã hóa dữ liệu theo phân loại và xác minh fail-closed khi cấu hình crypto lỗi | should | review | [ ] | |
| `STD-DATA-MIG#R009` - Migration tương thích phiên bản rolling deploy | must | review | [ ] | |
| `STD-DATETIME#R005` - Time zone nghiệp vụ phải khai báo IANA | must | review | [ ] | |
| `STD-DEP#R001` - Khóa và kiểm soát nguồn package | must | review | [ ] | |
| `STD-DEP#R002` - Quét lỗ hổng theo mức rủi ro | must | review | [ ] | |
| `STD-DEP#R004` - Lập chính sách nâng cấp và loại bỏ dependency | should | review | [ ] | |
| `STD-DOC#R001` - Đảm bảo yêu cầu, screen, API và data contract có thể truy vết bằng tham chiếu ổn định | must | review | [ ] | |
| `STD-DOC#R002` - Ghi nhận quyết định đã được chấp thuận, lý do thay đổi và các artifact bị ảnh hưởng | must | review | [ ] | |
| `STD-DOC#R003` - Cập nhật spec trước khi triển khai thay đổi và đối soát tài liệu sau đó | should | review | [ ] | |
| `STD-DOC#R004` - Sinh index từ tài liệu nguồn chuẩn thay vì chỉnh sửa file được sinh tự động | should | review | [ ] | |
| `STD-ENV#R002` - Đưa secret vào kho bí mật được quản lý | must | review | [ ] | |
| `STD-ENV#R003` - Validate cấu hình khi khởi động | must | review | [ ] | |
| `STD-ENV#R004` - Quản lý rotation và thu hồi | should | review | [ ] | |
| `STD-ERR#R001` - Phân biệt lỗi validation, authentication, authorization, network và lỗi ngoài dự kiến | must | review | [ ] | |
| `STD-ERR#R003` - Chỉ cung cấp thao tác retry cho các operation tạm thời và an toàn để thử lại | should | review | [ ] | |
| `STD-FEAT#R001` - Nêu rõ mục đích feature, actor, hành vi trong phạm vi và ngoài phạm vi | must | review | [ ] | |
| `STD-FEAT#R002` - Liên kết từng feature với requirement nguồn thay vì tự tạo thêm requirement | must | review | [ ] | |
| `STD-FEAT#R003` - Mô tả happy path, luồng thay thế, trạng thái rỗng và trạng thái lỗi | should | review | [ ] | |
| `STD-FEAT#R004` - Xác định điều kiện hoàn thành có thể kiểm thử trước khi triển khai | should | test | [ ] | |
| `STD-FEEDBACK#R002` - Thông báo không lộ dữ liệu kỹ thuật | must | review | [ ] | |
| `STD-FEEDBACK#R004` - Phản hồi trạng thái thành công đúng thời điểm | should | review | [ ] | |
| `STD-FEEDBACK#R005` - Chuẩn hóa motion token và ưu tiên chuyển động ngắn, có mục đích | should | review | [ ] | |
| `STD-FL-DART#R005` - Chuẩn hóa lỗi mạng và vòng đời request Flutter | must | review | [ ] | |
| `STD-FL-TEST#R007` - Kiểm thử reconnect, offline replay và token refresh race | must | test | [ ] | |
| `STD-FLAG#R001` - Định nghĩa owner, phạm vi và thời hạn flag | must | review | [ ] | |
| `STD-FLAG#R003` - Có kill switch và fallback kiểm chứng được | must | review | [ ] | |
| `STD-FLAG#R004` - Theo dõi metric theo cohort | should | review | [ ] | |
| `STD-FLAG#R005` - Dọn dead flag và test tổ hợp quan trọng | should | test | [ ] | |
| `STD-I18N#R001` - Không hardcode chuỗi hiển thị trong logic | must | review | [ ] | |
| `STD-I18N#R003` - Hỗ trợ plural và độ dài nội dung | must | review | [ ] | |
| `STD-I18N#R005` - Đáp ứng RTL và định dạng đầu vào | should | review | [ ] | |
| `STD-LOG#R001` - Sử dụng structured log với timestamp, severity, operation và correlation ID | must | review | [ ] | |
| `STD-LOG#R002` - Không log mật khẩu, access token hoặc payload nhạy cảm | must | review | [ ] | |
| `STD-LOG#R004` - Xác định ngưỡng cảnh báo và owner cho sự cố production | should | review | [ ] | |
| `STD-LOG#R005` - Trace context được propagate xuyên service | must | review | [ ] | |
| `STD-MOB-OFF#R005` - Offline sync conflict resolution và replay an toàn | must | review | [ ] | |
| `STD-MOB-PUSH#R005` - Đồng bộ token thiết bị và message dedup | must | review | [ ] | |
| `STD-MONOREPO#R001` - Khai báo ranh giới package và dependency | must | review | [ ] | |
| `STD-MONOREPO#R002` - Chạy kiểm tra theo phạm vi ảnh hưởng | must | review | [ ] | |
| `STD-MONOREPO#R003` - Khóa phiên bản công cụ và dependency | must | review | [ ] | |
| `STD-MONOREPO#R004` - Tách cache build theo inputs thực tế | should | review | [ ] | |
| `STD-MONOREPO#R005` - Quản lý version/release package độc lập | should | review | [ ] | |
| `STD-NAME#R001` - Chọn một quy ước đặt tên cho từng ngôn ngữ lập trình và từng loại artifact | must | review | [ ] | |
| `STD-NAME#R002` - Sử dụng semantic ID ổn định cho feature, requirement, rule và test | must | test | [ ] | |
| `STD-NAME#R003` - Tránh viết tắt làm mất ý nghĩa domain; công bố rõ các ngoại lệ | should | review | [ ] | |
| `STD-NAME#R004` - Tránh đổi tên contract công khai khi chưa đánh giá tính tương thích | should | review | [ ] | |
| `STD-PERF#R001` - Xác định performance budget theo user journey | must | review | [ ] | |
| `STD-PERF#R004` - Quan sát bottleneck theo thành phần | should | review | [ ] | |
| `STD-PERF#R005` - Đặt giới hạn và bảo vệ hệ thống khi quá tải | should | review | [ ] | |
| `STD-PRIV#R003` - Thực thi vòng đời lưu giữ và xóa | should | review | [ ] | |
| `STD-PRIV#R006` - Minh bạch và lựa chọn người dùng | should | review | [ ] | |
| `STD-REQ#R001` - Ghi nhận yêu cầu thô kèm nguồn, owner và các câu hỏi chưa được giải quyết trước khi phân loại | must | review | [ ] | |
| `STD-REQ#R002` - Tách functional requirement có thể kiểm thử khỏi giả định và ràng buộc phi chức năng | must | test | [ ] | |
| `STD-REQ#R003` - Viết acceptance criteria theo Given-When-Then có thể quan sát, bao gồm trường hợp lỗi và biên | should | review | [ ] | |
| `STD-REQ#R004` - Liên kết requirement đã được duyệt với feature và bằng chứng kiểm thử | should | test | [ ] | |
| `STD-RES#R001` - Timeout và retry có ngân sách | must | review | [ ] | |
| `STD-RES#R002` - Thiết kế circuit breaker và bulkhead | must | review | [ ] | |
| `STD-RES#R003` - Xử lý lỗi suy giảm an toàn | must | review | [ ] | |
| `STD-RES#R005` - Quan sát chỉ số reliability và error budget | should | review | [ ] | |
| `STD-SEC#R002` - Bảo vệ credential và secret bằng hệ thống quản lý secret chuyên dụng | must | review | [ ] | |
| `STD-SEC#R003` - Validation input không đáng tin cậy và encode output theo đúng ngữ cảnh đích | should | review | [ ] | |
| `STD-SEC#R005` - Mặc định từ chối và phân quyền tối thiểu | must | review | [ ] | |
| `STD-SEC#R007` - Không tiết lộ nội bộ khi thất bại | should | review | [ ] | |
| `STD-SESSION#R001` - Định nghĩa access/refresh token lifecycle | must | review | [ ] | |
| `STD-SESSION#R002` - Đồng bộ logout và revoke trên mọi bề mặt | must | review | [ ] | |
| `STD-SESSION#R003` - Xử lý single-flight refresh và trạng thái session | must | review | [ ] | |
| `STD-SESSION#R004` - Phân biệt unauthorized, forbidden và offline | should | review | [ ] | |
| `STD-SESSION#R005` - Kiểm thử resume, revoke và đổi account | should | review | [ ] | |
| `STD-TENANCY#R002` - Cô lập tenant xuyên DB, cache, object storage, search, queue và background job | must | review | [ ] | |
| `STD-TENANCY#R004` - Admin/support access và impersonation phải có guardrail và audit mạnh hơn user thường | must | review | [ ] | |
| `STD-TRACE#R001` - Truyền trace context theo chuẩn hợp đồng | must | review | [ ] | |
| `STD-TRACE#R002` - Phân biệt trace ID, span ID và request ID | must | review | [ ] | |
| `STD-TRACE#R003` - Redact và sampling tránh lộ dữ liệu | must | review | [ ] | |
| `STD-TRACE#R004` - Quan sát latency và lỗi xuyên service | should | review | [ ] | |
| `STD-VERSIONING#R006` - Ma trận hỗ trợ client/server/contract | must | review | [ ] | |
| `STD-VULN#R001` - Hợp nhất phát hiện lỗ hổng vào một quy trình có owner | must | review | [ ] | |
| `STD-VULN#R002` - Ưu tiên theo rủi ro thực tế thay vì chỉ dựa severity thô | must | review | [ ] | |
| `STD-VULN#R003` - Waiver và risk acceptance phải có hạn và có người phê duyệt | must | review | [ ] | |
| `STD-VULN#R006` - Có kênh tiếp nhận và quy trình disclosure phù hợp | should | review | [ ] | |
| `STD-WEB-PWA#R005` - Service worker update và cache/data version | must | review | [ ] | |
