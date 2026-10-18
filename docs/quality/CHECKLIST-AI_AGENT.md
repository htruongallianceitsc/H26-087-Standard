# Checklist - ai_agent

Rules: **391**

| Rule | Severity | Verification | Pass/Fail/Waived/NA | Evidence |
|---|---|---|---|---|
| `CAP-AUDIT#R001` - Ghi nhận actor, action, target, outcome và correlation ID | must | test_or_review | [ ] | |
| `CAP-AUDIT#R002` - Bảo vệ audit log khỏi việc chỉnh sửa bởi người dùng thông thường | must | test_or_review | [ ] | |
| `CAP-AUTH#R001` - Quy định hành vi login, logout, token/session hết hạn và phục hồi | must | test+review | [ ] | |
| `CAP-AUTH#R002` - Áp dụng rate limit và thông báo lỗi chung để chống dò tìm credential | must | test+review | [ ] | |
| `CAP-AUTH#R005` - Đăng ký và xác minh danh tính theo chính sách | must | test+review | [ ] | |
| `CAP-CHAT#R001` - Sử dụng message ID và deduplication để hiển thị trạng thái phân phối đáng tin cậy | must | test_or_review | [ ] | |
| `CAP-CHAT#R002` - Xử lý reconnect, join lại group và phân trang lịch sử mà không tạo dữ liệu trùng | must | test_or_review | [ ] | |
| `CAP-CRUD#R001` - Xác định hành vi tìm kiếm, lọc, sắp xếp, phân trang và trạng thái rỗng | must | test_or_review | [ ] | |
| `CAP-CRUD#R002` - Phân quyền từng thao tác create/read/update/delete ở phía server | must | test+review | [ ] | |
| `CAP-NOTIFY#R001` - Tách biệt message event, tùy chọn phân phối và cách trình bày | must | test_or_review | [ ] | |
| `CAP-NOTIFY#R002` - Tránh gửi dữ liệu riêng tư tới người nhận không được phép | must | test+review | [ ] | |
| `CAP-PAYMENT#R001` - Bảo vệ lệnh thanh toán khỏi xử lý trùng | must | test_or_review | [ ] | |
| `CAP-PAYMENT#R004` - Đối soát ledger và provider | must | test_or_review | [ ] | |
| `CAP-PAYMENT#R005` - Bảo vệ dữ liệu thẻ và thông tin nhạy cảm | must | test+review | [ ] | |
| `CAP-PERM#R001` - Định nghĩa vai trò và quyền hạn thành các thao tác rõ ràng trên resource | must | test+review | [ ] | |
| `CAP-PERM#R002` - Thực thi kiểm tra quyền trong API thay vì chỉ ẩn UI | must | test+review | [ ] | |
| `CAP-PERM#R005` - Ngăn tự nâng đặc quyền | must | test+review | [ ] | |
| `CAP-PROFILE#R001` - Giới hạn update cho đúng subject được ủy quyền và các field được phép | must | test+review | [ ] | |
| `CAP-PROFILE#R002` - Validation các field thay đổi và giữ nguyên giá trị hiện có của field không đổi | must | test_or_review | [ ] | |
| `CAP-REPORT#R001` - Tài liệu hóa định nghĩa metric, bộ lọc và múi giờ báo cáo | must | test_or_review | [ ] | |
| `CAP-REPORT#R002` - Đảm bảo dữ liệu tổng hợp tuân thủ quyền của tenant và người dùng | must | test_or_review | [ ] | |
| `CAP-SEARCH#R001` - Xác định toán tử lọc, các field có thể tìm kiếm và thứ tự sắp xếp mặc định | must | test_or_review | [ ] | |
| `CAP-SEARCH#R002` - Lưu trạng thái filter có thể chia sẻ khi nền tảng cho phép | must | test_or_review | [ ] | |
| `CAP-SHARE#R001` - Validation quyền truy cập resource dùng chung và quy tắc hết hạn | must | test+review | [ ] | |
| `CAP-SHARE#R002` - Xử lý điều hướng khi app đã cài/chưa cài với fallback an toàn | must | test_or_review | [ ] | |
| `CAP-UPLOAD#R001` - Validation kích thước, loại và nội dung file trên server đáng tin cậy | must | test_or_review | [ ] | |
| `CAP-UPLOAD#R002` - Cung cấp progress, cancel, retry và cơ chế phục hồi khi lỗi | must | test_or_review | [ ] | |
| `STD-A11Y#R001` - Đáp ứng WCAG 2.2 AA theo phạm vi đã chọn | must | test | [ ] | |
| `STD-A11Y#R004` - Thông báo lỗi và trạng thái dễ tiếp cận | must | test | [ ] | |
| `STD-A11Y#R005` - Đảm bảo tương phản và trạng thái focus | must | test | [ ] | |
| `STD-AI-APP#R001` - Coi prompt, tài liệu RAG và tool output là dữ liệu không tin cậy | must | review | [ ] | |
| `STD-AI-APP#R002` - Giới hạn agency bằng capability tối thiểu và approval cho hành động rủi ro | must | test_or_review | [ ] | |
| `STD-AI-APP#R006` - Bảo vệ dữ liệu, retention và logging trong pipeline AI | must | review | [ ] | |
| `STD-AI-DEV#R001` - Đọc requirement, các standard áp dụng và tài liệu tham chiếu thiết kế trước khi code | must | review | [ ] | |
| `STD-AI-DEV#R002` - Lập kế hoạch có xét đến phạm vi ảnh hưởng và ánh xạ thay đổi tới tiêu chí chấp nhận | must | review | [ ] | |
| `STD-AI-DEV#R005` - Agent phải phân biệt nguồn instruction đáng tin | must | review | [ ] | |
| `STD-AI-SEC#R001` - Coi source/docs/tool output là dữ liệu không tin cậy | must | review | [ ] | |
| `STD-AI-SEC#R002` - Áp dụng least privilege và phê duyệt thao tác nguy hiểm | must | review | [ ] | |
| `STD-AI-SEC#R003` - Ngăn exfiltration và secret leakage | must | review | [ ] | |
| `STD-AI-SEC#R004` - Xác minh artifact và báo cáo bằng chứng trung thực | should | review | [ ] | |
| `STD-AI-SEC#R005` - Ranh giới tự động hóa và human-in-the-loop | should | review | [ ] | |
| `STD-ANALYTICS#R001` - Thiết kế event schema và định nghĩa metric | must | test_or_review | [ ] | |
| `STD-ANALYTICS#R002` - Không gửi token hoặc PII không cần thiết | must | test+review | [ ] | |
| `STD-ANALYTICS#R003` - Tôn trọng consent và cấu hình khu vực | must | review | [ ] | |
| `STD-ANALYTICS#R004` - Ngăn duplicate event khi retry/re-render | should | review | [ ] | |
| `STD-API#R001` - Sử dụng endpoint contract có version với cấu trúc request/response được tài liệu hóa | must | test_or_review | [ ] | |
| `STD-API#R002` - Áp dụng nhất quán xác thực, phân quyền, phân trang và validation | must | test+review | [ ] | |
| `STD-API#R005` - Mock API phải bám hợp đồng thật và dùng fixture có kiểm soát | should | test | [ ] | |
| `STD-API#R006` - Schema evolution theo expand-migrate-contract | must | review | [ ] | |
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
| `STD-API-RT#R001` - Bảo vệ handshake và từng subscription | must | test_or_review | [ ] | |
| `STD-API-RT#R002` - Định nghĩa thứ tự, cursor và replay | must | test_or_review | [ ] | |
| `STD-API-RT#R003` - Quản lý heartbeat và reconnect backoff | must | test_or_review | [ ] | |
| `STD-ARCH#R001` - Ghi ADR cho quyết định có tác động xuyên module | must | review | [ ] | |
| `STD-ARCH#R002` - Kiểm soát chiều phụ thuộc giữa các tầng | must | review | [ ] | |
| `STD-ARCH#R003` - Đánh giá khả năng đảo ngược quyết định | must | review | [ ] | |
| `STD-AUDIT#R001` - Ghi actor, action, resource, result và UTC instant | must | review | [ ] | |
| `STD-AUDIT#R002` - Audit transaction phải nhất quán dữ liệu nghiệp vụ | must | review | [ ] | |
| `STD-AUDIT#R003` - Mask PII và giới hạn truy cập audit | must | review | [ ] | |
| `STD-AUDIT#R004` - Phát hiện sửa hoặc xóa trái phép | should | review | [ ] | |
| `STD-BACKUP#R001` - Định nghĩa RPO và phạm vi bản sao | must | runtime | [ ] | |
| `STD-BACKUP#R002` - Bảo vệ bản sao khỏi xóa/sửa trái phép | must | runtime | [ ] | |
| `STD-BE-ARCH#R001` - Tách giao thức, nghiệp vụ và persistence | must | test_or_review | [ ] | |
| `STD-BE-ARCH#R002` - Phụ thuộc đi về abstraction có chủ đích | must | test_or_review | [ ] | |
| `STD-BE-AUTH#R001` - Xác thực access token/session theo issuer và audience | must | test+review | [ ] | |
| `STD-BE-AUTH#R004` - Giới hạn đăng nhập và tránh enumeration | must | test+review | [ ] | |
| `STD-BE-AUTH#R005` - Quản lý refresh/session và thu hồi | must | test+review | [ ] | |
| `STD-BE-CONCUR#R001` - Thiết kế idempotency cho lệnh có side effect | must | test_or_review | [ ] | |
| `STD-BE-CONCUR#R004` - Bảo đảm không xử lý trùng consumer | must | test_or_review | [ ] | |
| `STD-BE-CONCUR#R005` - Outbox cho giao dịch DB và event | must | test_or_review | [ ] | |
| `STD-BE-FILE#R001` - Giới hạn và xác thực tệp phía server | must | test_or_review | [ ] | |
| `STD-BE-FILE#R002` - Tên tệp và đường dẫn không do client điều khiển | must | test_or_review | [ ] | |
| `STD-BE-HEALTH#R001` - Liveness không kiểm tra phụ thuộc xa | must | test_or_review | [ ] | |
| `STD-BE-HEALTH#R002` - Readiness kiểm tra khả năng nhận traffic | must | test_or_review | [ ] | |
| `STD-BE-JOB#R001` - Tác vụ có cơ chế chống chạy trùng | must | test_or_review | [ ] | |
| `STD-BE-JOB#R002` - Thiết lập retry có giới hạn | must | test_or_review | [ ] | |
| `STD-BE-JOB#R005` - Idempotent delivery và trace của background job | must | review | [ ] | |
| `STD-BE-PERF#R001` - Đặt ngân sách độ trễ theo endpoint | must | test_or_review | [ ] | |
| `STD-BE-PERF#R002` - Tránh N+1 và payload dư thừa | must | test_or_review | [ ] | |
| `STD-BE-QUEUE#R001` - Consumer xử lý at-least-once an toàn | must | test_or_review | [ ] | |
| `STD-BE-QUEUE#R002` - Retry và dead-letter phân loại lỗi | must | test_or_review | [ ] | |
| `STD-BE-SEC#R001` - Áp dụng middleware bảo mật thống nhất | must | test+review | [ ] | |
| `STD-BE-SEC#R004` - An toàn với truy vấn và dữ liệu | must | test+review | [ ] | |
| `STD-BE-SEC#R005` - Bảo vệ outbound request và SSRF | must | test+review | [ ] | |
| `STD-BE-TX#R001` - Transaction bao trọn invariant nội bộ | must | test_or_review | [ ] | |
| `STD-BE-TX#R002` - Không giữ transaction qua network I/O | must | test_or_review | [ ] | |
| `STD-BE-VALID#R001` - Validate server dựa trên contract | must | test_or_review | [ ] | |
| `STD-BE-VALID#R002` - Phân biệt dữ liệu sai và lỗi nghiệp vụ | must | test_or_review | [ ] | |
| `STD-BIZ#R001` - Gán mã định danh rõ ràng và owner cho từng quy tắc nghiệp vụ | must | review | [ ] | |
| `STD-BIZ#R002` - Tài liệu hóa trigger, điều kiện, kết quả, ngoại lệ và thứ tự ưu tiên | must | review | [ ] | |
| `STD-CACHE#R001` - Khai báo owner key scope và TTL | must | test_or_review | [ ] | |
| `STD-CACHE#R002` - Định nghĩa invalidation khi write | must | test_or_review | [ ] | |
| `STD-CACHE#R003` - Chống cache stampede và quá tải | must | test_or_review | [ ] | |
| `STD-CI#R001` - Sử dụng lockfile và build có thể tái lập trong CI | must | test_or_review | [ ] | |
| `STD-CI#R002` - Tách biệt môi trường và inject secret tại runtime hoặc qua build setting an toàn | must | test+review | [ ] | |
| `STD-CI#R005` - Pin và kiểm soát third-party CI action, build image và toolchain | must | test+review | [ ] | |
| `STD-CI#R006` - Sinh provenance/attestation gắn source, workflow và artifact digest | should | test+review | [ ] | |
| `STD-CODE-REVIEW#R001` - PR có phạm vi nhỏ và mô tả tác động | must | test_or_review | [ ] | |
| `STD-CODE-REVIEW#R002` - Review độc lập cho thay đổi nhạy cảm | must | test+review | [ ] | |
| `STD-CODE-REVIEW#R003` - CI bắt buộc xanh trước khi merge | must | test+review | [ ] | |
| `STD-COMPLIANCE#R001` - Lập ma trận nghĩa vụ theo sản phẩm và thị trường | must | review | [ ] | |
| `STD-COMPLIANCE#R002` - Thu thập bằng chứng có nguồn gốc và hạn lưu | must | review | [ ] | |
| `STD-COMPLIANCE#R003` - Đánh giá thay đổi trước khi phát hành | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R001` - Quy định owner, schema, typed defaults và validation | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R002` - Tách secret khỏi remote/public config | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R003` - Có rollout/rollback và kill switch | must | review | [ ] | |
| `STD-CONFIG-RUNTIME#R004` - Ngăn config drift giữa môi trường | should | review | [ ] | |
| `STD-COST#R001` - Gắn tag chi phí theo nguồn sử dụng | must | runtime | [ ] | |
| `STD-COST#R002` - Ngân sách và cảnh báo xu hướng | must | runtime | [ ] | |
| `STD-CRYPTO#R001` - Không tự thiết kế crypto và chỉ dùng primitive/protocol được phê duyệt | must | review | [ ] | |
| `STD-CRYPTO#R003` - Thiết kế rotation, versioning, revocation và re-encryption trước khi cần khẩn cấp | must | review | [ ] | |
| `STD-CRYPTO#R006` - Mã hóa dữ liệu theo phân loại và xác minh fail-closed khi cấu hình crypto lỗi | should | review | [ ] | |
| `STD-DATA#R001` - Định nghĩa khóa và ràng buộc invariant trong DB | must | test_or_review | [ ] | |
| `STD-DATA#R002` - Thiết kế schema theo truy vấn thực tế | must | test_or_review | [ ] | |
| `STD-DATA#R003` - Quản lý audit và vòng đời bản ghi | must | test+review | [ ] | |
| `STD-DATA-MIG#R001` - Áp dụng expand-migrate-contract không làm gián đoạn | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R004` - Mọi thay đổi nguy hiểm có kế hoạch rollback/forward-fix | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R005` - Kiểm soát lock và giao dịch DDL | must | test_or_review | [ ] | |
| `STD-DATA-MIG#R009` - Migration tương thích phiên bản rolling deploy | must | review | [ ] | |
| `STD-DATA-TX#R001` - Định ranh giới transaction theo invariant | must | test_or_review | [ ] | |
| `STD-DATA-TX#R002` - Kiểm soát update đồng thời và lost update | must | test_or_review | [ ] | |
| `STD-DATA-TX#R003` - Giảm deadlock và giao dịch kéo dài | must | test_or_review | [ ] | |
| `STD-DATETIME#R005` - Time zone nghiệp vụ phải khai báo IANA | must | review | [ ] | |
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
| `STD-DEP#R001` - Khóa và kiểm soát nguồn package | must | review | [ ] | |
| `STD-DEP#R002` - Quét lỗ hổng theo mức rủi ro | must | review | [ ] | |
| `STD-DEP#R003` - Tồn kho giấy phép và thành phần | must | test_or_review | [ ] | |
| `STD-DEP#R004` - Lập chính sách nâng cấp và loại bỏ dependency | should | review | [ ] | |
| `STD-DEPLOY#R001` - Triển khai artifact bất biến | must | test+review | [ ] | |
| `STD-DEPLOY#R002` - Có health gate và rollback | must | test_or_review | [ ] | |
| `STD-DEPLOY#R005` - Xác minh chữ ký/provenance trước khi promote artifact nhạy cảm | should | test+review | [ ] | |
| `STD-DESIGN#R001` - Handoff thiết kế có trạng thái tương tác | must | test_or_review | [ ] | |
| `STD-DESIGN#R002` - Đối chiếu bản build với thiết kế | must | test_or_review | [ ] | |
| `STD-DOC#R001` - Đảm bảo yêu cầu, screen, API và data contract có thể truy vết bằng tham chiếu ổn định | must | review | [ ] | |
| `STD-DOC#R002` - Ghi nhận quyết định đã được chấp thuận, lý do thay đổi và các artifact bị ảnh hưởng | must | review | [ ] | |
| `STD-DOTNET#R001` - Tách controller/endpoint khỏi application/domain rule và persistence | must | test_or_review | [ ] | |
| `STD-DOTNET#R002` - Sử dụng dependency injection với vòng đời resource theo scope | must | test_or_review | [ ] | |
| `STD-DOTNET-API#R001` - Đặt middleware theo thứ tự bảo mật chuẩn | must | test+review | [ ] | |
| `STD-DOTNET-API#R002` - Dùng DI lifetime tương thích scope | must | test_or_review | [ ] | |
| `STD-DOTNET-API#R003` - Validate input và map error thống nhất | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R001` - Đọc dữ liệu không tracking có chủ đích | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R002` - Chặn N+1 query và cartesian explosion | must | test_or_review | [ ] | |
| `STD-DOTNET-EF#R003` - Thực thi migration có kiểm soát | must | test_or_review | [ ] | |
| `STD-DOTNET-TEST#R001` - Phân tầng unit và integration test | must | test | [ ] | |
| `STD-DOTNET-TEST#R002` - Test auth và authorization negative case | must | test | [ ] | |
| `STD-DOTNET-TEST#R003` - Cô lập test và dữ liệu deterministic | must | test | [ ] | |
| `STD-DR#R001` - Xác định RTO/RPO theo kịch bản mất dịch vụ | must | runtime | [ ] | |
| `STD-DR#R002` - Có runbook failover và failback | must | runtime | [ ] | |
| `STD-DS#R001` - Sử dụng design token tập trung | must | test+review | [ ] | |
| `STD-DS#R002` - Định nghĩa component API nhất quán | must | test_or_review | [ ] | |
| `STD-ENV#R001` - Phân tách môi trường và quyền truy cập | must | test+review | [ ] | |
| `STD-ENV#R002` - Đưa secret vào kho bí mật được quản lý | must | review | [ ] | |
| `STD-ENV#R003` - Validate cấu hình khi khởi động | must | review | [ ] | |
| `STD-ENV#R004` - Quản lý rotation và thu hồi | should | review | [ ] | |
| `STD-ERR#R001` - Phân biệt lỗi validation, authentication, authorization, network và lỗi ngoài dự kiến | must | review | [ ] | |
| `STD-ERR#R002` - Sử dụng error/result có kiểu dữ liệu và message an toàn cho người dùng, không làm lộ chi tiết nhạy cảm | must | test_or_review | [ ] | |
| `STD-ERR#R003` - Chỉ cung cấp thao tác retry cho các operation tạm thời và an toàn để thử lại | should | review | [ ] | |
| `STD-FEAT#R001` - Nêu rõ mục đích feature, actor, hành vi trong phạm vi và ngoài phạm vi | must | review | [ ] | |
| `STD-FEAT#R002` - Liên kết từng feature với requirement nguồn thay vì tự tạo thêm requirement | must | review | [ ] | |
| `STD-FEEDBACK#R001` - Thông báo tương ứng tác động thao tác | must | test_or_review | [ ] | |
| `STD-FEEDBACK#R002` - Thông báo không lộ dữ liệu kỹ thuật | must | review | [ ] | |
| `STD-FL-BLOC#R001` - Sử dụng BLoC/Cubit cho feature state và các state transition rõ ràng | must | test_or_review | [ ] | |
| `STD-FL-BLOC#R002` - Widget chỉ render state và dispatch intention; không gọi Dio trực tiếp | must | test_or_review | [ ] | |
| `STD-FL-DART#R001` - Bật analyzer lint nghiêm ngặt và format code nhất quán | must | test_or_review | [ ] | |
| `STD-FL-DART#R002` - Sử dụng model immutable và kiểu null-safe khi phù hợp | must | test_or_review | [ ] | |
| `STD-FL-DART#R005` - Chuẩn hóa lỗi mạng và vòng đời request Flutter | must | review | [ ] | |
| `STD-FL-ROUTE#R001` - Xác định named route và path/query parameter đã được validation | must | test_or_review | [ ] | |
| `STD-FL-ROUTE#R002` - Áp dụng redirect guard cho route được bảo vệ mà không tạo vòng lặp redirect | must | test_or_review | [ ] | |
| `STD-FL-TEST#R001` - Kiểm thử transition của Cubit cho từng acceptance flow | must | test | [ ] | |
| `STD-FL-TEST#R002` - Sử dụng widget test cho layout, validation và accessibility | must | test | [ ] | |
| `STD-FL-TEST#R007` - Kiểm thử reconnect, offline replay và token refresh race | must | test | [ ] | |
| `STD-FL-WIDGET#R001` - Tập trung quản lý màu sắc, typography, spacing và theme token | must | test+review | [ ] | |
| `STD-FL-WIDGET#R002` - Tổ hợp các widget nhỏ thay vì sử dụng build method quá lớn | must | test_or_review | [ ] | |
| `STD-FLAG#R001` - Định nghĩa owner, phạm vi và thời hạn flag | must | review | [ ] | |
| `STD-FLAG#R002` - Thiết lập rollout ổn định theo cohort | must | test_or_review | [ ] | |
| `STD-FLAG#R003` - Có kill switch và fallback kiểm chứng được | must | review | [ ] | |
| `STD-FLAG#R004` - Theo dõi metric theo cohort | should | review | [ ] | |
| `STD-FLAG#R005` - Dọn dead flag và test tổ hợp quan trọng | should | test | [ ] | |
| `STD-FORM#R001` - Xác thực đúng lớp và thời điểm | must | test_or_review | [ ] | |
| `STD-FORM#R002` - Giữ dữ liệu khi gửi lỗi | must | test_or_review | [ ] | |
| `STD-GIT#R001` - Giữ thay đổi nhỏ gọn, có tham chiếu issue và commit mô tả rõ ràng | must | test+review | [ ] | |
| `STD-GIT#R002` - Yêu cầu review và pass các quality check trước khi tích hợp | must | test_or_review | [ ] | |
| `STD-I18N#R001` - Không hardcode chuỗi hiển thị trong logic | must | review | [ ] | |
| `STD-I18N#R002` - Định dạng ngày số và tiền theo locale | must | test_or_review | [ ] | |
| `STD-I18N#R003` - Hỗ trợ plural và độ dài nội dung | must | review | [ ] | |
| `STD-I18N#R005` - Đáp ứng RTL và định dạng đầu vào | should | review | [ ] | |
| `STD-IAC#R001` - Hạ tầng được quản lý qua code review | must | runtime | [ ] | |
| `STD-IAC#R002` - State và secret được bảo vệ | must | runtime | [ ] | |
| `STD-INCIDENT#R001` - Phân loại mức độ và kích hoạt phản ứng | must | runtime | [ ] | |
| `STD-INCIDENT#R002` - Lưu timeline và vai trò rõ ràng | must | runtime | [ ] | |
| `STD-INTEGRATION#R001` - Hợp đồng adapter và mapping rõ ràng | must | test_or_review | [ ] | |
| `STD-INTEGRATION#R002` - Bảo vệ credential và dữ liệu truyền đi | must | test+review | [ ] | |
| `STD-INTEGRATION#R003` - Retry chỉ cho lỗi tạm thời và idempotent | must | test_or_review | [ ] | |
| `STD-LOG#R001` - Sử dụng structured log với timestamp, severity, operation và correlation ID | must | review | [ ] | |
| `STD-LOG#R002` - Không log mật khẩu, access token hoặc payload nhạy cảm | must | review | [ ] | |
| `STD-LOG#R004` - Xác định ngưỡng cảnh báo và owner cho sự cố production | should | review | [ ] | |
| `STD-LOG#R005` - Trace context được propagate xuyên service | must | review | [ ] | |
| `STD-MOB-ARCH#R001` - Đặt tích hợp nền tảng phía sau interface/adapter | must | test_or_review | [ ] | |
| `STD-MOB-ARCH#R002` - Tách trách nhiệm presentation, application state và domain/data | must | test_or_review | [ ] | |
| `STD-MOB-DEVICE#R001` - Chỉ yêu cầu runtime permission tối thiểu cần thiết và giải thích mục đích sử dụng | must | test+review | [ ] | |
| `STD-MOB-DEVICE#R002` - Xử lý các trạng thái quyền bị từ chối, bị giới hạn và bị từ chối vĩnh viễn | must | test+review | [ ] | |
| `STD-MOB-LIFE#R001` - Mô hình hóa foreground, background, resume và process recreation thành các trường hợp riêng biệt | must | test_or_review | [ ] | |
| `STD-MOB-LIFE#R002` - Reconnect socket và refresh state đã stale bằng logic có giới hạn và idempotent | must | test_or_review | [ ] | |
| `STD-MOB-NAV#R001` - Xác định route argument có kiểu dữ liệu và guard cho xác thực/điều hướng | must | test_or_review | [ ] | |
| `STD-MOB-NAV#R002` - Hỗ trợ initial link, link khi app resume và destination không hợp lệ/hết hạn | must | test_or_review | [ ] | |
| `STD-MOB-OFF#R001` - Xác định rõ thao tác có thể đọc và ghi khi offline | must | test_or_review | [ ] | |
| `STD-MOB-OFF#R002` - Sử dụng retry có giới hạn kèm backoff và chỉ retry operation an toàn về idempotency | must | test_or_review | [ ] | |
| `STD-MOB-OFF#R005` - Offline sync conflict resolution và replay an toàn | must | review | [ ] | |
| `STD-MOB-PERF#R001` - Tránh các request khởi động chạy đồng thời không cần thiết và công việc nặng trên main thread | must | test_or_review | [ ] | |
| `STD-MOB-PERF#R002` - Đo thời gian khởi động, frame timing, mức sử dụng mạng và bộ nhớ trên thiết bị thật | must | test_or_review | [ ] | |
| `STD-MOB-PUSH#R001` - Xử lý riêng message ở trạng thái foreground, background và terminated | must | test_or_review | [ ] | |
| `STD-MOB-PUSH#R002` - Yêu cầu quyền thông báo tại thời điểm phù hợp với ngữ cảnh và xử lý được trường hợp người dùng từ chối | must | test+review | [ ] | |
| `STD-MOB-PUSH#R005` - Đồng bộ token thiết bị và message dedup | must | review | [ ] | |
| `STD-MOB-RELEASE#R001` - Lưu signing key và credential trong vùng lưu trữ được bảo vệ | must | test+review | [ ] | |
| `STD-MOB-RELEASE#R002` - Tách application ID, môi trường và build flavor khi cần | must | test_or_review | [ ] | |
| `STD-MOB-SEC#R001` - Lưu token nhạy cảm vào kho bảo mật của OS | must | test+review | [ ] | |
| `STD-MOB-SEC#R004` - Kiểm tra deep link và app link | must | test+review | [ ] | |
| `STD-MOB-SEC#R005` - Bảo vệ dữ liệu nhạy cảm khi background | must | test+review | [ ] | |
| `STD-MOB-STORE#R001` - Lưu secret trong secure storage do OS bảo vệ thay vì preference thông thường | must | test+review | [ ] | |
| `STD-MOB-STORE#R002` - Đặt chính sách lưu giữ, cleanup khi logout và cô lập khi chuyển tài khoản | must | test_or_review | [ ] | |
| `STD-MOB-UI#R001` - Tuân thủ safe area, text scaling và system navigation inset | must | test | [ ] | |
| `STD-MOB-UI#R002` - Giữ input đang focus luôn nhìn thấy khi bàn phím hiển thị | must | test | [ ] | |
| `STD-MONOREPO#R001` - Khai báo ranh giới package và dependency | must | review | [ ] | |
| `STD-MONOREPO#R002` - Chạy kiểm tra theo phạm vi ảnh hưởng | must | review | [ ] | |
| `STD-MONOREPO#R003` - Khóa phiên bản công cụ và dependency | must | review | [ ] | |
| `STD-NAME#R001` - Chọn một quy ước đặt tên cho từng ngôn ngữ lập trình và từng loại artifact | must | review | [ ] | |
| `STD-NAME#R002` - Sử dụng semantic ID ổn định cho feature, requirement, rule và test | must | test | [ ] | |
| `STD-NET#R001` - Mặc định giới hạn truy cập mạng | must | runtime | [ ] | |
| `STD-NET#R002` - Mã hóa kết nối và quản lý chứng chỉ | must | runtime | [ ] | |
| `STD-NEXT#R001` - Ưu tiên server component mặc định cho các trường hợp hiển thị dữ liệu phù hợp | must | test_or_review | [ ] | |
| `STD-NEXT#R002` - Chỉ khai báo ranh giới client ở nơi thực sự cần tương tác trình duyệt | must | test_or_review | [ ] | |
| `STD-PERF#R001` - Xác định performance budget theo user journey | must | review | [ ] | |
| `STD-PERF#R002` - Đo baseline và regression tự động | must | test_or_review | [ ] | |
| `STD-PERF#R003` - Giới hạn tải dữ liệu và số lần gọi | must | test_or_review | [ ] | |
| `STD-PERF#R004` - Quan sát bottleneck theo thành phần | should | review | [ ] | |
| `STD-PERF#R005` - Đặt giới hạn và bảo vệ hệ thống khi quá tải | should | review | [ ] | |
| `STD-PERF-TEST#R001` - Viết workload theo hành vi sử dụng thực tế | must | test | [ ] | |
| `STD-PERF-TEST#R002` - Thiết lập acceptance threshold rõ | must | test | [ ] | |
| `STD-PERF-TEST#R003` - Theo dõi server và DB khi chạy | must | test | [ ] | |
| `STD-PG#R001` - Theo dõi thay đổi schema bằng migration có thể rollback hoặc an toàn theo hướng tiến tới | must | test_or_review | [ ] | |
| `STD-PG#R002` - Sử dụng constraint, foreign key và truy cập có index dựa trên query plan | must | test_or_review | [ ] | |
| `STD-PRIV#R001` - Lập bản đồ PII và mục đích xử lý | must | test+review | [ ] | |
| `STD-PRIV#R003` - Thực thi vòng đời lưu giữ và xóa | should | review | [ ] | |
| `STD-PRIV#R004` - Kiểm soát truy cập PII theo mục đích | must | test+review | [ ] | |
| `STD-PRIV#R005` - Ẩn PII trong log và môi trường thử nghiệm | must | test+review | [ ] | |
| `STD-PRIV#R006` - Minh bạch và lựa chọn người dùng | should | review | [ ] | |
| `STD-QC-A11Y#R001` - Kiểm tra điều hướng bằng bàn phím, focus và thông báo dành cho screen reader | must | test | [ ] | |
| `STD-QC-A11Y#R002` - Kiểm tra label/role, nội dung thay thế, contrast và vùng chạm | must | test | [ ] | |
| `STD-QC-AC#R001` - Mỗi acceptance criterion phải quan sát được, kiểm thử được và có kết quả kỳ vọng rõ ràng | must | test | [ ] | |
| `STD-QC-AC#R002` - Làm rõ điều kiện trước, hành vi, đầu ra và quy tắc nghiệp vụ trước khi chốt testcase | must | test | [ ] | |
| `STD-QC-API#R001` - Kiểm tra HTTP status, body, headers và error code đúng hợp đồng, kể cả 400/401/403/404/409/422/429/5xx khi áp dụng | must | test | [ ] | |
| `STD-QC-API#R002` - Kiểm tra schema request/response, boundary, pagination, filtering và version | must | test | [ ] | |
| `STD-QC-AUTO#R001` - Ưu tiên tự động hóa luồng có tần suất chạy cao, ổn định và có giá trị regression | must | test | [ ] | |
| `STD-QC-AUTO#R002` - Test automation phải độc lập, chạy lặp lại được và không phụ thuộc dữ liệu production | must | test | [ ] | |
| `STD-QC-BUG#R001` - Defect phải ghi expected/actual, bước tái hiện, môi trường, phiên bản và bằng chứng | must | test | [ ] | |
| `STD-QC-BUG#R002` - Phân biệt severity (mức tác động) với priority (thứ tự xử lý) | must | test | [ ] | |
| `STD-QC-CASE#R001` - Testcase có ID ổn định, mục đích, điều kiện trước, dữ liệu và các bước tái hiện | must | test | [ ] | |
| `STD-QC-CASE#R002` - Mỗi bước kiểm tra có kết quả kỳ vọng đủ rõ để đánh giá pass/fail | must | test | [ ] | |
| `STD-QC-DATA#R001` - Không dùng dữ liệu sản xuất có thông tin cá nhân chưa được phép và bảo vệ | must | test | [ ] | |
| `STD-QC-DATA#R002` - Tổ chức fixture theo kịch bản, có phiên bản, có quy tắc reset/cleanup | must | test | [ ] | |
| `STD-QC-E2E#R001` - Xác định luồng người dùng đầu-cuối theo outcome nghiệp vụ chứ không chỉ theo màn hình | must | test | [ ] | |
| `STD-QC-E2E#R002` - Kiểm tra trạng thái xuyên tầng UI, API và DB ở các điểm quan trọng | must | test | [ ] | |
| `STD-QC-ENV#R001` - Công bố cấu hình môi trường, phiên bản dịch vụ và khác biệt so với production | must | test | [ ] | |
| `STD-QC-ENV#R002` - Phân biệt lỗi môi trường với lỗi phần mềm và ghi lại trạng thái outage | must | test | [ ] | |
| `STD-QC-EXEC#R001` - Lưu build/version, môi trường, thiết bị, dữ liệu và thời gian mỗi test run | must | test | [ ] | |
| `STD-QC-EXEC#R002` - Chỉ đánh dấu Passed khi actual result phù hợp expected result và có đủ bằng chứng khi cần | must | test | [ ] | |
| `STD-QC-GATE#R001` - Định nghĩa trước điều kiện pass theo coverage, severity lỗi, regression và rủi ro | must | test | [ ] | |
| `STD-QC-GATE#R002` - Không cho qua gate nếu còn blocker/critical chưa xử lý hoặc chưa có quyết định waiver hợp lệ | must | test | [ ] | |
| `STD-QC-MOB#R001` - Kiểm tra startup, background/resume, killed/relaunch và restore state | must | test | [ ] | |
| `STD-QC-MOB#R002` - Kiểm tra offline/reconnect, timeout, quyền thiết bị và push notification | must | test | [ ] | |
| `STD-QC-NEG#R001` - Liệt kê input không hợp lệ, giới hạn độ dài, định dạng và giá trị không cho phép | must | test | [ ] | |
| `STD-QC-NEG#R002` - Kiểm tra quyền truy cập sai, phiên hết hạn, lỗi mạng và timeout | must | test | [ ] | |
| `STD-QC-PLAN#R001` - Xác định phạm vi kiểm thử theo requirement, feature, thay đổi và rủi ro | must | test | [ ] | |
| `STD-QC-PLAN#R002` - Ghi rõ loại kiểm thử, mức ưu tiên, người phụ trách và điều kiện bắt đầu/kết thúc | must | test | [ ] | |
| `STD-QC-REG#R001` - Duy trì bộ regression cốt lõi cho luồng nghiệp vụ trọng yếu | must | test | [ ] | |
| `STD-QC-REG#R002` - Ưu tiên testcase theo ảnh hưởng trực tiếp, phụ thuộc và lịch sử lỗi | must | test | [ ] | |
| `STD-QC-REPORT#R001` - Báo cáo số testcase Passed, Failed, Blocked, Not Run theo build và phạm vi | must | test | [ ] | |
| `STD-QC-REPORT#R002` - Báo cáo defect theo severity, tuổi lỗi, reopen và xu hướng giải quyết | must | test | [ ] | |
| `STD-QC-SEC#R001` - Kiểm tra xác thực, phân quyền theo vai trò, IDOR và session hết hạn | must | test | [ ] | |
| `STD-QC-SEC#R002` - Xác minh validate đầu vào, bảo vệ dữ liệu và không lộ secret trong log/error | must | test | [ ] | |
| `STD-QC-TRACE#R001` - Mỗi testcase liên kết tới requirement, AC hoặc rủi ro mà nó kiểm chứng | must | test | [ ] | |
| `STD-QC-TRACE#R002` - Ghi nhận trạng thái coverage theo AC, phân biệt chưa thiết kế và chưa thực thi | must | test | [ ] | |
| `STD-QC-UAT#R001` - Xây dựng kịch bản UAT từ business flow và AC đã được chốt | must | test | [ ] | |
| `STD-QC-UAT#R002` - Xác định người dùng nghiệp vụ chịu trách nhiệm nghiệm thu và tiêu chí hoàn thành | must | test | [ ] | |
| `STD-QC-UI#R001` - Đối chiếu UI với design và các trạng thái loading, empty, error, success | must | test | [ ] | |
| `STD-QC-UI#R002` - Kiểm tra validation field, toast/dialog, focus, navigation và keyboard | must | test | [ ] | |
| `STD-REACT#R001` - Giữ component thuần và đặt side effect trong hook phù hợp với lifecycle | must | test_or_review | [ ] | |
| `STD-REACT#R002` - Tách các hành vi nghiệp vụ lặp lại thành feature hook/service | must | test_or_review | [ ] | |
| `STD-REACT-TEST#R001` - Kiểm thử kết quả người dùng có thể quan sát thay vì chi tiết triển khai nội bộ | must | test | [ ] | |
| `STD-REACT-TEST#R002` - Mock ranh giới network và bao phủ các trạng thái loading/error/empty | must | test_or_review | [ ] | |
| `STD-REQ#R001` - Ghi nhận yêu cầu thô kèm nguồn, owner và các câu hỏi chưa được giải quyết trước khi phân loại | must | review | [ ] | |
| `STD-REQ#R002` - Tách functional requirement có thể kiểm thử khỏi giả định và ràng buộc phi chức năng | must | test | [ ] | |
| `STD-RES#R001` - Timeout và retry có ngân sách | must | review | [ ] | |
| `STD-RES#R002` - Thiết kế circuit breaker và bulkhead | must | review | [ ] | |
| `STD-RES#R003` - Xử lý lỗi suy giảm an toàn | must | review | [ ] | |
| `STD-RES#R005` - Quan sát chỉ số reliability và error budget | should | review | [ ] | |
| `STD-RN#R001` - Bọc các lời gọi native module và xử lý lỗi permission hoặc OS | must | test+review | [ ] | |
| `STD-RN#R002` - Không chặn JS thread bằng các thao tác đồng bộ tốn tài nguyên | must | test_or_review | [ ] | |
| `STD-RN-NAV#R001` - Chọn một hệ thống routing cho project và định nghĩa route parameter có kiểu dữ liệu rõ ràng | must | test_or_review | [ ] | |
| `STD-RN-NAV#R002` - Xử lý nhất quán back navigation, nested stack và chuyển trạng thái xác thực | must | test_or_review | [ ] | |
| `STD-RN-STATE#R001` - Chọn và tài liệu hóa một chiến lược quản lý client state thống nhất | must | test_or_review | [ ] | |
| `STD-RN-STATE#R002` - Tách biệt remote query state khỏi local UI state | must | test_or_review | [ ] | |
| `STD-RN-STORE#R001` - Phân loại dữ liệu trước khi lưu thiết bị | must | test+review | [ ] | |
| `STD-RN-STORE#R002` - Tách cache theo tài khoản và xóa khi logout | must | test+review | [ ] | |
| `STD-RN-STORE#R003` - Migration cấu trúc local storage có kiểm thử | must | test | [ ] | |
| `STD-RN-TEST#R001` - Kiểm thử màn hình chính trong điều kiện loading, error và offline | must | test | [ ] | |
| `STD-RN-TEST#R002` - Kiểm thử navigation và deep link destination trên thiết bị | must | test | [ ] | |
| `STD-RQ#R001` - Sử dụng query key bao gồm mọi parameter có ý nghĩa | must | test_or_review | [ ] | |
| `STD-RQ#R002` - Invalidate hoặc cập nhật query sau mutation với ownership rõ ràng | must | test_or_review | [ ] | |
| `STD-RUNBOOK#R001` - Hướng dẫn thao tác có điều kiện kích hoạt | must | runtime | [ ] | |
| `STD-RUNBOOK#R002` - Lệnh có phạm vi và khả năng rollback | must | runtime | [ ] | |
| `STD-SEC#R001` - Thực thi authentication và authorization tại ranh giới server đáng tin cậy | must | test+review | [ ] | |
| `STD-SEC#R002` - Bảo vệ credential và secret bằng hệ thống quản lý secret chuyên dụng | must | review | [ ] | |
| `STD-SEC#R003` - Validation input không đáng tin cậy và encode output theo đúng ngữ cảnh đích | should | review | [ ] | |
| `STD-SEC#R005` - Mặc định từ chối và phân quyền tối thiểu | must | review | [ ] | |
| `STD-SEC#R007` - Không tiết lộ nội bộ khi thất bại | should | review | [ ] | |
| `STD-SESSION#R001` - Định nghĩa access/refresh token lifecycle | must | review | [ ] | |
| `STD-SESSION#R002` - Đồng bộ logout và revoke trên mọi bề mặt | must | review | [ ] | |
| `STD-SESSION#R003` - Xử lý single-flight refresh và trạng thái session | must | review | [ ] | |
| `STD-SESSION#R004` - Phân biệt unauthorized, forbidden và offline | should | review | [ ] | |
| `STD-SESSION#R005` - Kiểm thử resume, revoke và đổi account | should | review | [ ] | |
| `STD-SLO#R001` - SLI đo từ trải nghiệm thực | must | runtime | [ ] | |
| `STD-SLO#R002` - SLO có cửa sổ và phép tính rõ | must | runtime | [ ] | |
| `STD-TENANCY#R002` - Cô lập tenant xuyên DB, cache, object storage, search, queue và background job | must | review | [ ] | |
| `STD-TENANCY#R004` - Admin/support access và impersonation phải có guardrail và audit mạnh hơn user thường | must | review | [ ] | |
| `STD-TEST#R001` - Kiểm thử hành vi từ acceptance criteria, bao gồm luồng âm và trường hợp biên | must | test | [ ] | |
| `STD-TEST#R002` - Chạy lint, type check và test có tính xác định trong CI khi phù hợp | must | test | [ ] | |
| `STD-TRACE#R001` - Truyền trace context theo chuẩn hợp đồng | must | review | [ ] | |
| `STD-TRACE#R002` - Phân biệt trace ID, span ID và request ID | must | review | [ ] | |
| `STD-TRACE#R003` - Redact và sampling tránh lộ dữ liệu | must | review | [ ] | |
| `STD-TRACE#R004` - Quan sát latency và lỗi xuyên service | should | review | [ ] | |
| `STD-TS#R001` - Bật strict mode và tránh ép kiểu `any` khi chưa được review | must | test_or_review | [ ] | |
| `STD-TS#R002` - Tách API DTO khỏi domain model và view model | must | test_or_review | [ ] | |
| `STD-UI-STATE#R001` - Phân biệt đầy đủ các trạng thái dữ liệu | must | test_or_review | [ ] | |
| `STD-UI-STATE#R002` - Chặn response cũ ghi đè response mới | must | test_or_review | [ ] | |
| `STD-UX#R001` - Luồng chính có điểm hoàn thành rõ | must | test_or_review | [ ] | |
| `STD-UX#R002` - Hạn chế bất ngờ và hành vi phá hủy | must | test_or_review | [ ] | |
| `STD-VERSIONING#R001` - Dùng thay đổi tương thích cho API và contract | must | test_or_review | [ ] | |
| `STD-VERSIONING#R002` - Áp dụng version sản phẩm theo chính sách rõ ràng | must | test_or_review | [ ] | |
| `STD-VERSIONING#R003` - Thiết lập thời hạn hỗ trợ và deprecation | must | test_or_review | [ ] | |
| `STD-VERSIONING#R006` - Ma trận hỗ trợ client/server/contract | must | review | [ ] | |
| `STD-VULN#R001` - Hợp nhất phát hiện lỗ hổng vào một quy trình có owner | must | review | [ ] | |
| `STD-VULN#R002` - Ưu tiên theo rủi ro thực tế thay vì chỉ dựa severity thô | must | review | [ ] | |
| `STD-VULN#R003` - Waiver và risk acceptance phải có hạn và có người phê duyệt | must | review | [ ] | |
| `STD-VULN#R006` - Có kênh tiếp nhận và quy trình disclosure phù hợp | should | review | [ ] | |
| `STD-WEB-ARCH#R001` - Tách route/page, feature, shared component và infrastructure adapter | must | test_or_review | [ ] | |
| `STD-WEB-ARCH#R002` - Không đặt quy tắc nghiệp vụ trong logic rendering và browser event handler | must | test_or_review | [ ] | |
| `STD-WEB-AUTH#R001` - Ưu tiên cookie HttpOnly an toàn khi kiến trúc session hỗ trợ | must | test+review | [ ] | |
| `STD-WEB-AUTH#R002` - Bảo vệ các endpoint thay đổi trạng thái dùng xác thực bằng cookie khỏi CSRF | must | test+review | [ ] | |
| `STD-WEB-AUTH#R005` - Không leak trạng thái phiên qua URL | must | test+review | [ ] | |
| `STD-WEB-FORM#R001` - Giữ validation phía client đồng bộ với server contract nhưng không tin cậy kiểm tra từ client | must | test_or_review | [ ] | |
| `STD-WEB-FORM#R002` - Hiển thị lỗi theo field, lỗi server và lỗi cấp form theo cách hỗ trợ accessibility | must | test | [ ] | |
| `STD-WEB-PERF#R001` - Đặt budget có thể đo lường cho bundle size, LCP, INP và error rate | must | test_or_review | [ ] | |
| `STD-WEB-PERF#R002` - Phân trang hoặc virtualize danh sách dài và tránh API payload không giới hạn | must | test_or_review | [ ] | |
| `STD-WEB-PWA#R001` - Chỉ sử dụng service worker cho các kịch bản cache/offline được xác định rõ | must | test_or_review | [ ] | |
| `STD-WEB-PWA#R002` - Đánh version cho cache entry và tránh cache response riêng tư một cách tùy tiện | must | test+review | [ ] | |
| `STD-WEB-PWA#R005` - Service worker update và cache/data version | must | review | [ ] | |
| `STD-WEB-RESP#R001` - Sử dụng responsive breakpoint dựa trên nội dung layout thay vì chỉ dựa vào loại thiết bị | must | test_or_review | [ ] | |
| `STD-WEB-RESP#R002` - Đảm bảo điều hướng bằng bàn phím, hiển thị focus và semantic labeling | must | test | [ ] | |
| `STD-WEB-ROUTE#R001` - Xác định route chuẩn, parameter và hành vi khi route không tồn tại | must | test_or_review | [ ] | |
| `STD-WEB-ROUTE#R002` - Giữ trạng thái filter/query có thể điều hướng trong URL khi phù hợp để chia sẻ | must | test_or_review | [ ] | |
| `STD-WEB-SEC#R001` - Thiết lập CSP hạn chế script | must | test+review | [ ] | |
| `STD-WEB-SEC#R004` - Bảo vệ cookie và token trình duyệt | must | test+review | [ ] | |
| `STD-WEB-SEC#R005` - Cấu hình CORS và nhúng trang | must | test+review | [ ] | |
| `STD-WEB-SEO#R001` - Chọn CSR, SSR hoặc static rendering dựa trên nhu cầu indexing và nội dung | must | test_or_review | [ ] | |
| `STD-WEB-SEO#R002` - Cung cấp canonical URL, metadata và nội dung có thể crawl cho trang công khai | must | test_or_review | [ ] | |
| `STD-WEB-STORE#R001` - Phân loại dữ liệu trước khi sử dụng cookie, localStorage, sessionStorage hoặc IndexedDB | must | test+review | [ ] | |
| `STD-WEB-STORE#R002` - Tránh lưu bearer secret trong web storage khi có phương án an toàn hơn | must | test+review | [ ] | |
| `STD-WEBHOOK#R001` - Xác minh chữ ký và chống replay | must | test+review | [ ] | |
| `STD-WEBHOOK#R002` - Tiếp nhận nhanh và xử lý bất đồng bộ | must | test_or_review | [ ] | |
| `STD-WEBHOOK#R003` - Deduplicate và bảo toàn thứ tự nghiệp vụ | must | test_or_review | [ ] | |
