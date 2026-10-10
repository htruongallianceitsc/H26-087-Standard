# Checklist QC / Testing – Wave 6

Checklist tham khảo dựa trên layer/concerns/severity. **Chỉ áp dụng cho standards đã resolve theo project profile**, không được dùng toàn bộ catalog như một checklist bắt buộc.

Tổng rule có thể liên quan: **413**.

| Rule ID | Quy tắc | Đề xuất kiểm chứng |
|---|---|---|
| `STD-AI-DEV#R001` | Đọc requirement, các standard áp dụng và tài liệu tham chiếu thiết kế trước khi code | `review` |
| `STD-AI-DEV#R002` | Lập kế hoạch có xét đến phạm vi ảnh hưởng và ánh xạ thay đổi tới tiêu chí chấp nhận | `review` |
| `STD-ARCH#R001` | Ghi ADR cho quyết định có tác động xuyên module | `review` |
| `STD-ARCH#R002` | Kiểm soát chiều phụ thuộc giữa các tầng | `review` |
| `STD-ARCH#R003` | Đánh giá khả năng đảo ngược quyết định | `review` |
| `STD-BIZ#R001` | Gán mã định danh rõ ràng và owner cho từng quy tắc nghiệp vụ | `review` |
| `STD-BIZ#R002` | Tài liệu hóa trigger, điều kiện, kết quả, ngoại lệ và thứ tự ưu tiên | `review` |
| `STD-CI#R001` | Sử dụng lockfile và build có thể tái lập trong CI | `test_or_review` |
| `STD-CI#R002` | Tách biệt môi trường và inject secret tại runtime hoặc qua build setting an toàn | `test+review` |
| `STD-CI#R003` | Promote artifact đã được kiểm thử và duy trì tài liệu quy trình release/rollback | `test` |
| `STD-CODE-REVIEW#R001` | PR có phạm vi nhỏ và mô tả tác động | `test_or_review` |
| `STD-CODE-REVIEW#R002` | Review độc lập cho thay đổi nhạy cảm | `test+review` |
| `STD-CODE-REVIEW#R003` | CI bắt buộc xanh trước khi merge | `test+review` |
| `STD-COMPLIANCE#R001` | Lập ma trận nghĩa vụ theo sản phẩm và thị trường | `review` |
| `STD-COMPLIANCE#R002` | Thu thập bằng chứng có nguồn gốc và hạn lưu | `review` |
| `STD-COMPLIANCE#R003` | Đánh giá thay đổi trước khi phát hành | `review` |
| `STD-DOC#R001` | Đảm bảo yêu cầu, screen, API và data contract có thể truy vết bằng tham chiếu ổn định | `review` |
| `STD-DOC#R002` | Ghi nhận quyết định đã được chấp thuận, lý do thay đổi và các artifact bị ảnh hưởng | `review` |
| `STD-FEAT#R001` | Nêu rõ mục đích feature, actor, hành vi trong phạm vi và ngoài phạm vi | `review` |
| `STD-FEAT#R002` | Liên kết từng feature với requirement nguồn thay vì tự tạo thêm requirement | `review` |
| `STD-FEAT#R004` | Xác định điều kiện hoàn thành có thể kiểm thử trước khi triển khai | `test` |
| `STD-GIT#R001` | Giữ thay đổi nhỏ gọn, có tham chiếu issue và commit mô tả rõ ràng | `test+review` |
| `STD-GIT#R002` | Yêu cầu review và pass các quality check trước khi tích hợp | `test_or_review` |
| `STD-MONOREPO#R001` | Khai báo ranh giới package và dependency | `review` |
| `STD-MONOREPO#R002` | Chạy kiểm tra theo phạm vi ảnh hưởng | `review` |
| `STD-MONOREPO#R003` | Khóa phiên bản công cụ và dependency | `review` |
| `STD-NAME#R001` | Chọn một quy ước đặt tên cho từng ngôn ngữ lập trình và từng loại artifact | `review` |
| `STD-NAME#R002` | Sử dụng semantic ID ổn định cho feature, requirement, rule và test | `test` |
| `STD-REQ#R001` | Ghi nhận yêu cầu thô kèm nguồn, owner và các câu hỏi chưa được giải quyết trước khi phân loại | `review` |
| `STD-REQ#R002` | Tách functional requirement có thể kiểm thử khỏi giả định và ràng buộc phi chức năng | `test` |
| `STD-REQ#R004` | Liên kết requirement đã được duyệt với feature và bằng chứng kiểm thử | `test` |
| `STD-VERSIONING#R001` | Dùng thay đổi tương thích cho API và contract | `test_or_review` |
| `STD-VERSIONING#R002` | Áp dụng version sản phẩm theo chính sách rõ ràng | `test_or_review` |
| `STD-VERSIONING#R003` | Thiết lập thời hạn hỗ trợ và deprecation | `test_or_review` |
| `STD-VERSIONING#R004` | Kiểm thử backward và forward compatibility | `test` |
| `STD-ANALYTICS#R001` | Thiết kế event schema và định nghĩa metric | `test_or_review` |
| `STD-ANALYTICS#R002` | Không gửi token hoặc PII không cần thiết | `test+review` |
| `STD-ANALYTICS#R003` | Tôn trọng consent và cấu hình khu vực | `review` |
| `STD-ANALYTICS#R005` | Kiểm thử chất lượng dữ liệu và funnel | `test` |
| `STD-DEP#R001` | Khóa và kiểm soát nguồn package | `review` |
| `STD-DEP#R002` | Quét lỗ hổng theo mức rủi ro | `review` |
| `STD-DEP#R003` | Tồn kho giấy phép và thành phần | `test_or_review` |
| `STD-ENV#R001` | Phân tách môi trường và quyền truy cập | `test+review` |
| `STD-ENV#R002` | Đưa secret vào kho bí mật được quản lý | `review` |
| `STD-ENV#R003` | Validate cấu hình khi khởi động | `review` |
| `STD-ERR#R001` | Phân biệt lỗi validation, authentication, authorization, network và lỗi ngoài dự kiến | `review` |
| `STD-ERR#R002` | Sử dụng error/result có kiểu dữ liệu và message an toàn cho người dùng, không làm lộ chi tiết nhạy cảm | `test_or_review` |
| `STD-FLAG#R001` | Định nghĩa owner, phạm vi và thời hạn flag | `review` |
| `STD-FLAG#R002` | Thiết lập rollout ổn định theo cohort | `test_or_review` |
| `STD-FLAG#R003` | Có kill switch và fallback kiểm chứng được | `review` |
| `STD-FLAG#R005` | Dọn dead flag và test tổ hợp quan trọng | `test` |
| `STD-I18N#R001` | Không hardcode chuỗi hiển thị trong logic | `review` |
| `STD-I18N#R002` | Định dạng ngày số và tiền theo locale | `test_or_review` |
| `STD-I18N#R003` | Hỗ trợ plural và độ dài nội dung | `review` |
| `STD-LOG#R001` | Sử dụng structured log với timestamp, severity, operation và correlation ID | `review` |
| `STD-LOG#R002` | Không log mật khẩu, access token hoặc payload nhạy cảm | `review` |
| `STD-PERF#R001` | Xác định performance budget theo user journey | `review` |
| `STD-PERF#R002` | Đo baseline và regression tự động | `test_or_review` |
| `STD-PERF#R003` | Giới hạn tải dữ liệu và số lần gọi | `test_or_review` |
| `STD-PRIV#R001` | Lập bản đồ PII và mục đích xử lý | `test+review` |
| `STD-PRIV#R004` | Kiểm soát truy cập PII theo mục đích | `test+review` |
| `STD-PRIV#R005` | Ẩn PII trong log và môi trường thử nghiệm | `test+review` |
| `STD-RES#R001` | Timeout và retry có ngân sách | `review` |
| `STD-RES#R002` | Thiết kế circuit breaker và bulkhead | `review` |
| `STD-RES#R003` | Xử lý lỗi suy giảm an toàn | `review` |
| `STD-RES#R004` | Kiểm thử failure injection và phục hồi | `test` |
| `STD-SEC#R001` | Thực thi authentication và authorization tại ranh giới server đáng tin cậy | `test+review` |
| `STD-SEC#R002` | Bảo vệ credential và secret bằng hệ thống quản lý secret chuyên dụng | `review` |
| `STD-SEC#R005` | Mặc định từ chối và phân quyền tối thiểu | `review` |
| `STD-SEC#R008` | Kiểm thử abuse-case theo ranh giới tin cậy | `test` |
| `STD-API-HTTP#R001` | Dùng mã 2xx đúng theo ý nghĩa thao tác | `test_or_review` |
| `STD-API-HTTP#R002` | Phân biệt xác thực và phân quyền | `test+review` |
| `STD-API-HTTP#R003` | Chuẩn hóa 400, 404, 405, 409 và 422 | `test_or_review` |
| `STD-API-HTTP#R004` | Áp dụng chính xác 429 và nhóm 5xx | `test+review` |
| `STD-API-HTTP#R005` | Phản hồi lỗi có cấu trúc ổn định | `test_or_review` |
| `STD-API-HTTP#R006` | Phân biệt lỗi cần hiển thị và lỗi nội bộ | `test_or_review` |
| `STD-API-HTTP#R007` | Retry có giới hạn và bảo vệ thao tác không idempotent | `test_or_review` |
| `STD-API-HTTP#R008` | Định nghĩa contract và test theo method | `test` |
| `STD-API-HTTP#R009` | Gắn correlation ID và quan sát lỗi an toàn | `test+review` |
| `STD-API-REST#R001` | Định danh resource và phương thức HTTP nhất quán | `test_or_review` |
| `STD-API-REST#R002` | Response và status nhất quán với STD-API-HTTP | `test_or_review` |
| `STD-API-REST#R003` | Giới hạn phân trang lọc và sort | `test_or_review` |
| `STD-API-REST#R005` | Công bố OpenAPI và contract test | `test` |
| `STD-API-RT#R001` | Bảo vệ handshake và từng subscription | `test_or_review` |
| `STD-API-RT#R002` | Định nghĩa thứ tự, cursor và replay | `test_or_review` |
| `STD-API-RT#R003` | Quản lý heartbeat và reconnect backoff | `test_or_review` |
| `STD-API#R001` | Sử dụng endpoint contract có version với cấu trúc request/response được tài liệu hóa | `test_or_review` |
| `STD-API#R002` | Áp dụng nhất quán xác thực, phân quyền, phân trang và validation | `test+review` |
| `STD-CACHE#R001` | Khai báo owner key scope và TTL | `test_or_review` |
| `STD-CACHE#R002` | Định nghĩa invalidation khi write | `test_or_review` |
| `STD-CACHE#R003` | Chống cache stampede và quá tải | `test_or_review` |
| `STD-DATA-MIG#R001` | Áp dụng expand-migrate-contract không làm gián đoạn | `test_or_review` |
| `STD-DATA-MIG#R004` | Mọi thay đổi nguy hiểm có kế hoạch rollback/forward-fix | `test_or_review` |
| `STD-DATA-MIG#R005` | Kiểm soát lock và giao dịch DDL | `test_or_review` |
| `STD-DATA-TX#R001` | Định ranh giới transaction theo invariant | `test_or_review` |
| `STD-DATA-TX#R002` | Kiểm soát update đồng thời và lost update | `test_or_review` |
| `STD-DATA-TX#R003` | Giảm deadlock và giao dịch kéo dài | `test_or_review` |
| `STD-DATA#R001` | Định nghĩa khóa và ràng buộc invariant trong DB | `test_or_review` |
| `STD-DATA#R002` | Thiết kế schema theo truy vấn thực tế | `test_or_review` |
| `STD-DATA#R003` | Quản lý audit và vòng đời bản ghi | `test+review` |
| `STD-DEEP-LINK#R001` | Dùng HTTPS link làm địa chỉ chia sẻ chuẩn | `test+review` |
| `STD-DEEP-LINK#R002` | Cấu hình iOS Universal Links đúng xác thực domain | `test_or_review` |
| `STD-DEEP-LINK#R003` | Cấu hình Android App Links bằng Digital Asset Links | `test_or_review` |
| `STD-DEEP-LINK#R004` | Đảm bảo fallback khi chưa cài app và mở web an toàn | `test_or_review` |
| `STD-DEEP-LINK#R005` | Điều hướng đúng theo trạng thái đăng nhập và vòng đời | `test_or_review` |
| `STD-DEEP-LINK#R006` | Chống open redirect, giả mạo và lộ dữ liệu | `test+review` |
| `STD-DEEP-LINK#R007` | Xác định rõ giới hạn deferred deep linking | `test+review` |
| `STD-DEEP-LINK#R008` | Chuẩn hóa attribution, query và canonical URL | `test_or_review` |
| `STD-DEEP-LINK#R009` | Kiểm thử toàn bộ ma trận thiết bị và kênh mở | `test` |
| `STD-DEEP-LINK#R010` | Thiết lập giám sát link và phương án khôi phục | `test+review` |
| `STD-INTEGRATION#R001` | Hợp đồng adapter và mapping rõ ràng | `test_or_review` |
| `STD-INTEGRATION#R002` | Bảo vệ credential và dữ liệu truyền đi | `test+review` |
| `STD-INTEGRATION#R003` | Retry chỉ cho lỗi tạm thời và idempotent | `test_or_review` |
| `STD-INTEGRATION#R005` | Đối soát và test contract nâng cấp | `test` |
| `STD-WEBHOOK#R001` | Xác minh chữ ký và chống replay | `test+review` |
| `STD-WEBHOOK#R002` | Tiếp nhận nhanh và xử lý bất đồng bộ | `test_or_review` |
| `STD-WEBHOOK#R003` | Deduplicate và bảo toàn thứ tự nghiệp vụ | `test_or_review` |
| `STD-A11Y#R001` | Đáp ứng WCAG 2.2 AA theo phạm vi đã chọn | `test` |
| `STD-A11Y#R004` | Thông báo lỗi và trạng thái dễ tiếp cận | `test` |
| `STD-A11Y#R005` | Đảm bảo tương phản và trạng thái focus | `test` |
| `STD-A11Y#R008` | Kiểm thử với assistive technology và người dùng | `test` |
| `STD-DESIGN#R001` | Handoff thiết kế có trạng thái tương tác | `test_or_review` |
| `STD-DESIGN#R002` | Đối chiếu bản build với thiết kế | `test_or_review` |
| `STD-DS#R001` | Sử dụng design token tập trung | `test+review` |
| `STD-DS#R002` | Định nghĩa component API nhất quán | `test_or_review` |
| `STD-DS#R003` | Kiểm thử component trên các state | `test` |
| `STD-FEEDBACK#R001` | Thông báo tương ứng tác động thao tác | `test_or_review` |
| `STD-FEEDBACK#R002` | Thông báo không lộ dữ liệu kỹ thuật | `review` |
| `STD-FORM#R001` | Xác thực đúng lớp và thời điểm | `test_or_review` |
| `STD-FORM#R002` | Giữ dữ liệu khi gửi lỗi | `test_or_review` |
| `STD-UI-STATE#R001` | Phân biệt đầy đủ các trạng thái dữ liệu | `test_or_review` |
| `STD-UI-STATE#R002` | Chặn response cũ ghi đè response mới | `test_or_review` |
| `STD-UX#R001` | Luồng chính có điểm hoàn thành rõ | `test_or_review` |
| `STD-UX#R002` | Hạn chế bất ngờ và hành vi phá hủy | `test_or_review` |
| `STD-WEB-ARCH#R001` | Tách route/page, feature, shared component và infrastructure adapter | `test_or_review` |
| `STD-WEB-ARCH#R002` | Không đặt quy tắc nghiệp vụ trong logic rendering và browser event handler | `test_or_review` |
| `STD-WEB-AUTH#R001` | Ưu tiên cookie HttpOnly an toàn khi kiến trúc session hỗ trợ | `test+review` |
| `STD-WEB-AUTH#R002` | Bảo vệ các endpoint thay đổi trạng thái dùng xác thực bằng cookie khỏi CSRF | `test+review` |
| `STD-WEB-AUTH#R005` | Không leak trạng thái phiên qua URL | `test+review` |
| `STD-WEB-AUTH#R008` | Kiểm thử session đa tab và cạnh tranh | `test` |
| `STD-WEB-FORM#R001` | Giữ validation phía client đồng bộ với server contract nhưng không tin cậy kiểm tra từ client | `test_or_review` |
| `STD-WEB-FORM#R002` | Hiển thị lỗi theo field, lỗi server và lỗi cấp form theo cách hỗ trợ accessibility | `test` |
| `STD-WEB-PERF#R001` | Đặt budget có thể đo lường cho bundle size, LCP, INP và error rate | `test_or_review` |
| `STD-WEB-PERF#R002` | Phân trang hoặc virtualize danh sách dài và tránh API payload không giới hạn | `test_or_review` |
| `STD-WEB-PWA#R001` | Chỉ sử dụng service worker cho các kịch bản cache/offline được xác định rõ | `test_or_review` |
| `STD-WEB-PWA#R002` | Đánh version cho cache entry và tránh cache response riêng tư một cách tùy tiện | `test+review` |
| `STD-WEB-PWA#R004` | Kiểm thử update, asset cũ và thay đổi session xuyên suốt vòng đời PWA | `test` |
| `STD-WEB-RESP#R001` | Sử dụng responsive breakpoint dựa trên nội dung layout thay vì chỉ dựa vào loại thiết bị | `test_or_review` |
| `STD-WEB-RESP#R002` | Đảm bảo điều hướng bằng bàn phím, hiển thị focus và semantic labeling | `test` |
| `STD-WEB-RESP#R004` | Kiểm thử layout chính trên viewport hẹp và rộng | `test` |
| `STD-WEB-ROUTE#R001` | Xác định route chuẩn, parameter và hành vi khi route không tồn tại | `test_or_review` |
| `STD-WEB-ROUTE#R002` | Giữ trạng thái filter/query có thể điều hướng trong URL khi phù hợp để chia sẻ | `test_or_review` |
| `STD-WEB-SEC#R001` | Thiết lập CSP hạn chế script | `test+review` |
| `STD-WEB-SEC#R004` | Bảo vệ cookie và token trình duyệt | `test+review` |
| `STD-WEB-SEC#R005` | Cấu hình CORS và nhúng trang | `test+review` |
| `STD-WEB-SEC#R008` | Kiểm thử bảo mật browser | `test` |
| `STD-WEB-SEO#R001` | Chọn CSR, SSR hoặc static rendering dựa trên nhu cầu indexing và nội dung | `test_or_review` |
| `STD-WEB-SEO#R002` | Cung cấp canonical URL, metadata và nội dung có thể crawl cho trang công khai | `test_or_review` |
| `STD-WEB-SEO#R004` | Kiểm thử nội dung render ở production và redirect theo ràng buộc crawler thực tế | `test` |
| `STD-WEB-STORE#R001` | Phân loại dữ liệu trước khi sử dụng cookie, localStorage, sessionStorage hoặc IndexedDB | `test+review` |
| `STD-WEB-STORE#R002` | Tránh lưu bearer secret trong web storage khi có phương án an toàn hơn | `test+review` |
| `STD-MOB-ARCH#R001` | Đặt tích hợp nền tảng phía sau interface/adapter | `test_or_review` |
| `STD-MOB-ARCH#R002` | Tách trách nhiệm presentation, application state và domain/data | `test_or_review` |
| `STD-MOB-DEVICE#R001` | Chỉ yêu cầu runtime permission tối thiểu cần thiết và giải thích mục đích sử dụng | `test+review` |
| `STD-MOB-DEVICE#R002` | Xử lý các trạng thái quyền bị từ chối, bị giới hạn và bị từ chối vĩnh viễn | `test+review` |
| `STD-MOB-LIFE#R001` | Mô hình hóa foreground, background, resume và process recreation thành các trường hợp riêng biệt | `test_or_review` |
| `STD-MOB-LIFE#R002` | Reconnect socket và refresh state đã stale bằng logic có giới hạn và idempotent | `test_or_review` |
| `STD-MOB-LIFE#R004` | Kiểm thử việc app bị gián đoạn trong quá trình login, upload, notification và realtime session | `test` |
| `STD-MOB-NAV#R001` | Xác định route argument có kiểu dữ liệu và guard cho xác thực/điều hướng | `test_or_review` |
| `STD-MOB-NAV#R002` | Hỗ trợ initial link, link khi app resume và destination không hợp lệ/hết hạn | `test_or_review` |
| `STD-MOB-OFF#R001` | Xác định rõ thao tác có thể đọc và ghi khi offline | `test_or_review` |
| `STD-MOB-OFF#R002` | Sử dụng retry có giới hạn kèm backoff và chỉ retry operation an toàn về idempotency | `test_or_review` |
| `STD-MOB-OFF#R004` | Kiểm thử kết nối chập chờn và submit trùng | `test` |
| `STD-MOB-PERF#R001` | Tránh các request khởi động chạy đồng thời không cần thiết và công việc nặng trên main thread | `test_or_review` |
| `STD-MOB-PERF#R002` | Đo thời gian khởi động, frame timing, mức sử dụng mạng và bộ nhớ trên thiết bị thật | `test_or_review` |
| `STD-MOB-PUSH#R001` | Xử lý riêng message ở trạng thái foreground, background và terminated | `test_or_review` |
| `STD-MOB-PUSH#R002` | Yêu cầu quyền thông báo tại thời điểm phù hợp với ngữ cảnh và xử lý được trường hợp người dùng từ chối | `test+review` |
| `STD-MOB-RELEASE#R001` | Lưu signing key và credential trong vùng lưu trữ được bảo vệ | `test+review` |
| `STD-MOB-RELEASE#R002` | Tách application ID, môi trường và build flavor khi cần | `test_or_review` |
| `STD-MOB-RELEASE#R004` | Kiểm thử release build trên thiết bị iOS/Android thật | `test` |
| `STD-MOB-SEC#R001` | Lưu token nhạy cảm vào kho bảo mật của OS | `test+review` |
| `STD-MOB-SEC#R004` | Kiểm tra deep link và app link | `test+review` |
| `STD-MOB-SEC#R005` | Bảo vệ dữ liệu nhạy cảm khi background | `test+review` |
| `STD-MOB-SEC#R008` | Kiểm thử threat mobile thực tế | `test` |
| `STD-MOB-STORE#R001` | Lưu secret trong secure storage do OS bảo vệ thay vì preference thông thường | `test+review` |
| `STD-MOB-STORE#R002` | Đặt chính sách lưu giữ, cleanup khi logout và cô lập khi chuyển tài khoản | `test_or_review` |
| `STD-MOB-UI#R001` | Tuân thủ safe area, text scaling và system navigation inset | `test` |
| `STD-MOB-UI#R002` | Giữ input đang focus luôn nhìn thấy khi bàn phím hiển thị | `test` |
| `STD-BE-ARCH#R001` | Tách giao thức, nghiệp vụ và persistence | `test_or_review` |
| `STD-BE-ARCH#R002` | Phụ thuộc đi về abstraction có chủ đích | `test_or_review` |
| `STD-BE-ARCH#R004` | Hợp đồng module rõ và có test | `test` |
| `STD-BE-AUTH#R001` | Xác thực access token/session theo issuer và audience | `test+review` |
| `STD-BE-AUTH#R004` | Giới hạn đăng nhập và tránh enumeration | `test+review` |
| `STD-BE-AUTH#R005` | Quản lý refresh/session và thu hồi | `test+review` |
| `STD-BE-AUTH#R008` | Ma trận kiểm thử auth/permission | `test` |
| `STD-BE-CONCUR#R001` | Thiết kế idempotency cho lệnh có side effect | `test_or_review` |
| `STD-BE-CONCUR#R004` | Bảo đảm không xử lý trùng consumer | `test_or_review` |
| `STD-BE-CONCUR#R005` | Outbox cho giao dịch DB và event | `test_or_review` |
| `STD-BE-CONCUR#R008` | Stress-test race condition theo invariant | `test` |
| `STD-BE-FILE#R001` | Giới hạn và xác thực tệp phía server | `test_or_review` |
| `STD-BE-FILE#R002` | Tên tệp và đường dẫn không do client điều khiển | `test_or_review` |
| `STD-BE-HEALTH#R001` | Liveness không kiểm tra phụ thuộc xa | `test_or_review` |
| `STD-BE-HEALTH#R002` | Readiness kiểm tra khả năng nhận traffic | `test_or_review` |
| `STD-BE-HEALTH#R004` | Test hoạt động khi dependency gián đoạn | `test` |
| `STD-BE-JOB#R001` | Tác vụ có cơ chế chống chạy trùng | `test_or_review` |
| `STD-BE-JOB#R002` | Thiết lập retry có giới hạn | `test_or_review` |
| `STD-BE-PERF#R001` | Đặt ngân sách độ trễ theo endpoint | `test_or_review` |
| `STD-BE-PERF#R002` | Tránh N+1 và payload dư thừa | `test_or_review` |
| `STD-BE-QUEUE#R001` | Consumer xử lý at-least-once an toàn | `test_or_review` |
| `STD-BE-QUEUE#R002` | Retry và dead-letter phân loại lỗi | `test_or_review` |
| `STD-BE-SEC#R001` | Áp dụng middleware bảo mật thống nhất | `test+review` |
| `STD-BE-SEC#R004` | An toàn với truy vấn và dữ liệu | `test+review` |
| `STD-BE-SEC#R005` | Bảo vệ outbound request và SSRF | `test+review` |
| `STD-BE-SEC#R008` | Kiểm thử endpoint khi không có quyền | `test` |
| `STD-BE-TX#R001` | Transaction bao trọn invariant nội bộ | `test_or_review` |
| `STD-BE-TX#R002` | Không giữ transaction qua network I/O | `test_or_review` |
| `STD-BE-VALID#R001` | Validate server dựa trên contract | `test_or_review` |
| `STD-BE-VALID#R002` | Phân biệt dữ liệu sai và lỗi nghiệp vụ | `test_or_review` |
| `STD-NEXT#R001` | Ưu tiên server component mặc định cho các trường hợp hiển thị dữ liệu phù hợp | `test_or_review` |
| `STD-NEXT#R002` | Chỉ khai báo ranh giới client ở nơi thực sự cần tương tác trình duyệt | `test_or_review` |
| `STD-REACT-TEST#R001` | Kiểm thử kết quả người dùng có thể quan sát thay vì chi tiết triển khai nội bộ | `test` |
| `STD-REACT-TEST#R002` | Mock ranh giới network và bao phủ các trạng thái loading/error/empty | `test_or_review` |
| `STD-REACT-TEST#R004` | Kiểm thử hành vi điều hướng và mutation cho các luồng quan trọng | `test` |
| `STD-REACT#R001` | Giữ component thuần và đặt side effect trong hook phù hợp với lifecycle | `test_or_review` |
| `STD-REACT#R002` | Tách các hành vi nghiệp vụ lặp lại thành feature hook/service | `test_or_review` |
| `STD-REACT#R004` | Giữ ranh giới component phù hợp với trách nhiệm và khả năng kiểm thử | `test` |
| `STD-RQ#R001` | Sử dụng query key bao gồm mọi parameter có ý nghĩa | `test_or_review` |
| `STD-RQ#R002` | Invalidate hoặc cập nhật query sau mutation với ownership rõ ràng | `test_or_review` |
| `STD-TS#R001` | Bật strict mode và tránh ép kiểu `any` khi chưa được review | `test_or_review` |
| `STD-TS#R002` | Tách API DTO khỏi domain model và view model | `test_or_review` |
| `STD-RN-NAV#R001` | Chọn một hệ thống routing cho project và định nghĩa route parameter có kiểu dữ liệu rõ ràng | `test_or_review` |
| `STD-RN-NAV#R002` | Xử lý nhất quán back navigation, nested stack và chuyển trạng thái xác thực | `test_or_review` |
| `STD-RN-STATE#R001` | Chọn và tài liệu hóa một chiến lược quản lý client state thống nhất | `test_or_review` |
| `STD-RN-STATE#R002` | Tách biệt remote query state khỏi local UI state | `test_or_review` |
| `STD-RN-STATE#R004` | Kiểm thử transition sau background, resume và chuyển tài khoản | `test` |
| `STD-RN-STORE#R001` | Phân loại dữ liệu trước khi lưu thiết bị | `test+review` |
| `STD-RN-STORE#R002` | Tách cache theo tài khoản và xóa khi logout | `test+review` |
| `STD-RN-STORE#R003` | Migration cấu trúc local storage có kiểm thử | `test` |
| `STD-RN-TEST#R001` | Kiểm thử màn hình chính trong điều kiện loading, error và offline | `test` |
| `STD-RN-TEST#R002` | Kiểm thử navigation và deep link destination trên thiết bị | `test` |
| `STD-RN-TEST#R003` | Mock native adapter trong unit test và xác minh tích hợp thực tế riêng biệt | `test` |
| `STD-RN-TEST#R004` | Kiểm thử khác biệt nền tảng trong test matrix CI/device | `test` |
| `STD-RN#R001` | Bọc các lời gọi native module và xử lý lỗi permission hoặc OS | `test+review` |
| `STD-RN#R002` | Không chặn JS thread bằng các thao tác đồng bộ tốn tài nguyên | `test_or_review` |
| `STD-RN#R004` | Kiểm thử phần triển khai đặc thù nền tảng trên thiết bị thật được hỗ trợ | `test` |
| `STD-FL-BLOC#R001` | Sử dụng BLoC/Cubit cho feature state và các state transition rõ ràng | `test_or_review` |
| `STD-FL-BLOC#R002` | Widget chỉ render state và dispatch intention; không gọi Dio trực tiếp | `test_or_review` |
| `STD-FL-BLOC#R003` | Kiểm thử các trạng thái success, loading, empty, validation và failure | `test` |
| `STD-FL-DART#R001` | Bật analyzer lint nghiêm ngặt và format code nhất quán | `test_or_review` |
| `STD-FL-DART#R002` | Sử dụng model immutable và kiểu null-safe khi phù hợp | `test_or_review` |
| `STD-FL-ROUTE#R001` | Xác định named route và path/query parameter đã được validation | `test_or_review` |
| `STD-FL-ROUTE#R002` | Áp dụng redirect guard cho route được bảo vệ mà không tạo vòng lặp redirect | `test_or_review` |
| `STD-FL-ROUTE#R004` | Kiểm thử semantics của browser/back stack khi hỗ trợ Flutter web | `test` |
| `STD-FL-TEST#R001` | Kiểm thử transition của Cubit cho từng acceptance flow | `test` |
| `STD-FL-TEST#R002` | Sử dụng widget test cho layout, validation và accessibility | `test` |
| `STD-FL-TEST#R003` | Chạy end-to-end test cho auth, navigation và phục hồi offline | `test` |
| `STD-FL-WIDGET#R001` | Tập trung quản lý màu sắc, typography, spacing và theme token | `test+review` |
| `STD-FL-WIDGET#R002` | Tổ hợp các widget nhỏ thay vì sử dụng build method quá lớn | `test_or_review` |
| `STD-DOTNET-API#R001` | Đặt middleware theo thứ tự bảo mật chuẩn | `test+review` |
| `STD-DOTNET-API#R002` | Dùng DI lifetime tương thích scope | `test_or_review` |
| `STD-DOTNET-API#R003` | Validate input và map error thống nhất | `test_or_review` |
| `STD-DOTNET-EF#R001` | Đọc dữ liệu không tracking có chủ đích | `test_or_review` |
| `STD-DOTNET-EF#R002` | Chặn N+1 query và cartesian explosion | `test_or_review` |
| `STD-DOTNET-EF#R003` | Thực thi migration có kiểm soát | `test_or_review` |
| `STD-DOTNET-TEST#R001` | Phân tầng unit và integration test | `test` |
| `STD-DOTNET-TEST#R002` | Test auth và authorization negative case | `test` |
| `STD-DOTNET-TEST#R003` | Cô lập test và dữ liệu deterministic | `test` |
| `STD-DOTNET-TEST#R004` | Kiểm thử failure/retry và concurrency | `test` |
| `STD-DOTNET-TEST#R005` | Đưa test vào quality gate phù hợp | `test` |
| `STD-DOTNET#R001` | Tách controller/endpoint khỏi application/domain rule và persistence | `test_or_review` |
| `STD-DOTNET#R002` | Sử dụng dependency injection với vòng đời resource theo scope | `test_or_review` |
| `STD-DOTNET#R004` | Bảo vệ endpoint bằng authorization theo policy và integration test | `test` |
| `STD-PG#R001` | Theo dõi thay đổi schema bằng migration có thể rollback hoặc an toàn theo hướng tiến tới | `test_or_review` |
| `STD-PG#R002` | Sử dụng constraint, foreign key và truy cập có index dựa trên query plan | `test_or_review` |
| `CAP-AUDIT#R001` | Ghi nhận actor, action, target, outcome và correlation ID | `test_or_review` |
| `CAP-AUDIT#R002` | Bảo vệ audit log khỏi việc chỉnh sửa bởi người dùng thông thường | `test_or_review` |
| `CAP-AUTH#R001` | Quy định hành vi login, logout, token/session hết hạn và phục hồi | `test+review` |
| `CAP-AUTH#R002` | Áp dụng rate limit và thông báo lỗi chung để chống dò tìm credential | `test+review` |
| `CAP-AUTH#R003` | Kiểm thử credential không hợp lệ, tài khoản bị khóa, session hết hạn và request đồng thời | `test` |
| `CAP-AUTH#R005` | Đăng ký và xác minh danh tính theo chính sách | `test+review` |
| `CAP-AUTH#R008` | Ràng buộc kết quả test với AC | `test` |
| `CAP-CHAT#R001` | Sử dụng message ID và deduplication để hiển thị trạng thái phân phối đáng tin cậy | `test_or_review` |
| `CAP-CHAT#R002` | Xử lý reconnect, join lại group và phân trang lịch sử mà không tạo dữ liệu trùng | `test_or_review` |
| `CAP-CRUD#R001` | Xác định hành vi tìm kiếm, lọc, sắp xếp, phân trang và trạng thái rỗng | `test_or_review` |
| `CAP-CRUD#R002` | Phân quyền từng thao tác create/read/update/delete ở phía server | `test+review` |
| `CAP-NOTIFY#R001` | Tách biệt message event, tùy chọn phân phối và cách trình bày | `test_or_review` |
| `CAP-NOTIFY#R002` | Tránh gửi dữ liệu riêng tư tới người nhận không được phép | `test+review` |
| `CAP-NOTIFY#R004` | Kiểm thử phân phối trùng, bộ đếm chưa đọc và trạng thái dismissal | `test` |
| `CAP-PAYMENT#R001` | Bảo vệ lệnh thanh toán khỏi xử lý trùng | `test_or_review` |
| `CAP-PAYMENT#R004` | Đối soát ledger và provider | `test_or_review` |
| `CAP-PAYMENT#R005` | Bảo vệ dữ liệu thẻ và thông tin nhạy cảm | `test+review` |
| `CAP-PERM#R001` | Định nghĩa vai trò và quyền hạn thành các thao tác rõ ràng trên resource | `test+review` |
| `CAP-PERM#R002` | Thực thi kiểm tra quyền trong API thay vì chỉ ẩn UI | `test+review` |
| `CAP-PERM#R003` | Kiểm thử các trường hợp biên về đặc quyền tối thiểu, thu hồi quyền và role kế thừa | `test` |
| `CAP-PERM#R005` | Ngăn tự nâng đặc quyền | `test+review` |
| `CAP-PERM#R008` | Kiểm thử ma trận vai trò và đối tượng | `test` |
| `CAP-PROFILE#R001` | Giới hạn update cho đúng subject được ủy quyền và các field được phép | `test+review` |
| `CAP-PROFILE#R002` | Validation các field thay đổi và giữ nguyên giá trị hiện có của field không đổi | `test_or_review` |
| `CAP-REPORT#R001` | Tài liệu hóa định nghĩa metric, bộ lọc và múi giờ báo cáo | `test_or_review` |
| `CAP-REPORT#R002` | Đảm bảo dữ liệu tổng hợp tuân thủ quyền của tenant và người dùng | `test_or_review` |
| `CAP-SEARCH#R001` | Xác định toán tử lọc, các field có thể tìm kiếm và thứ tự sắp xếp mặc định | `test_or_review` |
| `CAP-SEARCH#R002` | Lưu trạng thái filter có thể chia sẻ khi nền tảng cho phép | `test_or_review` |
| `CAP-SHARE#R001` | Validation quyền truy cập resource dùng chung và quy tắc hết hạn | `test+review` |
| `CAP-SHARE#R002` | Xử lý điều hướng khi app đã cài/chưa cài với fallback an toàn | `test_or_review` |
| `CAP-UPLOAD#R001` | Validation kích thước, loại và nội dung file trên server đáng tin cậy | `test_or_review` |
| `CAP-UPLOAD#R002` | Cung cấp progress, cancel, retry và cơ chế phục hồi khi lỗi | `test_or_review` |
| `STD-BACKUP#R001` | Định nghĩa RPO và phạm vi bản sao | `runtime` |
| `STD-BACKUP#R002` | Bảo vệ bản sao khỏi xóa/sửa trái phép | `runtime` |
| `STD-COST#R001` | Gắn tag chi phí theo nguồn sử dụng | `runtime` |
| `STD-COST#R002` | Ngân sách và cảnh báo xu hướng | `runtime` |
| `STD-DEPLOY#R001` | Triển khai artifact bất biến | `test+review` |
| `STD-DEPLOY#R002` | Có health gate và rollback | `test_or_review` |
| `STD-DR#R001` | Xác định RTO/RPO theo kịch bản mất dịch vụ | `runtime` |
| `STD-DR#R002` | Có runbook failover và failback | `runtime` |
| `STD-IAC#R001` | Hạ tầng được quản lý qua code review | `runtime` |
| `STD-IAC#R002` | State và secret được bảo vệ | `runtime` |
| `STD-INCIDENT#R001` | Phân loại mức độ và kích hoạt phản ứng | `runtime` |
| `STD-INCIDENT#R002` | Lưu timeline và vai trò rõ ràng | `runtime` |
| `STD-NET#R001` | Mặc định giới hạn truy cập mạng | `runtime` |
| `STD-NET#R002` | Mã hóa kết nối và quản lý chứng chỉ | `runtime` |
| `STD-RUNBOOK#R001` | Hướng dẫn thao tác có điều kiện kích hoạt | `runtime` |
| `STD-RUNBOOK#R002` | Lệnh có phạm vi và khả năng rollback | `runtime` |
| `STD-SLO#R001` | SLI đo từ trải nghiệm thực | `runtime` |
| `STD-SLO#R002` | SLO có cửa sổ và phép tính rõ | `runtime` |
| `STD-PERF-TEST#R001` | Viết workload theo hành vi sử dụng thực tế | `test` |
| `STD-PERF-TEST#R002` | Thiết lập acceptance threshold rõ | `test` |
| `STD-PERF-TEST#R003` | Theo dõi server và DB khi chạy | `test` |
| `STD-PERF-TEST#R004` | Kiểm thử giới hạn và hành vi hồi phục | `test` |
| `STD-PERF-TEST#R005` | Kiểm soát độ tin cậy phép đo | `test` |
| `STD-QC-A11Y#R001` | Kiểm tra điều hướng bằng bàn phím, focus và thông báo dành cho screen reader | `test` |
| `STD-QC-A11Y#R002` | Kiểm tra label/role, nội dung thay thế, contrast và vùng chạm | `test` |
| `STD-QC-A11Y#R003` | Kiểm tra lỗi form có thông báo rõ và liên kết với trường nhập | `test` |
| `STD-QC-A11Y#R004` | Kết hợp kiểm thử tự động với thao tác thực tế bằng công cụ trợ năng | `test` |
| `STD-QC-AC#R001` | Mỗi acceptance criterion phải quan sát được, kiểm thử được và có kết quả kỳ vọng rõ ràng | `test` |
| `STD-QC-AC#R002` | Làm rõ điều kiện trước, hành vi, đầu ra và quy tắc nghiệp vụ trước khi chốt testcase | `test` |
| `STD-QC-AC#R003` | Phân biệt acceptance criteria với chi tiết triển khai không bắt buộc | `test` |
| `STD-QC-AC#R004` | Ghi lại AC mơ hồ hoặc mâu thuẫn thành câu hỏi trước khi kiểm thử | `test` |
| `STD-QC-API#R001` | Kiểm tra HTTP status, body, headers và error code đúng hợp đồng, kể cả 400/401/403/404/409/422/429/5xx khi áp dụng | `test` |
| `STD-QC-API#R002` | Kiểm tra schema request/response, boundary, pagination, filtering và version | `test` |
| `STD-QC-API#R003` | Kiểm tra xác thực, phân quyền và không rò rỉ dữ liệu nhạy cảm | `test` |
| `STD-QC-API#R004` | Kiểm tra idempotency, timeout, retry và lỗi dịch vụ phụ thuộc theo hợp đồng | `test` |
| `STD-QC-AUTO#R001` | Ưu tiên tự động hóa luồng có tần suất chạy cao, ổn định và có giá trị regression | `test` |
| `STD-QC-AUTO#R002` | Test automation phải độc lập, chạy lặp lại được và không phụ thuộc dữ liệu production | `test` |
| `STD-QC-AUTO#R003` | Dùng selector ổn định, test fixture xác định và chờ theo trạng thái thay vì sleep cố định | `test` |
| `STD-QC-AUTO#R004` | Theo dõi flaky tests và không dùng retry để che lỗi sản phẩm | `test` |
| `STD-QC-BUG#R001` | Defect phải ghi expected/actual, bước tái hiện, môi trường, phiên bản và bằng chứng | `test` |
| `STD-QC-BUG#R002` | Phân biệt severity (mức tác động) với priority (thứ tự xử lý) | `test` |
| `STD-QC-BUG#R003` | Theo dõi trạng thái New, Triaged, In Progress, Ready for Retest, Closed hoặc Reopened theo workflow dự án | `test` |
| `STD-QC-BUG#R004` | Kiểm tra lại bug fix và thực hiện regression vùng liên quan trước khi đóng | `test` |
| `STD-QC-CASE#R001` | Testcase có ID ổn định, mục đích, điều kiện trước, dữ liệu và các bước tái hiện | `test` |
| `STD-QC-CASE#R002` | Mỗi bước kiểm tra có kết quả kỳ vọng đủ rõ để đánh giá pass/fail | `test` |
| `STD-QC-CASE#R003` | Tách happy path, nhánh nghiệp vụ, điều kiện biên và lỗi phù hợp rủi ro | `test` |
| `STD-QC-CASE#R004` | Tránh testcase phụ thuộc thứ tự thực thi; ưu tiên khả năng chạy lại độc lập | `test` |
| `STD-QC-DATA#R001` | Không dùng dữ liệu sản xuất có thông tin cá nhân chưa được phép và bảo vệ | `test` |
| `STD-QC-DATA#R002` | Tổ chức fixture theo kịch bản, có phiên bản, có quy tắc reset/cleanup | `test` |
| `STD-QC-DATA#R003` | Kiểm thử dữ liệu trống, sai định dạng, giới hạn, trùng lặp và trạng thái nghiệp vụ | `test` |
| `STD-QC-DATA#R004` | Bảo đảm dữ liệu test có thể tái tạo và không gây xung đột giữa các lần chạy | `test` |
| `STD-QC-E2E#R001` | Xác định luồng người dùng đầu-cuối theo outcome nghiệp vụ chứ không chỉ theo màn hình | `test` |
| `STD-QC-E2E#R002` | Kiểm tra trạng thái xuyên tầng UI, API và DB ở các điểm quan trọng | `test` |
| `STD-QC-E2E#R003` | Giữ E2E suite tinh gọn; tách kiểm tra chi tiết xuống API/unit/widget khi phù hợp | `test` |
| `STD-QC-E2E#R004` | Thiết kế cách cleanup và chống race condition để E2E chạy lặp lại được | `test` |
| `STD-QC-ENV#R001` | Công bố cấu hình môi trường, phiên bản dịch vụ và khác biệt so với production | `test` |
| `STD-QC-ENV#R002` | Phân biệt lỗi môi trường với lỗi phần mềm và ghi lại trạng thái outage | `test` |
| `STD-QC-ENV#R003` | Test account và secret lưu an toàn, phân quyền tối thiểu | `test` |
| `STD-QC-ENV#R004` | Có quy trình reset dữ liệu, seed và phục hồi dịch vụ phụ thuộc | `test` |
| `STD-QC-EXEC#R001` | Lưu build/version, môi trường, thiết bị, dữ liệu và thời gian mỗi test run | `test` |
| `STD-QC-EXEC#R002` | Chỉ đánh dấu Passed khi actual result phù hợp expected result và có đủ bằng chứng khi cần | `test` |
| `STD-QC-EXEC#R003` | Phân biệt Failed, Blocked, Not Run và Not Applicable; không gộp thành Passed | `test` |
| `STD-QC-EXEC#R004` | Gắn kết quả Fail với defect hoặc nguyên nhân đã được phân loại | `test` |
| `STD-QC-GATE#R001` | Định nghĩa trước điều kiện pass theo coverage, severity lỗi, regression và rủi ro | `test` |
| `STD-QC-GATE#R002` | Không cho qua gate nếu còn blocker/critical chưa xử lý hoặc chưa có quyết định waiver hợp lệ | `test` |
| `STD-QC-GATE#R003` | Ghi lại người phê duyệt, bằng chứng, ngoại lệ, thời hạn và trách nhiệm follow-up | `test` |
| `STD-QC-GATE#R004` | Đánh giá lại gate khi build, phạm vi hoặc mức rủi ro thay đổi | `test` |
| `STD-QC-MOB#R001` | Kiểm tra startup, background/resume, killed/relaunch và restore state | `test` |
| `STD-QC-MOB#R002` | Kiểm tra offline/reconnect, timeout, quyền thiết bị và push notification | `test` |
| `STD-QC-MOB#R003` | Kiểm tra Universal Links/App Links, app chưa cài, đã cài, fallback và referral nếu có | `test` |
| `STD-QC-MOB#R004` | Lập ma trận thiết bị/OS thực tế, kiểm tra keyboard, safe area và phiên bản cũ | `test` |
| `STD-QC-NEG#R001` | Liệt kê input không hợp lệ, giới hạn độ dài, định dạng và giá trị không cho phép | `test` |
| `STD-QC-NEG#R002` | Kiểm tra quyền truy cập sai, phiên hết hạn, lỗi mạng và timeout | `test` |
| `STD-QC-NEG#R003` | Đối chiếu kết quả lỗi với hợp đồng API và thông báo thân thiện cho người dùng | `test` |
| `STD-QC-NEG#R004` | Không chỉ xác minh lỗi được hiển thị mà còn xác minh dữ liệu không bị ghi sai | `test` |
| `STD-QC-PLAN#R001` | Xác định phạm vi kiểm thử theo requirement, feature, thay đổi và rủi ro | `test` |
| `STD-QC-PLAN#R002` | Ghi rõ loại kiểm thử, mức ưu tiên, người phụ trách và điều kiện bắt đầu/kết thúc | `test` |
| `STD-QC-PLAN#R003` | Ghi nhận trường hợp ngoài phạm vi và giả định đã được phê duyệt | `test` |
| `STD-QC-PLAN#R004` | Cập nhật kế hoạch khi phạm vi hoặc mức độ rủi ro thay đổi | `test` |
| `STD-QC-REG#R001` | Duy trì bộ regression cốt lõi cho luồng nghiệp vụ trọng yếu | `test` |
| `STD-QC-REG#R002` | Ưu tiên testcase theo ảnh hưởng trực tiếp, phụ thuộc và lịch sử lỗi | `test` |
| `STD-QC-REG#R003` | Gắn testcase hồi quy với bản sửa lỗi để tránh tái phát | `test` |
| `STD-QC-REG#R004` | Định kỳ loại bỏ testcase trùng lặp, lỗi thời hoặc không ổn định | `test` |
| `STD-QC-REPORT#R001` | Báo cáo số testcase Passed, Failed, Blocked, Not Run theo build và phạm vi | `test` |
| `STD-QC-REPORT#R002` | Báo cáo defect theo severity, tuổi lỗi, reopen và xu hướng giải quyết | `test` |
| `STD-QC-REPORT#R003` | Trình bày requirement/AC coverage và rủi ro chưa được kiểm thử | `test` |
| `STD-QC-REPORT#R004` | Không coi số testcase nhiều hoặc tỷ lệ pass cao là bằng chứng chất lượng duy nhất | `test` |
| `STD-QC-SEC#R001` | Kiểm tra xác thực, phân quyền theo vai trò, IDOR và session hết hạn | `test` |
| `STD-QC-SEC#R002` | Xác minh validate đầu vào, bảo vệ dữ liệu và không lộ secret trong log/error | `test` |
| `STD-QC-SEC#R003` | Kiểm tra cấu hình bảo mật và dependency có rủi ro theo phạm vi dự án | `test` |
| `STD-QC-SEC#R004` | Chỉ thử nghiệm xâm nhập trên môi trường và hệ thống được cho phép | `test` |
| `STD-QC-TRACE#R001` | Mỗi testcase liên kết tới requirement, AC hoặc rủi ro mà nó kiểm chứng | `test` |
| `STD-QC-TRACE#R002` | Ghi nhận trạng thái coverage theo AC, phân biệt chưa thiết kế và chưa thực thi | `test` |
| `STD-QC-TRACE#R003` | Theo dõi tác động thay đổi requirement tới testcase và bộ regression | `test` |
| `STD-QC-TRACE#R004` | Báo cáo khoảng trống coverage và ngoại lệ được phê duyệt | `test` |
| `STD-QC-UAT#R001` | Xây dựng kịch bản UAT từ business flow và AC đã được chốt | `test` |
| `STD-QC-UAT#R002` | Xác định người dùng nghiệp vụ chịu trách nhiệm nghiệm thu và tiêu chí hoàn thành | `test` |
| `STD-QC-UAT#R003` | Lưu kết quả UAT, lỗi, ngoại lệ và quyết định sign-off | `test` |
| `STD-QC-UAT#R004` | Không đồng nhất kết quả UAT với việc hoàn tất toàn bộ regression hay kiểm thử kỹ thuật | `test` |
| `STD-QC-UI#R001` | Đối chiếu UI với design và các trạng thái loading, empty, error, success | `test` |
| `STD-QC-UI#R002` | Kiểm tra validation field, toast/dialog, focus, navigation và keyboard | `test` |
| `STD-QC-UI#R003` | Kiểm tra responsive, nội dung dài, ngôn ngữ và tính nhất quán component | `test` |
| `STD-QC-UI#R004` | Không chỉ so ảnh; kiểm tra hành vi và phản hồi đúng acceptance criteria | `test` |
| `STD-TEST#R001` | Kiểm thử hành vi từ acceptance criteria, bao gồm luồng âm và trường hợp biên | `test` |
| `STD-TEST#R002` | Chạy lint, type check và test có tính xác định trong CI khi phù hợp | `test` |
| `STD-TEST#R003` | Xem quality gate thất bại là blocker trừ khi có phê duyệt được ghi nhận | `test` |
| `STD-TEST#R004` | Cô lập test fixture và tránh phụ thuộc vào dữ liệu production đang hoạt động | `test` |
