# Checklist Architect / BA – Wave 6

Checklist tham khảo dựa trên layer/concerns/severity. **Chỉ áp dụng cho standards đã resolve theo project profile**, không được dùng toàn bộ catalog như một checklist bắt buộc.

Tổng rule có thể liên quan: **76**.

| Rule ID | Quy tắc | Đề xuất kiểm chứng |
|---|---|---|
| `STD-AI-DEV#R001` | Đọc requirement, các standard áp dụng và tài liệu tham chiếu thiết kế trước khi code | `review` |
| `STD-AI-DEV#R002` | Lập kế hoạch có xét đến phạm vi ảnh hưởng và ánh xạ thay đổi tới tiêu chí chấp nhận | `review` |
| `STD-AI-DEV#R003` | Triển khai trong phạm vi kiến trúc đã được duyệt và tránh refactor không liên quan | `review` |
| `STD-AI-DEV#R004` | Chạy kiểm tra, so sánh UI bàn giao với design và báo cáo bằng chứng/khoảng lệch | `review` |
| `STD-ARCH#R001` | Ghi ADR cho quyết định có tác động xuyên module | `review` |
| `STD-ARCH#R002` | Kiểm soát chiều phụ thuộc giữa các tầng | `review` |
| `STD-ARCH#R003` | Đánh giá khả năng đảo ngược quyết định | `review` |
| `STD-ARCH#R004` | Đặt NFR vào ranh giới kiến trúc | `review` |
| `STD-ARCH#R005` | Rà soát ADR bị thay thế | `review` |
| `STD-BIZ#R001` | Gán mã định danh rõ ràng và owner cho từng quy tắc nghiệp vụ | `review` |
| `STD-BIZ#R002` | Tài liệu hóa trigger, điều kiện, kết quả, ngoại lệ và thứ tự ưu tiên | `review` |
| `STD-BIZ#R003` | Mô hình hóa nhánh quyết định và thay đổi trạng thái khi kết quả phụ thuộc vào ngữ cảnh | `review` |
| `STD-BIZ#R004` | Xác nhận các quy tắc nghiệp vụ xung đột với người chịu trách nhiệm quyết định trước khi triển khai | `review` |
| `STD-COMPLIANCE#R001` | Lập ma trận nghĩa vụ theo sản phẩm và thị trường | `review` |
| `STD-COMPLIANCE#R002` | Thu thập bằng chứng có nguồn gốc và hạn lưu | `review` |
| `STD-COMPLIANCE#R003` | Đánh giá thay đổi trước khi phát hành | `review` |
| `STD-COMPLIANCE#R004` | Quản lý ngoại lệ có thời hạn | `review` |
| `STD-COMPLIANCE#R005` | Kiểm toán định kỳ tính hiệu lực | `review` |
| `STD-DOC#R001` | Đảm bảo yêu cầu, screen, API và data contract có thể truy vết bằng tham chiếu ổn định | `review` |
| `STD-DOC#R002` | Ghi nhận quyết định đã được chấp thuận, lý do thay đổi và các artifact bị ảnh hưởng | `review` |
| `STD-DOC#R003` | Cập nhật spec trước khi triển khai thay đổi và đối soát tài liệu sau đó | `review` |
| `STD-DOC#R004` | Sinh index từ tài liệu nguồn chuẩn thay vì chỉnh sửa file được sinh tự động | `review` |
| `STD-FEAT#R001` | Nêu rõ mục đích feature, actor, hành vi trong phạm vi và ngoài phạm vi | `review` |
| `STD-FEAT#R002` | Liên kết từng feature với requirement nguồn thay vì tự tạo thêm requirement | `review` |
| `STD-FEAT#R003` | Mô tả happy path, luồng thay thế, trạng thái rỗng và trạng thái lỗi | `review` |
| `STD-FEAT#R004` | Xác định điều kiện hoàn thành có thể kiểm thử trước khi triển khai | `test` |
| `STD-MONOREPO#R001` | Khai báo ranh giới package và dependency | `review` |
| `STD-MONOREPO#R002` | Chạy kiểm tra theo phạm vi ảnh hưởng | `review` |
| `STD-MONOREPO#R003` | Khóa phiên bản công cụ và dependency | `review` |
| `STD-MONOREPO#R004` | Tách cache build theo inputs thực tế | `review` |
| `STD-MONOREPO#R005` | Quản lý version/release package độc lập | `review` |
| `STD-NAME#R001` | Chọn một quy ước đặt tên cho từng ngôn ngữ lập trình và từng loại artifact | `review` |
| `STD-NAME#R002` | Sử dụng semantic ID ổn định cho feature, requirement, rule và test | `test` |
| `STD-NAME#R003` | Tránh viết tắt làm mất ý nghĩa domain; công bố rõ các ngoại lệ | `review` |
| `STD-NAME#R004` | Tránh đổi tên contract công khai khi chưa đánh giá tính tương thích | `review` |
| `STD-REQ#R001` | Ghi nhận yêu cầu thô kèm nguồn, owner và các câu hỏi chưa được giải quyết trước khi phân loại | `review` |
| `STD-REQ#R002` | Tách functional requirement có thể kiểm thử khỏi giả định và ràng buộc phi chức năng | `test` |
| `STD-REQ#R003` | Viết acceptance criteria theo Given-When-Then có thể quan sát, bao gồm trường hợp lỗi và biên | `review` |
| `STD-REQ#R004` | Liên kết requirement đã được duyệt với feature và bằng chứng kiểm thử | `test` |
| `STD-ANALYTICS#R003` | Tôn trọng consent và cấu hình khu vực | `review` |
| `STD-ANALYTICS#R004` | Ngăn duplicate event khi retry/re-render | `review` |
| `STD-DEP#R001` | Khóa và kiểm soát nguồn package | `review` |
| `STD-DEP#R002` | Quét lỗ hổng theo mức rủi ro | `review` |
| `STD-DEP#R004` | Lập chính sách nâng cấp và loại bỏ dependency | `review` |
| `STD-ENV#R002` | Đưa secret vào kho bí mật được quản lý | `review` |
| `STD-ENV#R003` | Validate cấu hình khi khởi động | `review` |
| `STD-ENV#R004` | Quản lý rotation và thu hồi | `review` |
| `STD-ERR#R001` | Phân biệt lỗi validation, authentication, authorization, network và lỗi ngoài dự kiến | `review` |
| `STD-ERR#R003` | Chỉ cung cấp thao tác retry cho các operation tạm thời và an toàn để thử lại | `review` |
| `STD-FLAG#R001` | Định nghĩa owner, phạm vi và thời hạn flag | `review` |
| `STD-FLAG#R003` | Có kill switch và fallback kiểm chứng được | `review` |
| `STD-FLAG#R004` | Theo dõi metric theo cohort | `review` |
| `STD-FLAG#R005` | Dọn dead flag và test tổ hợp quan trọng | `test` |
| `STD-I18N#R001` | Không hardcode chuỗi hiển thị trong logic | `review` |
| `STD-I18N#R003` | Hỗ trợ plural và độ dài nội dung | `review` |
| `STD-I18N#R005` | Đáp ứng RTL và định dạng đầu vào | `review` |
| `STD-LOG#R001` | Sử dụng structured log với timestamp, severity, operation và correlation ID | `review` |
| `STD-LOG#R002` | Không log mật khẩu, access token hoặc payload nhạy cảm | `review` |
| `STD-LOG#R004` | Xác định ngưỡng cảnh báo và owner cho sự cố production | `review` |
| `STD-PERF#R001` | Xác định performance budget theo user journey | `review` |
| `STD-PERF#R004` | Quan sát bottleneck theo thành phần | `review` |
| `STD-PERF#R005` | Đặt giới hạn và bảo vệ hệ thống khi quá tải | `review` |
| `STD-PRIV#R003` | Thực thi vòng đời lưu giữ và xóa | `review` |
| `STD-PRIV#R006` | Minh bạch và lựa chọn người dùng | `review` |
| `STD-RES#R001` | Timeout và retry có ngân sách | `review` |
| `STD-RES#R002` | Thiết kế circuit breaker và bulkhead | `review` |
| `STD-RES#R003` | Xử lý lỗi suy giảm an toàn | `review` |
| `STD-RES#R005` | Quan sát chỉ số reliability và error budget | `review` |
| `STD-SEC#R002` | Bảo vệ credential và secret bằng hệ thống quản lý secret chuyên dụng | `review` |
| `STD-SEC#R003` | Validation input không đáng tin cậy và encode output theo đúng ngữ cảnh đích | `review` |
| `STD-SEC#R005` | Mặc định từ chối và phân quyền tối thiểu | `review` |
| `STD-SEC#R007` | Không tiết lộ nội bộ khi thất bại | `review` |
| `STD-A11Y#R006` | Tôn trọng resize và chuyển động giảm | `test` |
| `STD-A11Y#R007` | Hỗ trợ touch target và thời hạn tương tác | `test` |
| `STD-FEEDBACK#R002` | Thông báo không lộ dữ liệu kỹ thuật | `review` |
| `STD-FEEDBACK#R004` | Phản hồi trạng thái thành công đúng thời điểm | `review` |
