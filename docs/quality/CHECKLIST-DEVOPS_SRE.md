# Checklist - devops_sre

Rules: **71**

| Rule | Severity | Verification | Pass/Fail/Waived/NA | Evidence |
|---|---|---|---|---|
| `STD-BACKUP#R001` - Định nghĩa RPO và phạm vi bản sao | must | runtime | [ ] | |
| `STD-BACKUP#R002` - Bảo vệ bản sao khỏi xóa/sửa trái phép | must | runtime | [ ] | |
| `STD-BACKUP#R003` - Khôi phục thử định kỳ | should | runtime | [ ] | |
| `STD-BACKUP#R004` - Kiểm tra retention và xóa hợp lệ | should | runtime | [ ] | |
| `STD-CI#R001` - Sử dụng lockfile và build có thể tái lập trong CI | must | test_or_review | [ ] | |
| `STD-CI#R002` - Tách biệt môi trường và inject secret tại runtime hoặc qua build setting an toàn | must | test+review | [ ] | |
| `STD-CI#R003` - Promote artifact đã được kiểm thử và duy trì tài liệu quy trình release/rollback | should | test | [ ] | |
| `STD-CI#R004` - Bắt buộc các phê duyệt cần thiết trước khi deploy production | should | test_or_review | [ ] | |
| `STD-CI#R005` - Pin và kiểm soát third-party CI action, build image và toolchain | must | test+review | [ ] | |
| `STD-CI#R006` - Sinh provenance/attestation gắn source, workflow và artifact digest | should | test+review | [ ] | |
| `STD-CODE-REVIEW#R001` - PR có phạm vi nhỏ và mô tả tác động | must | test_or_review | [ ] | |
| `STD-CODE-REVIEW#R002` - Review độc lập cho thay đổi nhạy cảm | must | test+review | [ ] | |
| `STD-CODE-REVIEW#R003` - CI bắt buộc xanh trước khi merge | must | test+review | [ ] | |
| `STD-CODE-REVIEW#R004` - Phản hồi comment có thể kiểm chứng | should | test_or_review | [ ] | |
| `STD-CODE-REVIEW#R005` - Kiểm soát regression theo bề mặt thay đổi | should | test_or_review | [ ] | |
| `STD-COST#R001` - Gắn tag chi phí theo nguồn sử dụng | must | runtime | [ ] | |
| `STD-COST#R002` - Ngân sách và cảnh báo xu hướng | must | runtime | [ ] | |
| `STD-COST#R003` - Giới hạn tài nguyên không kiểm soát | should | runtime | [ ] | |
| `STD-COST#R004` - Tối ưu dựa trên usage đo được | should | runtime | [ ] | |
| `STD-CRYPTO#R002` - Tách khóa khỏi dữ liệu và áp dụng least privilege cho key access | must | test_or_review | [ ] | |
| `STD-DEP#R003` - Tồn kho giấy phép và thành phần | must | test_or_review | [ ] | |
| `STD-DEP#R005` - Bảo vệ pipeline khỏi dependency confusion | should | test+review | [ ] | |
| `STD-DEPLOY#R001` - Triển khai artifact bất biến | must | test+review | [ ] | |
| `STD-DEPLOY#R002` - Có health gate và rollback | must | test_or_review | [ ] | |
| `STD-DEPLOY#R003` - Tách migration tương thích khỏi release | should | test_or_review | [ ] | |
| `STD-DEPLOY#R004` - Audit quyền triển khai và thời điểm | should | test_or_review | [ ] | |
| `STD-DEPLOY#R005` - Xác minh chữ ký/provenance trước khi promote artifact nhạy cảm | should | test+review | [ ] | |
| `STD-DR#R001` - Xác định RTO/RPO theo kịch bản mất dịch vụ | must | runtime | [ ] | |
| `STD-DR#R002` - Có runbook failover và failback | must | runtime | [ ] | |
| `STD-DR#R003` - Diễn tập tình huống gián đoạn | should | runtime | [ ] | |
| `STD-DR#R004` - Phân vai điều phối khi sự cố lớn | should | runtime | [ ] | |
| `STD-ENV#R005` - Kiểm soát thay đổi cấu hình production | should | test_or_review | [ ] | |
| `STD-ENV#R006` - Feature/mock flag phải có default an toàn và không thể vô tình bật trên production | must | test+review | [ ] | |
| `STD-EVENT#R005` - Có DLQ/quarantine, replay và retention với guard chống side effect lặp | should | runtime | [ ] | |
| `STD-EVENT#R006` - Quan sát lag, retry, throughput và failure theo producer/consumer contract | should | runtime | [ ] | |
| `STD-FLAG#R002` - Thiết lập rollout ổn định theo cohort | must | test_or_review | [ ] | |
| `STD-GIT#R001` - Giữ thay đổi nhỏ gọn, có tham chiếu issue và commit mô tả rõ ràng | must | test+review | [ ] | |
| `STD-GIT#R002` - Yêu cầu review và pass các quality check trước khi tích hợp | must | test_or_review | [ ] | |
| `STD-GIT#R003` - Không commit credential, cache của máy hoặc build output được sinh ra nếu không cần thiết | should | test+review | [ ] | |
| `STD-GIT#R004` - Duy trì release tag, tham chiếu migration và ghi chú rollback | should | test_or_review | [ ] | |
| `STD-I18N#R004` - Quản lý fallback và kiểm tra thiếu key | should | test_or_review | [ ] | |
| `STD-IAC#R001` - Hạ tầng được quản lý qua code review | must | runtime | [ ] | |
| `STD-IAC#R002` - State và secret được bảo vệ | must | runtime | [ ] | |
| `STD-IAC#R003` - Phát hiện drift và policy violation | should | runtime | [ ] | |
| `STD-IAC#R004` - Môi trường tạo lại được | should | runtime | [ ] | |
| `STD-INCIDENT#R001` - Phân loại mức độ và kích hoạt phản ứng | must | runtime | [ ] | |
| `STD-INCIDENT#R002` - Lưu timeline và vai trò rõ ràng | must | runtime | [ ] | |
| `STD-INCIDENT#R003` - Giảm ảnh hưởng trước khi phân tích sâu | should | runtime | [ ] | |
| `STD-INCIDENT#R004` - Postmortem không quy lỗi cá nhân | should | runtime | [ ] | |
| `STD-LOG#R003` - Gắn instrumentation cho các hành trình người dùng quan trọng với metric thành công, thất bại và độ trễ | should | test_or_review | [ ] | |
| `STD-NET#R001` - Mặc định giới hạn truy cập mạng | must | runtime | [ ] | |
| `STD-NET#R002` - Mã hóa kết nối và quản lý chứng chỉ | must | runtime | [ ] | |
| `STD-NET#R003` - Bảo vệ dịch vụ trước lạm dụng | should | runtime | [ ] | |
| `STD-NET#R004` - Quan sát mạng theo luồng | should | runtime | [ ] | |
| `STD-PERF#R002` - Đo baseline và regression tự động | must | test_or_review | [ ] | |
| `STD-RUNBOOK#R001` - Hướng dẫn thao tác có điều kiện kích hoạt | must | runtime | [ ] | |
| `STD-RUNBOOK#R002` - Lệnh có phạm vi và khả năng rollback | must | runtime | [ ] | |
| `STD-RUNBOOK#R003` - Runbook được diễn tập | should | runtime | [ ] | |
| `STD-RUNBOOK#R004` - Tham chiếu telemetry và escalation | should | runtime | [ ] | |
| `STD-SEC#R008` - Kiểm thử abuse-case theo ranh giới tin cậy | should | test | [ ] | |
| `STD-SLO#R001` - SLI đo từ trải nghiệm thực | must | runtime | [ ] | |
| `STD-SLO#R002` - SLO có cửa sổ và phép tính rõ | must | runtime | [ ] | |
| `STD-SLO#R003` - Alert dựa trên burn rate | should | runtime | [ ] | |
| `STD-SLO#R004` - Error budget tác động quyết định release | should | runtime | [ ] | |
| `STD-TENANCY#R006` - Tenant lifecycle phải bao phủ onboarding, transfer, export, deletion và offboarding | should | test_or_review | [ ] | |
| `STD-VERSIONING#R001` - Dùng thay đổi tương thích cho API và contract | must | test_or_review | [ ] | |
| `STD-VERSIONING#R002` - Áp dụng version sản phẩm theo chính sách rõ ràng | must | test_or_review | [ ] | |
| `STD-VERSIONING#R003` - Thiết lập thời hạn hỗ trợ và deprecation | must | test_or_review | [ ] | |
| `STD-VERSIONING#R004` - Kiểm thử backward và forward compatibility | should | test | [ ] | |
| `STD-VERSIONING#R005` - Đồng bộ version schema và migration | should | test_or_review | [ ] | |
| `STD-VULN#R005` - Theo dõi phiên bản bị ảnh hưởng và khả năng phản ứng khẩn cấp | must | test+review | [ ] | |
