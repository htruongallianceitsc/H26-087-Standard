# Checklist – developer

Profile: `Ví dụ ứng dụng ReactJS + ASP.NET Core`
Rule phù hợp: **261**

| Rule | Severity | Verification gợi ý | Pass/Fail/Waived/NA | Evidence |
|---|---|---|---|---|
| `STD-ANALYTICS#R001` – Thiết kế event schema và định nghĩa metric | must | test_or_review | ☐ | |
| `STD-ANALYTICS#R002` – Không gửi token hoặc PII không cần thiết | must | test+review | ☐ | |
| `STD-ANALYTICS#R005` – Kiểm thử chất lượng dữ liệu và funnel | should | test | ☐ | |
| `STD-ENV#R001` – Phân tách môi trường và quyền truy cập | must | test+review | ☐ | |
| `STD-ERR#R002` – Sử dụng error/result có kiểu dữ liệu và message an toàn cho người dùng, không làm lộ chi tiết nhạy cảm | must | test_or_review | ☐ | |
| `STD-ERR#R004` – Log ngữ cảnh chẩn đoán nhưng phải ngăn rò rỉ secret và dữ liệu cá nhân | should | test+review | ☐ | |
| `STD-I18N#R002` – Định dạng ngày số và tiền theo locale | must | test_or_review | ☐ | |
| `STD-PERF#R003` – Giới hạn tải dữ liệu và số lần gọi | must | test_or_review | ☐ | |
| `STD-PRIV#R001` – Lập bản đồ PII và mục đích xử lý | must | test+review | ☐ | |
| `STD-PRIV#R002` – Tối thiểu hóa dữ liệu thu thập và chia sẻ | should | test+review | ☐ | |
| `STD-PRIV#R004` – Kiểm soát truy cập PII theo mục đích | must | test+review | ☐ | |
| `STD-PRIV#R005` – Ẩn PII trong log và môi trường thử nghiệm | must | test+review | ☐ | |
| `STD-PRIV#R007` – Đánh giá bên thứ ba và chuyển dữ liệu | should | test+review | ☐ | |
| `STD-PRIV#R008` – Xử lý sự cố và yêu cầu chủ thể dữ liệu | should | test+review | ☐ | |
| `STD-RES#R004` – Kiểm thử failure injection và phục hồi | should | test | ☐ | |
| `STD-SEC#R001` – Thực thi authentication và authorization tại ranh giới server đáng tin cậy | must | test+review | ☐ | |
| `STD-SEC#R004` – Thực hiện threat model cho luồng nhạy cảm và review các phát hiện về dependency/security | should | test+review | ☐ | |
| `STD-SEC#R006` – Bảo vệ dữ liệu khi truyền và lưu | should | test+review | ☐ | |
| `STD-API-HTTP#R001` – Dùng mã 2xx đúng theo ý nghĩa thao tác | must | test_or_review | ☐ | |
| `STD-API-HTTP#R002` – Phân biệt xác thực và phân quyền | must | test+review | ☐ | |
| `STD-API-HTTP#R003` – Chuẩn hóa 400, 404, 405, 409 và 422 | must | test_or_review | ☐ | |
| `STD-API-HTTP#R004` – Áp dụng chính xác 429 và nhóm 5xx | must | test+review | ☐ | |
| `STD-API-HTTP#R005` – Phản hồi lỗi có cấu trúc ổn định | must | test_or_review | ☐ | |
| `STD-API-HTTP#R006` – Phân biệt lỗi cần hiển thị và lỗi nội bộ | must | test_or_review | ☐ | |
| `STD-API-HTTP#R007` – Retry có giới hạn và bảo vệ thao tác không idempotent | must | test_or_review | ☐ | |
| `STD-API-HTTP#R008` – Định nghĩa contract và test theo method | must | test | ☐ | |
| `STD-API-HTTP#R009` – Gắn correlation ID và quan sát lỗi an toàn | must | test+review | ☐ | |
| `STD-API-REST#R001` – Định danh resource và phương thức HTTP nhất quán | must | test_or_review | ☐ | |
| `STD-API-REST#R002` – Response và status nhất quán với STD-API-HTTP | must | test_or_review | ☐ | |
| `STD-API-REST#R003` – Giới hạn phân trang lọc và sort | must | test_or_review | ☐ | |
| `STD-API-REST#R004` – Định nghĩa concurrency và idempotency cho mutation | should | test_or_review | ☐ | |
| `STD-API-REST#R005` – Công bố OpenAPI và contract test | should | test | ☐ | |
| `STD-API-RT#R001` – Bảo vệ handshake và từng subscription | must | test_or_review | ☐ | |
| `STD-API-RT#R002` – Định nghĩa thứ tự, cursor và replay | must | test_or_review | ☐ | |
| `STD-API-RT#R003` – Quản lý heartbeat và reconnect backoff | must | test_or_review | ☐ | |
| `STD-API-RT#R004` – Áp dụng backpressure và giới hạn payload | should | test_or_review | ☐ | |
| `STD-API-RT#R005` – Giữ nhất quán snapshot sau reconnect | should | test_or_review | ☐ | |
| `STD-API#R001` – Sử dụng endpoint contract có version với cấu trúc request/response được tài liệu hóa | must | test_or_review | ☐ | |
| `STD-API#R002` – Áp dụng nhất quán xác thực, phân quyền, phân trang và validation | must | test+review | ☐ | |
| `STD-API#R003` – Xác định mã lỗi chuẩn và correlation ID | should | test_or_review | ☐ | |
| `STD-API#R004` – Công bố OpenAPI và chạy kiểm tra contract đối với phần triển khai | should | test_or_review | ☐ | |
| `STD-CACHE#R001` – Khai báo owner key scope và TTL | must | test_or_review | ☐ | |
| `STD-CACHE#R002` – Định nghĩa invalidation khi write | must | test_or_review | ☐ | |
| `STD-CACHE#R003` – Chống cache stampede và quá tải | must | test_or_review | ☐ | |
| `STD-CACHE#R004` – Bảo vệ tính riêng tư và phân quyền | should | test+review | ☐ | |
| `STD-CACHE#R005` – Quan sát hit-rate và sự cố cache | should | test_or_review | ☐ | |
| `STD-DATA-MIG#R001` – Áp dụng expand-migrate-contract không làm gián đoạn | must | test_or_review | ☐ | |
| `STD-DATA-MIG#R002` – Migration có định danh và thứ tự bất biến | should | test_or_review | ☐ | |
| `STD-DATA-MIG#R003` – Backfill theo batch và có checkpoint | should | test_or_review | ☐ | |
| `STD-DATA-MIG#R004` – Mọi thay đổi nguy hiểm có kế hoạch rollback/forward-fix | must | test_or_review | ☐ | |
| `STD-DATA-MIG#R005` – Kiểm soát lock và giao dịch DDL | must | test_or_review | ☐ | |
| `STD-DATA-MIG#R006` – Đảm bảo tương thích API và code version cũ | should | test_or_review | ☐ | |
| `STD-DATA-MIG#R007` – Đối soát dữ liệu sau migration | should | test_or_review | ☐ | |
| `STD-DATA-MIG#R008` – Quan sát và cảnh báo trong rollout | should | test_or_review | ☐ | |
| `STD-DATA-TX#R001` – Định ranh giới transaction theo invariant | must | test_or_review | ☐ | |
| `STD-DATA-TX#R002` – Kiểm soát update đồng thời và lost update | must | test_or_review | ☐ | |
| `STD-DATA-TX#R003` – Giảm deadlock và giao dịch kéo dài | must | test_or_review | ☐ | |
| `STD-DATA-TX#R004` – Tách transaction nội bộ và distributed workflow | should | test_or_review | ☐ | |
| `STD-DATA-TX#R005` – Xử lý trạng thái không chắc chắn | should | test_or_review | ☐ | |
| `STD-DATA#R001` – Định nghĩa khóa và ràng buộc invariant trong DB | must | test_or_review | ☐ | |
| `STD-DATA#R002` – Thiết kế schema theo truy vấn thực tế | must | test_or_review | ☐ | |
| `STD-DATA#R003` – Quản lý audit và vòng đời bản ghi | must | test+review | ☐ | |
| `STD-DATA#R004` – Lưu tiền và thời gian không mất độ chính xác | should | test_or_review | ☐ | |
| `STD-DATA#R005` – Nâng schema tương thích đa phiên bản | should | test_or_review | ☐ | |
| `STD-INTEGRATION#R001` – Hợp đồng adapter và mapping rõ ràng | must | test_or_review | ☐ | |
| `STD-INTEGRATION#R002` – Bảo vệ credential và dữ liệu truyền đi | must | test+review | ☐ | |
| `STD-INTEGRATION#R003` – Retry chỉ cho lỗi tạm thời và idempotent | must | test_or_review | ☐ | |
| `STD-INTEGRATION#R004` – Giới hạn tài nguyên và cô lập sự cố | should | test_or_review | ☐ | |
| `STD-INTEGRATION#R005` – Đối soát và test contract nâng cấp | should | test | ☐ | |
| `STD-WEBHOOK#R001` – Xác minh chữ ký và chống replay | must | test+review | ☐ | |
| `STD-WEBHOOK#R002` – Tiếp nhận nhanh và xử lý bất đồng bộ | must | test_or_review | ☐ | |
| `STD-WEBHOOK#R003` – Deduplicate và bảo toàn thứ tự nghiệp vụ | must | test_or_review | ☐ | |
| `STD-WEBHOOK#R004` – Phiên bản hóa hợp đồng event | should | test_or_review | ☐ | |
| `STD-WEBHOOK#R005` – Có khả năng replay và giám sát tồn đọng | should | test+review | ☐ | |
| `STD-A11Y#R001` – Đáp ứng WCAG 2.2 AA theo phạm vi đã chọn | must | test | ☐ | |
| `STD-A11Y#R002` – Điều hướng bàn phím đầy đủ | should | test | ☐ | |
| `STD-A11Y#R003` – Tên và vai trò được đọc bởi assistive technology | should | test | ☐ | |
| `STD-A11Y#R004` – Thông báo lỗi và trạng thái dễ tiếp cận | must | test | ☐ | |
| `STD-A11Y#R005` – Đảm bảo tương phản và trạng thái focus | must | test | ☐ | |
| `STD-A11Y#R008` – Kiểm thử với assistive technology và người dùng | should | test | ☐ | |
| `STD-DESIGN#R001` – Handoff thiết kế có trạng thái tương tác | must | test_or_review | ☐ | |
| `STD-DESIGN#R002` – Đối chiếu bản build với thiết kế | must | test_or_review | ☐ | |
| `STD-DESIGN#R003` – Thiết kế tương tác khả thi | should | test | ☐ | |
| `STD-DESIGN#R004` – Quản lý thay đổi phiên bản thiết kế | should | test_or_review | ☐ | |
| `STD-DS#R001` – Sử dụng design token tập trung | must | test+review | ☐ | |
| `STD-DS#R002` – Định nghĩa component API nhất quán | must | test_or_review | ☐ | |
| `STD-DS#R003` – Kiểm thử component trên các state | should | test | ☐ | |
| `STD-DS#R004` – Version và migration token/component | should | test+review | ☐ | |
| `STD-FEEDBACK#R001` – Thông báo tương ứng tác động thao tác | must | test_or_review | ☐ | |
| `STD-FEEDBACK#R003` – Ngăn spam thông báo lặp | should | test_or_review | ☐ | |
| `STD-FORM#R001` – Xác thực đúng lớp và thời điểm | must | test_or_review | ☐ | |
| `STD-FORM#R002` – Giữ dữ liệu khi gửi lỗi | must | test_or_review | ☐ | |
| `STD-FORM#R003` – Ngăn submit trùng và yêu cầu không cần thiết | should | test_or_review | ☐ | |
| `STD-FORM#R004` – Input truy cập được bằng bàn phím | should | test | ☐ | |
| `STD-UI-STATE#R001` – Phân biệt đầy đủ các trạng thái dữ liệu | must | test_or_review | ☐ | |
| `STD-UI-STATE#R002` – Chặn response cũ ghi đè response mới | must | test_or_review | ☐ | |
| `STD-UI-STATE#R003` – Trạng thái thao tác độc lập với tải trang | should | test_or_review | ☐ | |
| `STD-UI-STATE#R004` – Làm rõ optimistic update và rollback | should | test_or_review | ☐ | |
| `STD-UX#R001` – Luồng chính có điểm hoàn thành rõ | must | test_or_review | ☐ | |
| `STD-UX#R002` – Hạn chế bất ngờ và hành vi phá hủy | must | test_or_review | ☐ | |
| `STD-UX#R003` – Điều hướng giữ ngữ cảnh | should | test_or_review | ☐ | |
| `STD-UX#R004` – Nội dung hành động cụ thể | should | test_or_review | ☐ | |
| `STD-WEB-ARCH#R001` – Tách route/page, feature, shared component và infrastructure adapter | must | test_or_review | ☐ | |
| `STD-WEB-ARCH#R002` – Không đặt quy tắc nghiệp vụ trong logic rendering và browser event handler | must | test_or_review | ☐ | |
| `STD-WEB-ARCH#R003` – Xác định ranh giới tin cậy giữa browser/server và ownership của API contract | should | test+review | ☐ | |
| `STD-WEB-ARCH#R004` – Tránh dependency vòng giữa các feature và module utility dùng chung không có ranh giới rõ ràng | should | test_or_review | ☐ | |
| `STD-WEB-AUTH#R001` – Ưu tiên cookie HttpOnly an toàn khi kiến trúc session hỗ trợ | must | test+review | ☐ | |
| `STD-WEB-AUTH#R002` – Bảo vệ các endpoint thay đổi trạng thái dùng xác thực bằng cookie khỏi CSRF | must | test+review | ☐ | |
| `STD-WEB-AUTH#R003` – Xử lý hết hạn và refresh mà không làm lộ credential cho UI component | should | test+review | ☐ | |
| `STD-WEB-AUTH#R004` – Phân quyền mọi thao tác được bảo vệ ở phía server; route guard chỉ phục vụ UX | should | test+review | ☐ | |
| `STD-WEB-AUTH#R005` – Không leak trạng thái phiên qua URL | must | test+review | ☐ | |
| `STD-WEB-AUTH#R006` – Logout và đổi tài khoản làm sạch state | should | test+review | ☐ | |
| `STD-WEB-AUTH#R007` – Xử lý lỗi thân thiện, không lộ chi tiết | should | test+review | ☐ | |
| `STD-WEB-AUTH#R008` – Kiểm thử session đa tab và cạnh tranh | should | test | ☐ | |
| `STD-WEB-FORM#R001` – Giữ validation phía client đồng bộ với server contract nhưng không tin cậy kiểm tra từ client | must | test_or_review | ☐ | |
| `STD-WEB-FORM#R002` – Hiển thị lỗi theo field, lỗi server và lỗi cấp form theo cách hỗ trợ accessibility | must | test | ☐ | |
| `STD-WEB-FORM#R003` – Ngăn submit hai lần ngoài ý muốn và lưu draft an toàn khi phù hợp | should | test_or_review | ☐ | |
| `STD-WEB-FORM#R004` – Hỗ trợ luồng submit bằng bàn phím và screen reader | should | test | ☐ | |
| `STD-WEB-PERF#R001` – Đặt budget có thể đo lường cho bundle size, LCP, INP và error rate | must | test_or_review | ☐ | |
| `STD-WEB-PERF#R002` – Phân trang hoặc virtualize danh sách dài và tránh API payload không giới hạn | must | test_or_review | ☐ | |
| `STD-WEB-PERF#R003` – Profile rerender, event listener và bộ nhớ trước khi bổ sung tối ưu hóa | should | test_or_review | ☐ | |
| `STD-WEB-PERF#R004` – Trì hoãn công việc không quan trọng và cung cấp các trạng thái loading/empty/error | should | test_or_review | ☐ | |
| `STD-WEB-PWA#R001` – Chỉ sử dụng service worker cho các kịch bản cache/offline được xác định rõ | must | test_or_review | ☐ | |
| `STD-WEB-PWA#R002` – Đánh version cho cache entry và tránh cache response riêng tư một cách tùy tiện | must | test+review | ☐ | |
| `STD-WEB-PWA#R003` – Cung cấp fallback hợp lý khi push, install prompt hoặc offline API không được hỗ trợ | should | test_or_review | ☐ | |
| `STD-WEB-PWA#R004` – Kiểm thử update, asset cũ và thay đổi session xuyên suốt vòng đời PWA | should | test | ☐ | |
| `STD-WEB-RESP#R001` – Sử dụng responsive breakpoint dựa trên nội dung layout thay vì chỉ dựa vào loại thiết bị | must | test_or_review | ☐ | |
| `STD-WEB-RESP#R002` – Đảm bảo điều hướng bằng bàn phím, hiển thị focus và semantic labeling | must | test | ☐ | |
| `STD-WEB-RESP#R003` – Xác minh độ tương phản, thay đổi cỡ chữ và tương tác reduced-motion | should | test_or_review | ☐ | |
| `STD-WEB-RESP#R004` – Kiểm thử layout chính trên viewport hẹp và rộng | should | test | ☐ | |
| `STD-WEB-ROUTE#R001` – Xác định route chuẩn, parameter và hành vi khi route không tồn tại | must | test_or_review | ☐ | |
| `STD-WEB-ROUTE#R002` – Giữ trạng thái filter/query có thể điều hướng trong URL khi phù hợp để chia sẻ | must | test_or_review | ☐ | |
| `STD-WEB-ROUTE#R003` – Bảo vệ trang bị giới hạn bằng UI guard nhưng vẫn dựa vào authorization phía server | should | test+review | ☐ | |
| `STD-WEB-ROUTE#R004` – Xử lý reload sâu và điều hướng trực tiếp bằng quy tắc fallback của hosting | should | test_or_review | ☐ | |
| `STD-WEB-SEC#R001` – Thiết lập CSP hạn chế script | must | test+review | ☐ | |
| `STD-WEB-SEC#R002` – Chống XSS tại điểm render | should | test+review | ☐ | |
| `STD-WEB-SEC#R003` – Chống CSRF với cookie auth | should | test+review | ☐ | |
| `STD-WEB-SEC#R004` – Bảo vệ cookie và token trình duyệt | must | test+review | ☐ | |
| `STD-WEB-SEC#R005` – Cấu hình CORS và nhúng trang | must | test+review | ☐ | |
| `STD-WEB-SEC#R006` – Không lộ dữ liệu qua cache/URL | should | test+review | ☐ | |
| `STD-WEB-SEC#R007` – Bảo vệ dependency frontend | should | test+review | ☐ | |
| `STD-WEB-SEC#R008` – Kiểm thử bảo mật browser | should | test | ☐ | |
| `STD-WEB-SEO#R001` – Chọn CSR, SSR hoặc static rendering dựa trên nhu cầu indexing và nội dung | must | test_or_review | ☐ | |
| `STD-WEB-SEO#R002` – Cung cấp canonical URL, metadata và nội dung có thể crawl cho trang công khai | must | test_or_review | ☐ | |
| `STD-WEB-SEO#R003` – Loại trừ route riêng tư/cần xác thực khỏi search indexing | should | test+review | ☐ | |
| `STD-WEB-SEO#R004` – Kiểm thử nội dung render ở production và redirect theo ràng buộc crawler thực tế | should | test | ☐ | |
| `STD-WEB-STORE#R001` – Phân loại dữ liệu trước khi sử dụng cookie, localStorage, sessionStorage hoặc IndexedDB | must | test+review | ☐ | |
| `STD-WEB-STORE#R002` – Tránh lưu bearer secret trong web storage khi có phương án an toàn hơn | must | test+review | ☐ | |
| `STD-WEB-STORE#R003` – Áp dụng thời hạn hết hiệu lực và cơ chế vô hiệu hóa cho response từ server được cache | should | test_or_review | ☐ | |
| `STD-WEB-STORE#R004` – Dọn dẹp cache cũ và cô lập dữ liệu client theo từng tài khoản | should | test_or_review | ☐ | |
| `STD-BE-ARCH#R001` – Tách giao thức, nghiệp vụ và persistence | must | test_or_review | ☐ | |
| `STD-BE-ARCH#R002` – Phụ thuộc đi về abstraction có chủ đích | must | test_or_review | ☐ | |
| `STD-BE-ARCH#R003` – Xác định ranh giới giao dịch theo use case | should | test_or_review | ☐ | |
| `STD-BE-ARCH#R004` – Hợp đồng module rõ và có test | should | test | ☐ | |
| `STD-BE-AUTH#R001` – Xác thực access token/session theo issuer và audience | must | test+review | ☐ | |
| `STD-BE-AUTH#R002` – Ủy quyền trên resource và tenant | should | test+review | ☐ | |
| `STD-BE-AUTH#R003` – Lưu mật khẩu bằng KDF chuyên dụng | should | test_or_review | ☐ | |
| `STD-BE-AUTH#R004` – Giới hạn đăng nhập và tránh enumeration | must | test+review | ☐ | |
| `STD-BE-AUTH#R005` – Quản lý refresh/session và thu hồi | must | test+review | ☐ | |
| `STD-BE-AUTH#R006` – Áp dụng MFA cho hành động nhạy cảm | should | test+review | ☐ | |
| `STD-BE-AUTH#R007` – Không trả credential/secret trong lỗi và log | should | test+review | ☐ | |
| `STD-BE-AUTH#R008` – Ma trận kiểm thử auth/permission | should | test | ☐ | |
| `STD-BE-CONCUR#R001` – Thiết kế idempotency cho lệnh có side effect | must | test_or_review | ☐ | |
| `STD-BE-CONCUR#R002` – Sử dụng transaction cho invariant đa bước | should | test_or_review | ☐ | |
| `STD-BE-CONCUR#R003` – Đặt optimistic concurrency hoặc locking phù hợp | should | test_or_review | ☐ | |
| `STD-BE-CONCUR#R004` – Bảo đảm không xử lý trùng consumer | must | test_or_review | ☐ | |
| `STD-BE-CONCUR#R005` – Outbox cho giao dịch DB và event | must | test_or_review | ☐ | |
| `STD-BE-CONCUR#R006` – Giới hạn concurrency và timeout | should | test_or_review | ☐ | |
| `STD-BE-CONCUR#R007` – Định nghĩa thứ tự và ownership khi bắt buộc | should | test_or_review | ☐ | |
| `STD-BE-CONCUR#R008` – Stress-test race condition theo invariant | should | test | ☐ | |
| `STD-BE-FILE#R001` – Giới hạn và xác thực tệp phía server | must | test_or_review | ☐ | |
| `STD-BE-FILE#R002` – Tên tệp và đường dẫn không do client điều khiển | must | test_or_review | ☐ | |
| `STD-BE-FILE#R003` – Quét và cách ly nội dung nguy hiểm | should | test_or_review | ☐ | |
| `STD-BE-FILE#R004` – Kiểm soát tải xuống và vòng đời | should | test_or_review | ☐ | |
| `STD-BE-HEALTH#R001` – Liveness không kiểm tra phụ thuộc xa | must | test_or_review | ☐ | |
| `STD-BE-HEALTH#R002` – Readiness kiểm tra khả năng nhận traffic | must | test_or_review | ☐ | |
| `STD-BE-HEALTH#R003` – Endpoint health ít lộ thông tin | should | test+review | ☐ | |
| `STD-BE-HEALTH#R004` – Test hoạt động khi dependency gián đoạn | should | test | ☐ | |
| `STD-BE-JOB#R001` – Tác vụ có cơ chế chống chạy trùng | must | test_or_review | ☐ | |
| `STD-BE-JOB#R002` – Thiết lập retry có giới hạn | must | test_or_review | ☐ | |
| `STD-BE-JOB#R003` – Checkpoint và phục hồi công việc dài | should | test_or_review | ☐ | |
| `STD-BE-JOB#R004` – Quan sát lịch sử thực thi và kết quả | should | test_or_review | ☐ | |
| `STD-BE-PERF#R001` – Đặt ngân sách độ trễ theo endpoint | must | test_or_review | ☐ | |
| `STD-BE-PERF#R002` – Tránh N+1 và payload dư thừa | must | test_or_review | ☐ | |
| `STD-BE-PERF#R003` – Giới hạn tài nguyên mỗi request | should | test_or_review | ☐ | |
| `STD-BE-PERF#R004` – Đo hiệu suất trên dữ liệu đại diện | should | test_or_review | ☐ | |
| `STD-BE-QUEUE#R001` – Consumer xử lý at-least-once an toàn | must | test_or_review | ☐ | |
| `STD-BE-QUEUE#R002` – Retry và dead-letter phân loại lỗi | must | test_or_review | ☐ | |
| `STD-BE-QUEUE#R003` – Quản lý thứ tự khi nghiệp vụ cần | should | test_or_review | ☐ | |
| `STD-BE-QUEUE#R004` – Giám sát độ trễ hàng đợi | should | test_or_review | ☐ | |
| `STD-BE-SEC#R001` – Áp dụng middleware bảo mật thống nhất | must | test+review | ☐ | |
| `STD-BE-SEC#R002` – Không tin dữ liệu từ client | should | test+review | ☐ | |
| `STD-BE-SEC#R003` – Giới hạn tần suất và tài nguyên | should | test+review | ☐ | |
| `STD-BE-SEC#R004` – An toàn với truy vấn và dữ liệu | must | test+review | ☐ | |
| `STD-BE-SEC#R005` – Bảo vệ outbound request và SSRF | must | test+review | ☐ | |
| `STD-BE-SEC#R006` – Quản lý secret và khóa | should | test+review | ☐ | |
| `STD-BE-SEC#R007` – Cấu hình CORS, header và transport | should | test+review | ☐ | |
| `STD-BE-SEC#R008` – Kiểm thử endpoint khi không có quyền | should | test | ☐ | |
| `STD-BE-TX#R001` – Transaction bao trọn invariant nội bộ | must | test_or_review | ☐ | |
| `STD-BE-TX#R002` – Không giữ transaction qua network I/O | must | test_or_review | ☐ | |
| `STD-BE-TX#R003` – Xử lý deadlock và serialization | should | test_or_review | ☐ | |
| `STD-BE-TX#R004` – Kiểm tra rollback qua fault injection | should | test_or_review | ☐ | |
| `STD-BE-VALID#R001` – Validate server dựa trên contract | must | test_or_review | ☐ | |
| `STD-BE-VALID#R002` – Phân biệt dữ liệu sai và lỗi nghiệp vụ | must | test_or_review | ☐ | |
| `STD-BE-VALID#R003` – Normalize trước kiểm tra uniqueness | should | test_or_review | ☐ | |
| `STD-BE-VALID#R004` – Không thay authorization bằng validation | should | test+review | ☐ | |
| `STD-REACT-TEST#R001` – Kiểm thử kết quả người dùng có thể quan sát thay vì chi tiết triển khai nội bộ | must | test | ☐ | |
| `STD-REACT-TEST#R002` – Mock ranh giới network và bao phủ các trạng thái loading/error/empty | must | test_or_review | ☐ | |
| `STD-REACT-TEST#R003` – Chạy kiểm tra tương tác tập trung vào accessibility trên form và dialog | should | test | ☐ | |
| `STD-REACT-TEST#R004` – Kiểm thử hành vi điều hướng và mutation cho các luồng quan trọng | should | test | ☐ | |
| `STD-REACT#R001` – Giữ component thuần và đặt side effect trong hook phù hợp với lifecycle | must | test_or_review | ☐ | |
| `STD-REACT#R002` – Tách các hành vi nghiệp vụ lặp lại thành feature hook/service | must | test_or_review | ☐ | |
| `STD-REACT#R003` – Sử dụng key ổn định và tránh sao chép derived state không cần thiết | should | test_or_review | ☐ | |
| `STD-REACT#R004` – Giữ ranh giới component phù hợp với trách nhiệm và khả năng kiểm thử | should | test | ☐ | |
| `STD-RQ#R001` – Sử dụng query key bao gồm mọi parameter có ý nghĩa | must | test_or_review | ☐ | |
| `STD-RQ#R002` – Invalidate hoặc cập nhật query sau mutation với ownership rõ ràng | must | test_or_review | ☐ | |
| `STD-RQ#R003` – Xử lý rõ ràng việc hủy, dữ liệu stale và retry policy | should | test_or_review | ☐ | |
| `STD-RQ#R004` – Không sao chép server state vào các global store ad hoc trùng lặp | should | test_or_review | ☐ | |
| `STD-TS#R001` – Bật strict mode và tránh ép kiểu `any` khi chưa được review | must | test_or_review | ☐ | |
| `STD-TS#R002` – Tách API DTO khỏi domain model và view model | must | test_or_review | ☐ | |
| `STD-TS#R003` – Validation runtime input không đáng tin cậy tại ranh giới hệ thống | should | test_or_review | ☐ | |
| `STD-TS#R004` – Sử dụng discriminated union cho các biến thể result và state | should | test_or_review | ☐ | |
| `STD-DOTNET-API#R001` – Đặt middleware theo thứ tự bảo mật chuẩn | must | test+review | ☐ | |
| `STD-DOTNET-API#R002` – Dùng DI lifetime tương thích scope | must | test_or_review | ☐ | |
| `STD-DOTNET-API#R003` – Validate input và map error thống nhất | must | test_or_review | ☐ | |
| `STD-DOTNET-API#R004` – Luồng async và cancellation xuyên suốt | should | test+review | ☐ | |
| `STD-DOTNET-API#R005` – Áp dụng authorization trên mọi resource | should | test+review | ☐ | |
| `STD-DOTNET-EF#R001` – Đọc dữ liệu không tracking có chủ đích | must | test_or_review | ☐ | |
| `STD-DOTNET-EF#R002` – Chặn N+1 query và cartesian explosion | must | test_or_review | ☐ | |
| `STD-DOTNET-EF#R003` – Thực thi migration có kiểm soát | must | test_or_review | ☐ | |
| `STD-DOTNET-EF#R004` – Quản lý optimistic concurrency và transactions | should | test+review | ☐ | |
| `STD-DOTNET-EF#R005` – Bảo vệ query thô và connection | should | test+review | ☐ | |
| `STD-DOTNET-TEST#R001` – Phân tầng unit và integration test | must | test | ☐ | |
| `STD-DOTNET-TEST#R002` – Test auth và authorization negative case | must | test | ☐ | |
| `STD-DOTNET-TEST#R003` – Cô lập test và dữ liệu deterministic | must | test | ☐ | |
| `STD-DOTNET-TEST#R004` – Kiểm thử failure/retry và concurrency | should | test | ☐ | |
| `STD-DOTNET-TEST#R005` – Đưa test vào quality gate phù hợp | should | test | ☐ | |
| `STD-DOTNET#R001` – Tách controller/endpoint khỏi application/domain rule và persistence | must | test_or_review | ☐ | |
| `STD-DOTNET#R002` – Sử dụng dependency injection với vòng đời resource theo scope | must | test_or_review | ☐ | |
| `STD-DOTNET#R003` – Validation DTO đầu vào và triển khai error contract tập trung | should | test_or_review | ☐ | |
| `STD-DOTNET#R004` – Bảo vệ endpoint bằng authorization theo policy và integration test | should | test | ☐ | |
| `STD-PG#R001` – Theo dõi thay đổi schema bằng migration có thể rollback hoặc an toàn theo hướng tiến tới | must | test_or_review | ☐ | |
| `STD-PG#R002` – Sử dụng constraint, foreign key và truy cập có index dựa trên query plan | must | test_or_review | ☐ | |
| `STD-PG#R003` – Parameterize query và quản lý transaction quanh các business invariant | should | test_or_review | ☐ | |
| `STD-PG#R004` – Theo dõi query chậm và áp dụng database role theo nguyên tắc đặc quyền tối thiểu | should | test+review | ☐ | |
| `CAP-AUTH#R001` – Quy định hành vi login, logout, token/session hết hạn và phục hồi | must | test+review | ☐ | |
| `CAP-AUTH#R002` – Áp dụng rate limit và thông báo lỗi chung để chống dò tìm credential | must | test+review | ☐ | |
| `CAP-AUTH#R003` – Kiểm thử credential không hợp lệ, tài khoản bị khóa, session hết hạn và request đồng thời | should | test | ☐ | |
| `CAP-AUTH#R004` – Tách điều hướng phía client khỏi quyết định xác thực có thẩm quyền ở server | should | test+review | ☐ | |
| `CAP-AUTH#R005` – Đăng ký và xác minh danh tính theo chính sách | must | test+review | ☐ | |
| `CAP-AUTH#R006` – Quản lý thiết bị, logout và revoke | should | test+review | ☐ | |
| `CAP-AUTH#R007` – Bảo vệ luồng khôi phục tài khoản | should | test+review | ☐ | |
| `CAP-AUTH#R008` – Ràng buộc kết quả test với AC | should | test | ☐ | |
| `CAP-CRUD#R001` – Xác định hành vi tìm kiếm, lọc, sắp xếp, phân trang và trạng thái rỗng | must | test_or_review | ☐ | |
| `CAP-CRUD#R002` – Phân quyền từng thao tác create/read/update/delete ở phía server | must | test+review | ☐ | |
| `CAP-CRUD#R003` – Xử lý cập nhật đồng thời, submit trùng và rollback thay đổi optimistic | should | test_or_review | ☐ | |
| `CAP-CRUD#R004` – Quy định feedback dễ tiếp cận cho validation và kết quả thao tác | should | test | ☐ | |
| `CAP-SEARCH#R001` – Xác định toán tử lọc, các field có thể tìm kiếm và thứ tự sắp xếp mặc định | must | test_or_review | ☐ | |
| `CAP-SEARCH#R002` – Lưu trạng thái filter có thể chia sẻ khi nền tảng cho phép | must | test_or_review | ☐ | |
| `CAP-SEARCH#R003` – Debounce input phía client và hủy các request đã lỗi thời | should | test_or_review | ☐ | |
| `CAP-SEARCH#R004` – Xử lý trường hợp không có kết quả, response chậm và tập dữ liệu phân trang | should | test_or_review | ☐ | |
