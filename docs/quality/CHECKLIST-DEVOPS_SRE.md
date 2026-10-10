# Checklist DevOps / SRE – Wave 6

Checklist tham khảo dựa trên layer/concerns/severity. **Chỉ áp dụng cho standards đã resolve theo project profile**, không được dùng toàn bộ catalog như một checklist bắt buộc.

Tổng rule có thể liên quan: **62**.

| Rule ID | Quy tắc | Đề xuất kiểm chứng |
|---|---|---|
| `STD-CI#R001` | Sử dụng lockfile và build có thể tái lập trong CI | `test_or_review` |
| `STD-CI#R002` | Tách biệt môi trường và inject secret tại runtime hoặc qua build setting an toàn | `test+review` |
| `STD-CI#R003` | Promote artifact đã được kiểm thử và duy trì tài liệu quy trình release/rollback | `test` |
| `STD-CI#R004` | Bắt buộc các phê duyệt cần thiết trước khi deploy production | `test_or_review` |
| `STD-CODE-REVIEW#R001` | PR có phạm vi nhỏ và mô tả tác động | `test_or_review` |
| `STD-CODE-REVIEW#R002` | Review độc lập cho thay đổi nhạy cảm | `test+review` |
| `STD-CODE-REVIEW#R003` | CI bắt buộc xanh trước khi merge | `test+review` |
| `STD-CODE-REVIEW#R004` | Phản hồi comment có thể kiểm chứng | `test_or_review` |
| `STD-CODE-REVIEW#R005` | Kiểm soát regression theo bề mặt thay đổi | `test_or_review` |
| `STD-GIT#R001` | Giữ thay đổi nhỏ gọn, có tham chiếu issue và commit mô tả rõ ràng | `test+review` |
| `STD-GIT#R002` | Yêu cầu review và pass các quality check trước khi tích hợp | `test_or_review` |
| `STD-GIT#R003` | Không commit credential, cache của máy hoặc build output được sinh ra nếu không cần thiết | `test+review` |
| `STD-GIT#R004` | Duy trì release tag, tham chiếu migration và ghi chú rollback | `test_or_review` |
| `STD-VERSIONING#R001` | Dùng thay đổi tương thích cho API và contract | `test_or_review` |
| `STD-VERSIONING#R002` | Áp dụng version sản phẩm theo chính sách rõ ràng | `test_or_review` |
| `STD-VERSIONING#R003` | Thiết lập thời hạn hỗ trợ và deprecation | `test_or_review` |
| `STD-VERSIONING#R004` | Kiểm thử backward và forward compatibility | `test` |
| `STD-VERSIONING#R005` | Đồng bộ version schema và migration | `test_or_review` |
| `STD-DEP#R003` | Tồn kho giấy phép và thành phần | `test_or_review` |
| `STD-DEP#R005` | Bảo vệ pipeline khỏi dependency confusion | `test+review` |
| `STD-ENV#R005` | Kiểm soát thay đổi cấu hình production | `test_or_review` |
| `STD-FLAG#R002` | Thiết lập rollout ổn định theo cohort | `test_or_review` |
| `STD-I18N#R004` | Quản lý fallback và kiểm tra thiếu key | `test_or_review` |
| `STD-LOG#R003` | Gắn instrumentation cho các hành trình người dùng quan trọng với metric thành công, thất bại và độ trễ | `test_or_review` |
| `STD-PERF#R002` | Đo baseline và regression tự động | `test_or_review` |
| `STD-SEC#R008` | Kiểm thử abuse-case theo ranh giới tin cậy | `test` |
| `STD-BACKUP#R001` | Định nghĩa RPO và phạm vi bản sao | `runtime` |
| `STD-BACKUP#R002` | Bảo vệ bản sao khỏi xóa/sửa trái phép | `runtime` |
| `STD-BACKUP#R003` | Khôi phục thử định kỳ | `runtime` |
| `STD-BACKUP#R004` | Kiểm tra retention và xóa hợp lệ | `runtime` |
| `STD-COST#R001` | Gắn tag chi phí theo nguồn sử dụng | `runtime` |
| `STD-COST#R002` | Ngân sách và cảnh báo xu hướng | `runtime` |
| `STD-COST#R003` | Giới hạn tài nguyên không kiểm soát | `runtime` |
| `STD-COST#R004` | Tối ưu dựa trên usage đo được | `runtime` |
| `STD-DEPLOY#R001` | Triển khai artifact bất biến | `test+review` |
| `STD-DEPLOY#R002` | Có health gate và rollback | `test_or_review` |
| `STD-DEPLOY#R003` | Tách migration tương thích khỏi release | `test_or_review` |
| `STD-DEPLOY#R004` | Audit quyền triển khai và thời điểm | `test_or_review` |
| `STD-DR#R001` | Xác định RTO/RPO theo kịch bản mất dịch vụ | `runtime` |
| `STD-DR#R002` | Có runbook failover và failback | `runtime` |
| `STD-DR#R003` | Diễn tập tình huống gián đoạn | `runtime` |
| `STD-DR#R004` | Phân vai điều phối khi sự cố lớn | `runtime` |
| `STD-IAC#R001` | Hạ tầng được quản lý qua code review | `runtime` |
| `STD-IAC#R002` | State và secret được bảo vệ | `runtime` |
| `STD-IAC#R003` | Phát hiện drift và policy violation | `runtime` |
| `STD-IAC#R004` | Môi trường tạo lại được | `runtime` |
| `STD-INCIDENT#R001` | Phân loại mức độ và kích hoạt phản ứng | `runtime` |
| `STD-INCIDENT#R002` | Lưu timeline và vai trò rõ ràng | `runtime` |
| `STD-INCIDENT#R003` | Giảm ảnh hưởng trước khi phân tích sâu | `runtime` |
| `STD-INCIDENT#R004` | Postmortem không quy lỗi cá nhân | `runtime` |
| `STD-NET#R001` | Mặc định giới hạn truy cập mạng | `runtime` |
| `STD-NET#R002` | Mã hóa kết nối và quản lý chứng chỉ | `runtime` |
| `STD-NET#R003` | Bảo vệ dịch vụ trước lạm dụng | `runtime` |
| `STD-NET#R004` | Quan sát mạng theo luồng | `runtime` |
| `STD-RUNBOOK#R001` | Hướng dẫn thao tác có điều kiện kích hoạt | `runtime` |
| `STD-RUNBOOK#R002` | Lệnh có phạm vi và khả năng rollback | `runtime` |
| `STD-RUNBOOK#R003` | Runbook được diễn tập | `runtime` |
| `STD-RUNBOOK#R004` | Tham chiếu telemetry và escalation | `runtime` |
| `STD-SLO#R001` | SLI đo từ trải nghiệm thực | `runtime` |
| `STD-SLO#R002` | SLO có cửa sổ và phép tính rõ | `runtime` |
| `STD-SLO#R003` | Alert dựa trên burn rate | `runtime` |
| `STD-SLO#R004` | Error budget tác động quyết định release | `runtime` |
