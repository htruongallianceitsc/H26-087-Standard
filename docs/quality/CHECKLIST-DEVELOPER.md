# Checklist Developer – Wave 6

Checklist tham khảo dựa trên layer/concerns/severity. **Chỉ áp dụng cho standards đã resolve theo project profile**, không được dùng toàn bộ catalog như một checklist bắt buộc.

Tổng rule có thể liên quan: **408**.

| Rule ID | Quy tắc | Đề xuất kiểm chứng |
|---|---|---|
| `STD-ANALYTICS#R001` | Thiết kế event schema và định nghĩa metric | `test_or_review` |
| `STD-ANALYTICS#R002` | Không gửi token hoặc PII không cần thiết | `test+review` |
| `STD-ANALYTICS#R005` | Kiểm thử chất lượng dữ liệu và funnel | `test` |
| `STD-ENV#R001` | Phân tách môi trường và quyền truy cập | `test+review` |
| `STD-ERR#R002` | Sử dụng error/result có kiểu dữ liệu và message an toàn cho người dùng, không làm lộ chi tiết nhạy cảm | `test_or_review` |
| `STD-ERR#R004` | Log ngữ cảnh chẩn đoán nhưng phải ngăn rò rỉ secret và dữ liệu cá nhân | `test+review` |
| `STD-I18N#R002` | Định dạng ngày số và tiền theo locale | `test_or_review` |
| `STD-PERF#R003` | Giới hạn tải dữ liệu và số lần gọi | `test_or_review` |
| `STD-PRIV#R001` | Lập bản đồ PII và mục đích xử lý | `test+review` |
| `STD-PRIV#R002` | Tối thiểu hóa dữ liệu thu thập và chia sẻ | `test+review` |
| `STD-PRIV#R004` | Kiểm soát truy cập PII theo mục đích | `test+review` |
| `STD-PRIV#R005` | Ẩn PII trong log và môi trường thử nghiệm | `test+review` |
| `STD-PRIV#R007` | Đánh giá bên thứ ba và chuyển dữ liệu | `test+review` |
| `STD-PRIV#R008` | Xử lý sự cố và yêu cầu chủ thể dữ liệu | `test+review` |
| `STD-RES#R004` | Kiểm thử failure injection và phục hồi | `test` |
| `STD-SEC#R001` | Thực thi authentication và authorization tại ranh giới server đáng tin cậy | `test+review` |
| `STD-SEC#R004` | Thực hiện threat model cho luồng nhạy cảm và review các phát hiện về dependency/security | `test+review` |
| `STD-SEC#R006` | Bảo vệ dữ liệu khi truyền và lưu | `test+review` |
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
| `STD-API-REST#R004` | Định nghĩa concurrency và idempotency cho mutation | `test_or_review` |
| `STD-API-REST#R005` | Công bố OpenAPI và contract test | `test` |
| `STD-API-RT#R001` | Bảo vệ handshake và từng subscription | `test_or_review` |
| `STD-API-RT#R002` | Định nghĩa thứ tự, cursor và replay | `test_or_review` |
| `STD-API-RT#R003` | Quản lý heartbeat và reconnect backoff | `test_or_review` |
| `STD-API-RT#R004` | Áp dụng backpressure và giới hạn payload | `test_or_review` |
| `STD-API-RT#R005` | Giữ nhất quán snapshot sau reconnect | `test_or_review` |
| `STD-API#R001` | Sử dụng endpoint contract có version với cấu trúc request/response được tài liệu hóa | `test_or_review` |
| `STD-API#R002` | Áp dụng nhất quán xác thực, phân quyền, phân trang và validation | `test+review` |
| `STD-API#R003` | Xác định mã lỗi chuẩn và correlation ID | `test_or_review` |
| `STD-API#R004` | Công bố OpenAPI và chạy kiểm tra contract đối với phần triển khai | `test_or_review` |
| `STD-CACHE#R001` | Khai báo owner key scope và TTL | `test_or_review` |
| `STD-CACHE#R002` | Định nghĩa invalidation khi write | `test_or_review` |
| `STD-CACHE#R003` | Chống cache stampede và quá tải | `test_or_review` |
| `STD-CACHE#R004` | Bảo vệ tính riêng tư và phân quyền | `test+review` |
| `STD-CACHE#R005` | Quan sát hit-rate và sự cố cache | `test_or_review` |
| `STD-DATA-MIG#R001` | Áp dụng expand-migrate-contract không làm gián đoạn | `test_or_review` |
| `STD-DATA-MIG#R002` | Migration có định danh và thứ tự bất biến | `test_or_review` |
| `STD-DATA-MIG#R003` | Backfill theo batch và có checkpoint | `test_or_review` |
| `STD-DATA-MIG#R004` | Mọi thay đổi nguy hiểm có kế hoạch rollback/forward-fix | `test_or_review` |
| `STD-DATA-MIG#R005` | Kiểm soát lock và giao dịch DDL | `test_or_review` |
| `STD-DATA-MIG#R006` | Đảm bảo tương thích API và code version cũ | `test_or_review` |
| `STD-DATA-MIG#R007` | Đối soát dữ liệu sau migration | `test_or_review` |
| `STD-DATA-MIG#R008` | Quan sát và cảnh báo trong rollout | `test_or_review` |
| `STD-DATA-TX#R001` | Định ranh giới transaction theo invariant | `test_or_review` |
| `STD-DATA-TX#R002` | Kiểm soát update đồng thời và lost update | `test_or_review` |
| `STD-DATA-TX#R003` | Giảm deadlock và giao dịch kéo dài | `test_or_review` |
| `STD-DATA-TX#R004` | Tách transaction nội bộ và distributed workflow | `test_or_review` |
| `STD-DATA-TX#R005` | Xử lý trạng thái không chắc chắn | `test_or_review` |
| `STD-DATA#R001` | Định nghĩa khóa và ràng buộc invariant trong DB | `test_or_review` |
| `STD-DATA#R002` | Thiết kế schema theo truy vấn thực tế | `test_or_review` |
| `STD-DATA#R003` | Quản lý audit và vòng đời bản ghi | `test+review` |
| `STD-DATA#R004` | Lưu tiền và thời gian không mất độ chính xác | `test_or_review` |
| `STD-DATA#R005` | Nâng schema tương thích đa phiên bản | `test_or_review` |
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
| `STD-INTEGRATION#R004` | Giới hạn tài nguyên và cô lập sự cố | `test_or_review` |
| `STD-INTEGRATION#R005` | Đối soát và test contract nâng cấp | `test` |
| `STD-WEBHOOK#R001` | Xác minh chữ ký và chống replay | `test+review` |
| `STD-WEBHOOK#R002` | Tiếp nhận nhanh và xử lý bất đồng bộ | `test_or_review` |
| `STD-WEBHOOK#R003` | Deduplicate và bảo toàn thứ tự nghiệp vụ | `test_or_review` |
| `STD-WEBHOOK#R004` | Phiên bản hóa hợp đồng event | `test_or_review` |
| `STD-WEBHOOK#R005` | Có khả năng replay và giám sát tồn đọng | `test+review` |
| `STD-A11Y#R001` | Đáp ứng WCAG 2.2 AA theo phạm vi đã chọn | `test` |
| `STD-A11Y#R002` | Điều hướng bàn phím đầy đủ | `test` |
| `STD-A11Y#R003` | Tên và vai trò được đọc bởi assistive technology | `test` |
| `STD-A11Y#R004` | Thông báo lỗi và trạng thái dễ tiếp cận | `test` |
| `STD-A11Y#R005` | Đảm bảo tương phản và trạng thái focus | `test` |
| `STD-A11Y#R008` | Kiểm thử với assistive technology và người dùng | `test` |
| `STD-DESIGN#R001` | Handoff thiết kế có trạng thái tương tác | `test_or_review` |
| `STD-DESIGN#R002` | Đối chiếu bản build với thiết kế | `test_or_review` |
| `STD-DESIGN#R003` | Thiết kế tương tác khả thi | `test` |
| `STD-DESIGN#R004` | Quản lý thay đổi phiên bản thiết kế | `test_or_review` |
| `STD-DS#R001` | Sử dụng design token tập trung | `test+review` |
| `STD-DS#R002` | Định nghĩa component API nhất quán | `test_or_review` |
| `STD-DS#R003` | Kiểm thử component trên các state | `test` |
| `STD-DS#R004` | Version và migration token/component | `test+review` |
| `STD-FEEDBACK#R001` | Thông báo tương ứng tác động thao tác | `test_or_review` |
| `STD-FEEDBACK#R003` | Ngăn spam thông báo lặp | `test_or_review` |
| `STD-FORM#R001` | Xác thực đúng lớp và thời điểm | `test_or_review` |
| `STD-FORM#R002` | Giữ dữ liệu khi gửi lỗi | `test_or_review` |
| `STD-FORM#R003` | Ngăn submit trùng và yêu cầu không cần thiết | `test_or_review` |
| `STD-FORM#R004` | Input truy cập được bằng bàn phím | `test` |
| `STD-UI-STATE#R001` | Phân biệt đầy đủ các trạng thái dữ liệu | `test_or_review` |
| `STD-UI-STATE#R002` | Chặn response cũ ghi đè response mới | `test_or_review` |
| `STD-UI-STATE#R003` | Trạng thái thao tác độc lập với tải trang | `test_or_review` |
| `STD-UI-STATE#R004` | Làm rõ optimistic update và rollback | `test_or_review` |
| `STD-UX#R001` | Luồng chính có điểm hoàn thành rõ | `test_or_review` |
| `STD-UX#R002` | Hạn chế bất ngờ và hành vi phá hủy | `test_or_review` |
| `STD-UX#R003` | Điều hướng giữ ngữ cảnh | `test_or_review` |
| `STD-UX#R004` | Nội dung hành động cụ thể | `test_or_review` |
| `STD-WEB-ARCH#R001` | Tách route/page, feature, shared component và infrastructure adapter | `test_or_review` |
| `STD-WEB-ARCH#R002` | Không đặt quy tắc nghiệp vụ trong logic rendering và browser event handler | `test_or_review` |
| `STD-WEB-ARCH#R003` | Xác định ranh giới tin cậy giữa browser/server và ownership của API contract | `test+review` |
| `STD-WEB-ARCH#R004` | Tránh dependency vòng giữa các feature và module utility dùng chung không có ranh giới rõ ràng | `test_or_review` |
| `STD-WEB-AUTH#R001` | Ưu tiên cookie HttpOnly an toàn khi kiến trúc session hỗ trợ | `test+review` |
| `STD-WEB-AUTH#R002` | Bảo vệ các endpoint thay đổi trạng thái dùng xác thực bằng cookie khỏi CSRF | `test+review` |
| `STD-WEB-AUTH#R003` | Xử lý hết hạn và refresh mà không làm lộ credential cho UI component | `test+review` |
| `STD-WEB-AUTH#R004` | Phân quyền mọi thao tác được bảo vệ ở phía server; route guard chỉ phục vụ UX | `test+review` |
| `STD-WEB-AUTH#R005` | Không leak trạng thái phiên qua URL | `test+review` |
| `STD-WEB-AUTH#R006` | Logout và đổi tài khoản làm sạch state | `test+review` |
| `STD-WEB-AUTH#R007` | Xử lý lỗi thân thiện, không lộ chi tiết | `test+review` |
| `STD-WEB-AUTH#R008` | Kiểm thử session đa tab và cạnh tranh | `test` |
| `STD-WEB-FORM#R001` | Giữ validation phía client đồng bộ với server contract nhưng không tin cậy kiểm tra từ client | `test_or_review` |
| `STD-WEB-FORM#R002` | Hiển thị lỗi theo field, lỗi server và lỗi cấp form theo cách hỗ trợ accessibility | `test` |
| `STD-WEB-FORM#R003` | Ngăn submit hai lần ngoài ý muốn và lưu draft an toàn khi phù hợp | `test_or_review` |
| `STD-WEB-FORM#R004` | Hỗ trợ luồng submit bằng bàn phím và screen reader | `test` |
| `STD-WEB-PERF#R001` | Đặt budget có thể đo lường cho bundle size, LCP, INP và error rate | `test_or_review` |
| `STD-WEB-PERF#R002` | Phân trang hoặc virtualize danh sách dài và tránh API payload không giới hạn | `test_or_review` |
| `STD-WEB-PERF#R003` | Profile rerender, event listener và bộ nhớ trước khi bổ sung tối ưu hóa | `test_or_review` |
| `STD-WEB-PERF#R004` | Trì hoãn công việc không quan trọng và cung cấp các trạng thái loading/empty/error | `test_or_review` |
| `STD-WEB-PWA#R001` | Chỉ sử dụng service worker cho các kịch bản cache/offline được xác định rõ | `test_or_review` |
| `STD-WEB-PWA#R002` | Đánh version cho cache entry và tránh cache response riêng tư một cách tùy tiện | `test+review` |
| `STD-WEB-PWA#R003` | Cung cấp fallback hợp lý khi push, install prompt hoặc offline API không được hỗ trợ | `test_or_review` |
| `STD-WEB-PWA#R004` | Kiểm thử update, asset cũ và thay đổi session xuyên suốt vòng đời PWA | `test` |
| `STD-WEB-RESP#R001` | Sử dụng responsive breakpoint dựa trên nội dung layout thay vì chỉ dựa vào loại thiết bị | `test_or_review` |
| `STD-WEB-RESP#R002` | Đảm bảo điều hướng bằng bàn phím, hiển thị focus và semantic labeling | `test` |
| `STD-WEB-RESP#R003` | Xác minh độ tương phản, thay đổi cỡ chữ và tương tác reduced-motion | `test_or_review` |
| `STD-WEB-RESP#R004` | Kiểm thử layout chính trên viewport hẹp và rộng | `test` |
| `STD-WEB-ROUTE#R001` | Xác định route chuẩn, parameter và hành vi khi route không tồn tại | `test_or_review` |
| `STD-WEB-ROUTE#R002` | Giữ trạng thái filter/query có thể điều hướng trong URL khi phù hợp để chia sẻ | `test_or_review` |
| `STD-WEB-ROUTE#R003` | Bảo vệ trang bị giới hạn bằng UI guard nhưng vẫn dựa vào authorization phía server | `test+review` |
| `STD-WEB-ROUTE#R004` | Xử lý reload sâu và điều hướng trực tiếp bằng quy tắc fallback của hosting | `test_or_review` |
| `STD-WEB-SEC#R001` | Thiết lập CSP hạn chế script | `test+review` |
| `STD-WEB-SEC#R002` | Chống XSS tại điểm render | `test+review` |
| `STD-WEB-SEC#R003` | Chống CSRF với cookie auth | `test+review` |
| `STD-WEB-SEC#R004` | Bảo vệ cookie và token trình duyệt | `test+review` |
| `STD-WEB-SEC#R005` | Cấu hình CORS và nhúng trang | `test+review` |
| `STD-WEB-SEC#R006` | Không lộ dữ liệu qua cache/URL | `test+review` |
| `STD-WEB-SEC#R007` | Bảo vệ dependency frontend | `test+review` |
| `STD-WEB-SEC#R008` | Kiểm thử bảo mật browser | `test` |
| `STD-WEB-SEO#R001` | Chọn CSR, SSR hoặc static rendering dựa trên nhu cầu indexing và nội dung | `test_or_review` |
| `STD-WEB-SEO#R002` | Cung cấp canonical URL, metadata và nội dung có thể crawl cho trang công khai | `test_or_review` |
| `STD-WEB-SEO#R003` | Loại trừ route riêng tư/cần xác thực khỏi search indexing | `test+review` |
| `STD-WEB-SEO#R004` | Kiểm thử nội dung render ở production và redirect theo ràng buộc crawler thực tế | `test` |
| `STD-WEB-STORE#R001` | Phân loại dữ liệu trước khi sử dụng cookie, localStorage, sessionStorage hoặc IndexedDB | `test+review` |
| `STD-WEB-STORE#R002` | Tránh lưu bearer secret trong web storage khi có phương án an toàn hơn | `test+review` |
| `STD-WEB-STORE#R003` | Áp dụng thời hạn hết hiệu lực và cơ chế vô hiệu hóa cho response từ server được cache | `test_or_review` |
| `STD-WEB-STORE#R004` | Dọn dẹp cache cũ và cô lập dữ liệu client theo từng tài khoản | `test_or_review` |
| `STD-MOB-ARCH#R001` | Đặt tích hợp nền tảng phía sau interface/adapter | `test_or_review` |
| `STD-MOB-ARCH#R002` | Tách trách nhiệm presentation, application state và domain/data | `test_or_review` |
| `STD-MOB-ARCH#R003` | Thiết kế hành vi suy giảm chức năng khi mất mạng hoặc tiến trình ứng dụng bị kết thúc | `test_or_review` |
| `STD-MOB-ARCH#R004` | Xác định rõ khác biệt capability giữa iOS và Android | `test+review` |
| `STD-MOB-DEVICE#R001` | Chỉ yêu cầu runtime permission tối thiểu cần thiết và giải thích mục đích sử dụng | `test+review` |
| `STD-MOB-DEVICE#R002` | Xử lý các trạng thái quyền bị từ chối, bị giới hạn và bị từ chối vĩnh viễn | `test+review` |
| `STD-MOB-DEVICE#R003` | Chặn các capability không được nền tảng hỗ trợ và cung cấp phương án thay thế | `test+review` |
| `STD-MOB-DEVICE#R004` | Giải phóng tài nguyên thiết bị khi cancel, chuyển background hoặc thoát | `test+review` |
| `STD-MOB-LIFE#R001` | Mô hình hóa foreground, background, resume và process recreation thành các trường hợp riêng biệt | `test_or_review` |
| `STD-MOB-LIFE#R002` | Reconnect socket và refresh state đã stale bằng logic có giới hạn và idempotent | `test_or_review` |
| `STD-MOB-LIFE#R003` | Dispose listener/controller và hủy các thao tác đã không còn cần thiết | `test_or_review` |
| `STD-MOB-LIFE#R004` | Kiểm thử việc app bị gián đoạn trong quá trình login, upload, notification và realtime session | `test` |
| `STD-MOB-NAV#R001` | Xác định route argument có kiểu dữ liệu và guard cho xác thực/điều hướng | `test_or_review` |
| `STD-MOB-NAV#R002` | Hỗ trợ initial link, link khi app resume và destination không hợp lệ/hết hạn | `test_or_review` |
| `STD-MOB-NAV#R003` | Xác minh Android App Links và iOS Universal Links bằng file association của domain | `test_or_review` |
| `STD-MOB-NAV#R004` | Ngăn điều hướng trùng do các callback notification/link cạnh tranh nhau | `test_or_review` |
| `STD-MOB-OFF#R001` | Xác định rõ thao tác có thể đọc và ghi khi offline | `test_or_review` |
| `STD-MOB-OFF#R002` | Sử dụng retry có giới hạn kèm backoff và chỉ retry operation an toàn về idempotency | `test_or_review` |
| `STD-MOB-OFF#R003` | Xác định quy tắc xử lý xung đột và đối soát các thao tác ghi đang chờ | `test_or_review` |
| `STD-MOB-OFF#R004` | Kiểm thử kết nối chập chờn và submit trùng | `test` |
| `STD-MOB-PERF#R001` | Tránh các request khởi động chạy đồng thời không cần thiết và công việc nặng trên main thread | `test_or_review` |
| `STD-MOB-PERF#R002` | Đo thời gian khởi động, frame timing, mức sử dụng mạng và bộ nhớ trên thiết bị thật | `test_or_review` |
| `STD-MOB-PERF#R003` | Giới hạn tần suất background polling, location và vòng lặp reconnect | `test_or_review` |
| `STD-MOB-PERF#R004` | Dispose image, stream và controller để ngăn rò rỉ tài nguyên | `test_or_review` |
| `STD-MOB-PUSH#R001` | Xử lý riêng message ở trạng thái foreground, background và terminated | `test_or_review` |
| `STD-MOB-PUSH#R002` | Yêu cầu quyền thông báo tại thời điểm phù hợp với ngữ cảnh và xử lý được trường hợp người dùng từ chối | `test+review` |
| `STD-MOB-PUSH#R003` | Khử trùng lặp action từ notification và xác thực route payload | `test_or_review` |
| `STD-MOB-PUSH#R004` | Tránh đưa nội dung nhạy cảm vào push payload không đáng tin cậy | `test+review` |
| `STD-MOB-RELEASE#R001` | Lưu signing key và credential trong vùng lưu trữ được bảo vệ | `test+review` |
| `STD-MOB-RELEASE#R002` | Tách application ID, môi trường và build flavor khi cần | `test_or_review` |
| `STD-MOB-RELEASE#R003` | Duy trì version/build number, khai báo quyền riêng tư và credential phục vụ review | `test+review` |
| `STD-MOB-RELEASE#R004` | Kiểm thử release build trên thiết bị iOS/Android thật | `test` |
| `STD-MOB-SEC#R001` | Lưu token nhạy cảm vào kho bảo mật của OS | `test+review` |
| `STD-MOB-SEC#R002` | Xác minh TLS và endpoint | `test+review` |
| `STD-MOB-SEC#R003` | Không hardcode bí mật máy chủ vào ứng dụng | `test+review` |
| `STD-MOB-SEC#R004` | Kiểm tra deep link và app link | `test+review` |
| `STD-MOB-SEC#R005` | Bảo vệ dữ liệu nhạy cảm khi background | `test+review` |
| `STD-MOB-SEC#R006` | Giới hạn dữ liệu lưu offline | `test+review` |
| `STD-MOB-SEC#R007` | Bảo vệ release và cấu hình debug | `test+review` |
| `STD-MOB-SEC#R008` | Kiểm thử threat mobile thực tế | `test` |
| `STD-MOB-STORE#R001` | Lưu secret trong secure storage do OS bảo vệ thay vì preference thông thường | `test+review` |
| `STD-MOB-STORE#R002` | Đặt chính sách lưu giữ, cleanup khi logout và cô lập khi chuyển tài khoản | `test_or_review` |
| `STD-MOB-STORE#R003` | Mã hóa dữ liệu offline nhạy cảm khi threat model yêu cầu | `test+review` |
| `STD-MOB-STORE#R004` | Hỗ trợ migration storage và phục hồi khi state bị hỏng | `test_or_review` |
| `STD-MOB-UI#R001` | Tuân thủ safe area, text scaling và system navigation inset | `test` |
| `STD-MOB-UI#R002` | Giữ input đang focus luôn nhìn thấy khi bàn phím hiển thị | `test` |
| `STD-MOB-UI#R003` | Cung cấp các trạng thái loading, empty, error và tương tác bị gián đoạn | `test` |
| `STD-MOB-UI#R004` | Xác minh portrait/landscape và các mật độ màn hình khác nhau khi được hỗ trợ | `test` |
| `STD-BE-ARCH#R001` | Tách giao thức, nghiệp vụ và persistence | `test_or_review` |
| `STD-BE-ARCH#R002` | Phụ thuộc đi về abstraction có chủ đích | `test_or_review` |
| `STD-BE-ARCH#R003` | Xác định ranh giới giao dịch theo use case | `test_or_review` |
| `STD-BE-ARCH#R004` | Hợp đồng module rõ và có test | `test` |
| `STD-BE-AUTH#R001` | Xác thực access token/session theo issuer và audience | `test+review` |
| `STD-BE-AUTH#R002` | Ủy quyền trên resource và tenant | `test+review` |
| `STD-BE-AUTH#R003` | Lưu mật khẩu bằng KDF chuyên dụng | `test_or_review` |
| `STD-BE-AUTH#R004` | Giới hạn đăng nhập và tránh enumeration | `test+review` |
| `STD-BE-AUTH#R005` | Quản lý refresh/session và thu hồi | `test+review` |
| `STD-BE-AUTH#R006` | Áp dụng MFA cho hành động nhạy cảm | `test+review` |
| `STD-BE-AUTH#R007` | Không trả credential/secret trong lỗi và log | `test+review` |
| `STD-BE-AUTH#R008` | Ma trận kiểm thử auth/permission | `test` |
| `STD-BE-CONCUR#R001` | Thiết kế idempotency cho lệnh có side effect | `test_or_review` |
| `STD-BE-CONCUR#R002` | Sử dụng transaction cho invariant đa bước | `test_or_review` |
| `STD-BE-CONCUR#R003` | Đặt optimistic concurrency hoặc locking phù hợp | `test_or_review` |
| `STD-BE-CONCUR#R004` | Bảo đảm không xử lý trùng consumer | `test_or_review` |
| `STD-BE-CONCUR#R005` | Outbox cho giao dịch DB và event | `test_or_review` |
| `STD-BE-CONCUR#R006` | Giới hạn concurrency và timeout | `test_or_review` |
| `STD-BE-CONCUR#R007` | Định nghĩa thứ tự và ownership khi bắt buộc | `test_or_review` |
| `STD-BE-CONCUR#R008` | Stress-test race condition theo invariant | `test` |
| `STD-BE-FILE#R001` | Giới hạn và xác thực tệp phía server | `test_or_review` |
| `STD-BE-FILE#R002` | Tên tệp và đường dẫn không do client điều khiển | `test_or_review` |
| `STD-BE-FILE#R003` | Quét và cách ly nội dung nguy hiểm | `test_or_review` |
| `STD-BE-FILE#R004` | Kiểm soát tải xuống và vòng đời | `test_or_review` |
| `STD-BE-HEALTH#R001` | Liveness không kiểm tra phụ thuộc xa | `test_or_review` |
| `STD-BE-HEALTH#R002` | Readiness kiểm tra khả năng nhận traffic | `test_or_review` |
| `STD-BE-HEALTH#R003` | Endpoint health ít lộ thông tin | `test+review` |
| `STD-BE-HEALTH#R004` | Test hoạt động khi dependency gián đoạn | `test` |
| `STD-BE-JOB#R001` | Tác vụ có cơ chế chống chạy trùng | `test_or_review` |
| `STD-BE-JOB#R002` | Thiết lập retry có giới hạn | `test_or_review` |
| `STD-BE-JOB#R003` | Checkpoint và phục hồi công việc dài | `test_or_review` |
| `STD-BE-JOB#R004` | Quan sát lịch sử thực thi và kết quả | `test_or_review` |
| `STD-BE-PERF#R001` | Đặt ngân sách độ trễ theo endpoint | `test_or_review` |
| `STD-BE-PERF#R002` | Tránh N+1 và payload dư thừa | `test_or_review` |
| `STD-BE-PERF#R003` | Giới hạn tài nguyên mỗi request | `test_or_review` |
| `STD-BE-PERF#R004` | Đo hiệu suất trên dữ liệu đại diện | `test_or_review` |
| `STD-BE-QUEUE#R001` | Consumer xử lý at-least-once an toàn | `test_or_review` |
| `STD-BE-QUEUE#R002` | Retry và dead-letter phân loại lỗi | `test_or_review` |
| `STD-BE-QUEUE#R003` | Quản lý thứ tự khi nghiệp vụ cần | `test_or_review` |
| `STD-BE-QUEUE#R004` | Giám sát độ trễ hàng đợi | `test_or_review` |
| `STD-BE-SEC#R001` | Áp dụng middleware bảo mật thống nhất | `test+review` |
| `STD-BE-SEC#R002` | Không tin dữ liệu từ client | `test+review` |
| `STD-BE-SEC#R003` | Giới hạn tần suất và tài nguyên | `test+review` |
| `STD-BE-SEC#R004` | An toàn với truy vấn và dữ liệu | `test+review` |
| `STD-BE-SEC#R005` | Bảo vệ outbound request và SSRF | `test+review` |
| `STD-BE-SEC#R006` | Quản lý secret và khóa | `test+review` |
| `STD-BE-SEC#R007` | Cấu hình CORS, header và transport | `test+review` |
| `STD-BE-SEC#R008` | Kiểm thử endpoint khi không có quyền | `test` |
| `STD-BE-TX#R001` | Transaction bao trọn invariant nội bộ | `test_or_review` |
| `STD-BE-TX#R002` | Không giữ transaction qua network I/O | `test_or_review` |
| `STD-BE-TX#R003` | Xử lý deadlock và serialization | `test_or_review` |
| `STD-BE-TX#R004` | Kiểm tra rollback qua fault injection | `test_or_review` |
| `STD-BE-VALID#R001` | Validate server dựa trên contract | `test_or_review` |
| `STD-BE-VALID#R002` | Phân biệt dữ liệu sai và lỗi nghiệp vụ | `test_or_review` |
| `STD-BE-VALID#R003` | Normalize trước kiểm tra uniqueness | `test_or_review` |
| `STD-BE-VALID#R004` | Không thay authorization bằng validation | `test+review` |
| `STD-NEXT#R001` | Ưu tiên server component mặc định cho các trường hợp hiển thị dữ liệu phù hợp | `test_or_review` |
| `STD-NEXT#R002` | Chỉ khai báo ranh giới client ở nơi thực sự cần tương tác trình duyệt | `test_or_review` |
| `STD-NEXT#R003` | Bảo vệ server action và route handler bằng authorization và validation | `test+review` |
| `STD-NEXT#R004` | Cấu hình cache, dynamic rendering và revalidation một cách chủ đích | `test_or_review` |
| `STD-REACT-TEST#R001` | Kiểm thử kết quả người dùng có thể quan sát thay vì chi tiết triển khai nội bộ | `test` |
| `STD-REACT-TEST#R002` | Mock ranh giới network và bao phủ các trạng thái loading/error/empty | `test_or_review` |
| `STD-REACT-TEST#R003` | Chạy kiểm tra tương tác tập trung vào accessibility trên form và dialog | `test` |
| `STD-REACT-TEST#R004` | Kiểm thử hành vi điều hướng và mutation cho các luồng quan trọng | `test` |
| `STD-REACT#R001` | Giữ component thuần và đặt side effect trong hook phù hợp với lifecycle | `test_or_review` |
| `STD-REACT#R002` | Tách các hành vi nghiệp vụ lặp lại thành feature hook/service | `test_or_review` |
| `STD-REACT#R003` | Sử dụng key ổn định và tránh sao chép derived state không cần thiết | `test_or_review` |
| `STD-REACT#R004` | Giữ ranh giới component phù hợp với trách nhiệm và khả năng kiểm thử | `test` |
| `STD-RQ#R001` | Sử dụng query key bao gồm mọi parameter có ý nghĩa | `test_or_review` |
| `STD-RQ#R002` | Invalidate hoặc cập nhật query sau mutation với ownership rõ ràng | `test_or_review` |
| `STD-RQ#R003` | Xử lý rõ ràng việc hủy, dữ liệu stale và retry policy | `test_or_review` |
| `STD-RQ#R004` | Không sao chép server state vào các global store ad hoc trùng lặp | `test_or_review` |
| `STD-TS#R001` | Bật strict mode và tránh ép kiểu `any` khi chưa được review | `test_or_review` |
| `STD-TS#R002` | Tách API DTO khỏi domain model và view model | `test_or_review` |
| `STD-TS#R003` | Validation runtime input không đáng tin cậy tại ranh giới hệ thống | `test_or_review` |
| `STD-TS#R004` | Sử dụng discriminated union cho các biến thể result và state | `test_or_review` |
| `STD-RN-NAV#R001` | Chọn một hệ thống routing cho project và định nghĩa route parameter có kiểu dữ liệu rõ ràng | `test_or_review` |
| `STD-RN-NAV#R002` | Xử lý nhất quán back navigation, nested stack và chuyển trạng thái xác thực | `test_or_review` |
| `STD-RN-NAV#R003` | Khử trùng lặp điều hướng được kích hoạt bởi link, push hoặc thay đổi trạng thái ứng dụng | `test_or_review` |
| `STD-RN-NAV#R004` | Chỉ lưu navigation state an toàn và validation destination sau khi khôi phục | `test_or_review` |
| `STD-RN-STATE#R001` | Chọn và tài liệu hóa một chiến lược quản lý client state thống nhất | `test_or_review` |
| `STD-RN-STATE#R002` | Tách biệt remote query state khỏi local UI state | `test_or_review` |
| `STD-RN-STATE#R003` | Chỉ khôi phục state sau process recreation khi bảo đảm an toàn | `test+review` |
| `STD-RN-STATE#R004` | Kiểm thử transition sau background, resume và chuyển tài khoản | `test` |
| `STD-RN-STORE#R001` | Phân loại dữ liệu trước khi lưu thiết bị | `test+review` |
| `STD-RN-STORE#R002` | Tách cache theo tài khoản và xóa khi logout | `test+review` |
| `STD-RN-STORE#R003` | Migration cấu trúc local storage có kiểm thử | `test` |
| `STD-RN-STORE#R004` | Giới hạn cache và khả năng phục hồi | `test_or_review` |
| `STD-RN-STORE#R005` | Không lộ dữ liệu qua backup hoặc debug | `test+review` |
| `STD-RN-TEST#R001` | Kiểm thử màn hình chính trong điều kiện loading, error và offline | `test` |
| `STD-RN-TEST#R002` | Kiểm thử navigation và deep link destination trên thiết bị | `test` |
| `STD-RN-TEST#R003` | Mock native adapter trong unit test và xác minh tích hợp thực tế riêng biệt | `test` |
| `STD-RN-TEST#R004` | Kiểm thử khác biệt nền tảng trong test matrix CI/device | `test` |
| `STD-RN#R001` | Bọc các lời gọi native module và xử lý lỗi permission hoặc OS | `test+review` |
| `STD-RN#R002` | Không chặn JS thread bằng các thao tác đồng bộ tốn tài nguyên | `test_or_review` |
| `STD-RN#R003` | Tài liệu hóa các giả định về Expo so với bare workflow cho từng project | `test_or_review` |
| `STD-RN#R004` | Kiểm thử phần triển khai đặc thù nền tảng trên thiết bị thật được hỗ trợ | `test` |
| `STD-FL-BLOC#R001` | Sử dụng BLoC/Cubit cho feature state và các state transition rõ ràng | `test_or_review` |
| `STD-FL-BLOC#R002` | Widget chỉ render state và dispatch intention; không gọi Dio trực tiếp | `test_or_review` |
| `STD-FL-BLOC#R003` | Kiểm thử các trạng thái success, loading, empty, validation và failure | `test` |
| `STD-FL-BLOC#R004` | Đóng stream/subscription và ngăn phát sinh emission sau khi dispose | `test_or_review` |
| `STD-FL-DART#R001` | Bật analyzer lint nghiêm ngặt và format code nhất quán | `test_or_review` |
| `STD-FL-DART#R002` | Sử dụng model immutable và kiểu null-safe khi phù hợp | `test_or_review` |
| `STD-FL-DART#R003` | Giữ xử lý lỗi async có kiểu dữ liệu rõ ràng và tránh nuốt exception | `test_or_review` |
| `STD-FL-DART#R004` | Tổ chức import thư viện và trách nhiệm file theo cách nhất quán, dễ dự đoán | `test_or_review` |
| `STD-FL-ROUTE#R001` | Xác định named route và path/query parameter đã được validation | `test_or_review` |
| `STD-FL-ROUTE#R002` | Áp dụng redirect guard cho route được bảo vệ mà không tạo vòng lặp redirect | `test_or_review` |
| `STD-FL-ROUTE#R003` | Xử lý deep link khi cold start và khi ứng dụng resume | `test_or_review` |
| `STD-FL-ROUTE#R004` | Kiểm thử semantics của browser/back stack khi hỗ trợ Flutter web | `test` |
| `STD-FL-TEST#R001` | Kiểm thử transition của Cubit cho từng acceptance flow | `test` |
| `STD-FL-TEST#R002` | Sử dụng widget test cho layout, validation và accessibility | `test` |
| `STD-FL-TEST#R003` | Chạy end-to-end test cho auth, navigation và phục hồi offline | `test` |
| `STD-FL-TEST#R004` | Sử dụng fake clock/network có tính xác định khi timing quan trọng | `test_or_review` |
| `STD-FL-WIDGET#R001` | Tập trung quản lý màu sắc, typography, spacing và theme token | `test+review` |
| `STD-FL-WIDGET#R002` | Tổ hợp các widget nhỏ thay vì sử dụng build method quá lớn | `test_or_review` |
| `STD-FL-WIDGET#R003` | Tuân thủ MediaQuery, SafeArea và text scale phục vụ accessibility | `test` |
| `STD-FL-WIDGET#R004` | Render và đối chiếu widget với thiết kế màn hình đã được duyệt | `test_or_review` |
| `STD-DOTNET-API#R001` | Đặt middleware theo thứ tự bảo mật chuẩn | `test+review` |
| `STD-DOTNET-API#R002` | Dùng DI lifetime tương thích scope | `test_or_review` |
| `STD-DOTNET-API#R003` | Validate input và map error thống nhất | `test_or_review` |
| `STD-DOTNET-API#R004` | Luồng async và cancellation xuyên suốt | `test+review` |
| `STD-DOTNET-API#R005` | Áp dụng authorization trên mọi resource | `test+review` |
| `STD-DOTNET-EF#R001` | Đọc dữ liệu không tracking có chủ đích | `test_or_review` |
| `STD-DOTNET-EF#R002` | Chặn N+1 query và cartesian explosion | `test_or_review` |
| `STD-DOTNET-EF#R003` | Thực thi migration có kiểm soát | `test_or_review` |
| `STD-DOTNET-EF#R004` | Quản lý optimistic concurrency và transactions | `test+review` |
| `STD-DOTNET-EF#R005` | Bảo vệ query thô và connection | `test+review` |
| `STD-DOTNET-TEST#R001` | Phân tầng unit và integration test | `test` |
| `STD-DOTNET-TEST#R002` | Test auth và authorization negative case | `test` |
| `STD-DOTNET-TEST#R003` | Cô lập test và dữ liệu deterministic | `test` |
| `STD-DOTNET-TEST#R004` | Kiểm thử failure/retry và concurrency | `test` |
| `STD-DOTNET-TEST#R005` | Đưa test vào quality gate phù hợp | `test` |
| `STD-DOTNET#R001` | Tách controller/endpoint khỏi application/domain rule và persistence | `test_or_review` |
| `STD-DOTNET#R002` | Sử dụng dependency injection với vòng đời resource theo scope | `test_or_review` |
| `STD-DOTNET#R003` | Validation DTO đầu vào và triển khai error contract tập trung | `test_or_review` |
| `STD-DOTNET#R004` | Bảo vệ endpoint bằng authorization theo policy và integration test | `test` |
| `STD-PG#R001` | Theo dõi thay đổi schema bằng migration có thể rollback hoặc an toàn theo hướng tiến tới | `test_or_review` |
| `STD-PG#R002` | Sử dụng constraint, foreign key và truy cập có index dựa trên query plan | `test_or_review` |
| `STD-PG#R003` | Parameterize query và quản lý transaction quanh các business invariant | `test_or_review` |
| `STD-PG#R004` | Theo dõi query chậm và áp dụng database role theo nguyên tắc đặc quyền tối thiểu | `test+review` |
| `CAP-AUDIT#R001` | Ghi nhận actor, action, target, outcome và correlation ID | `test_or_review` |
| `CAP-AUDIT#R002` | Bảo vệ audit log khỏi việc chỉnh sửa bởi người dùng thông thường | `test_or_review` |
| `CAP-AUDIT#R003` | Mask các field secret và thực thi chính sách lưu giữ cũng như truy cập | `test+review` |
| `CAP-AUDIT#R004` | Đảm bảo thao tác nghiệp vụ và việc phát audit event luôn nhất quán | `test_or_review` |
| `CAP-AUTH#R001` | Quy định hành vi login, logout, token/session hết hạn và phục hồi | `test+review` |
| `CAP-AUTH#R002` | Áp dụng rate limit và thông báo lỗi chung để chống dò tìm credential | `test+review` |
| `CAP-AUTH#R003` | Kiểm thử credential không hợp lệ, tài khoản bị khóa, session hết hạn và request đồng thời | `test` |
| `CAP-AUTH#R004` | Tách điều hướng phía client khỏi quyết định xác thực có thẩm quyền ở server | `test+review` |
| `CAP-AUTH#R005` | Đăng ký và xác minh danh tính theo chính sách | `test+review` |
| `CAP-AUTH#R006` | Quản lý thiết bị, logout và revoke | `test+review` |
| `CAP-AUTH#R007` | Bảo vệ luồng khôi phục tài khoản | `test+review` |
| `CAP-AUTH#R008` | Ràng buộc kết quả test với AC | `test` |
| `CAP-CHAT#R001` | Sử dụng message ID và deduplication để hiển thị trạng thái phân phối đáng tin cậy | `test_or_review` |
| `CAP-CHAT#R002` | Xử lý reconnect, join lại group và phân trang lịch sử mà không tạo dữ liệu trùng | `test_or_review` |
| `CAP-CHAT#R003` | Xác định thứ tự, trạng thái pending/sent/failed và quy tắc gửi lại khi offline | `test_or_review` |
| `CAP-CHAT#R004` | Kiểm tra quyền thành viên phòng và phân quyền trên server cho từng event | `test+review` |
| `CAP-CRUD#R001` | Xác định hành vi tìm kiếm, lọc, sắp xếp, phân trang và trạng thái rỗng | `test_or_review` |
| `CAP-CRUD#R002` | Phân quyền từng thao tác create/read/update/delete ở phía server | `test+review` |
| `CAP-CRUD#R003` | Xử lý cập nhật đồng thời, submit trùng và rollback thay đổi optimistic | `test_or_review` |
| `CAP-CRUD#R004` | Quy định feedback dễ tiếp cận cho validation và kết quả thao tác | `test` |
| `CAP-NOTIFY#R001` | Tách biệt message event, tùy chọn phân phối và cách trình bày | `test_or_review` |
| `CAP-NOTIFY#R002` | Tránh gửi dữ liệu riêng tư tới người nhận không được phép | `test+review` |
| `CAP-NOTIFY#R003` | Đảm bảo action từ notification có tính idempotent và validation destination | `test_or_review` |
| `CAP-NOTIFY#R004` | Kiểm thử phân phối trùng, bộ đếm chưa đọc và trạng thái dismissal | `test` |
| `CAP-PAYMENT#R001` | Bảo vệ lệnh thanh toán khỏi xử lý trùng | `test_or_review` |
| `CAP-PAYMENT#R002` | Xác minh webhook bằng chữ ký và chống replay | `test+review` |
| `CAP-PAYMENT#R003` | Mô hình trạng thái thanh toán tường minh | `test_or_review` |
| `CAP-PAYMENT#R004` | Đối soát ledger và provider | `test_or_review` |
| `CAP-PAYMENT#R005` | Bảo vệ dữ liệu thẻ và thông tin nhạy cảm | `test+review` |
| `CAP-PAYMENT#R006` | Ràng buộc tiền tệ và chống sửa số tiền | `test_or_review` |
| `CAP-PAYMENT#R007` | Quy trình hoàn tiền và tranh chấp có kiểm soát | `test+review` |
| `CAP-PAYMENT#R008` | Thử nghiệm lỗi tích hợp và kịch bản khôi phục | `test_or_review` |
| `CAP-PERM#R001` | Định nghĩa vai trò và quyền hạn thành các thao tác rõ ràng trên resource | `test+review` |
| `CAP-PERM#R002` | Thực thi kiểm tra quyền trong API thay vì chỉ ẩn UI | `test+review` |
| `CAP-PERM#R003` | Kiểm thử các trường hợp biên về đặc quyền tối thiểu, thu hồi quyền và role kế thừa | `test` |
| `CAP-PERM#R004` | Theo dõi thay đổi role nhạy cảm trong audit log | `test+review` |
| `CAP-PERM#R005` | Ngăn tự nâng đặc quyền | `test+review` |
| `CAP-PERM#R006` | Chuẩn hóa mã quyền giữa backend và UI | `test+review` |
| `CAP-PERM#R007` | Phân tách trách nhiệm cho tác vụ quan trọng | `test+review` |
| `CAP-PERM#R008` | Kiểm thử ma trận vai trò và đối tượng | `test` |
| `CAP-PROFILE#R001` | Giới hạn update cho đúng subject được ủy quyền và các field được phép | `test+review` |
| `CAP-PROFILE#R002` | Validation các field thay đổi và giữ nguyên giá trị hiện có của field không đổi | `test_or_review` |
| `CAP-PROFILE#R003` | Xử lý lỗi avatar/media và response xung đột | `test_or_review` |
| `CAP-PROFILE#R004` | Ghi audit cho các thay đổi hồ sơ nhạy cảm mà không làm lộ dữ liệu riêng tư | `test+review` |
| `CAP-REPORT#R001` | Tài liệu hóa định nghĩa metric, bộ lọc và múi giờ báo cáo | `test_or_review` |
| `CAP-REPORT#R002` | Đảm bảo dữ liệu tổng hợp tuân thủ quyền của tenant và người dùng | `test_or_review` |
| `CAP-REPORT#R003` | Cung cấp chỉ báo trạng thái loading, empty và dữ liệu một phần | `test_or_review` |
| `CAP-REPORT#R004` | Giới hạn query tốn tài nguyên và áp dụng cache theo yêu cầu về độ mới dữ liệu | `test_or_review` |
| `CAP-SEARCH#R001` | Xác định toán tử lọc, các field có thể tìm kiếm và thứ tự sắp xếp mặc định | `test_or_review` |
| `CAP-SEARCH#R002` | Lưu trạng thái filter có thể chia sẻ khi nền tảng cho phép | `test_or_review` |
| `CAP-SEARCH#R003` | Debounce input phía client và hủy các request đã lỗi thời | `test_or_review` |
| `CAP-SEARCH#R004` | Xử lý trường hợp không có kết quả, response chậm và tập dữ liệu phân trang | `test_or_review` |
| `CAP-SHARE#R001` | Validation quyền truy cập resource dùng chung và quy tắc hết hạn | `test+review` |
| `CAP-SHARE#R002` | Xử lý điều hướng khi app đã cài/chưa cài với fallback an toàn | `test_or_review` |
| `CAP-SHARE#R003` | Xem deferred attribution là best-effort và không cam kết tuyệt đối giữa các store | `test_or_review` |
| `CAP-SHARE#R004` | Ngăn open redirect và log an toàn các lỗi resolve link | `test+review` |
| `CAP-UPLOAD#R001` | Validation kích thước, loại và nội dung file trên server đáng tin cậy | `test_or_review` |
| `CAP-UPLOAD#R002` | Cung cấp progress, cancel, retry và cơ chế phục hồi khi lỗi | `test_or_review` |
| `CAP-UPLOAD#R003` | Sử dụng upload credential có thời hạn ngắn và tránh để file nhạy cảm ở chế độ public | `test+review` |
| `CAP-UPLOAD#R004` | Ghi nhận yêu cầu scanning và authorization trước khi chia sẻ nội dung | `test+review` |
