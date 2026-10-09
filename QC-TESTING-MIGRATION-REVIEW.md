# Nâng cấp nhóm QC & Testing

## Phạm vi
- Thêm nhóm `11-quality-assurance-testing` (không đánh số lại các nhóm 01–10).
- Di chuyển `STD-TEST` và `STD-PERF-TEST` từ `01-governance-delivery`; mã và phiên bản giữ nguyên.
- Thêm 20 standard chuyên trách kiểm thử; chuẩn kiểm thử React/Flutter/RN/.NET vẫn ở nhóm công nghệ.
- Không chỉnh `standard-import.schema.json`; các dependency dùng `depends_on` theo code.

## Lưu ý tương thích khi import
- Hai standard đã có **đổi `category`** từ `01_governance_delivery` sang `11_quality_assurance_testing`. Ứng dụng có filter/logic theo category phải cập nhật mapping.
- Các đường dẫn tệp trên repo của hai standard này đã chuyển folder, cần sửa path nếu project có tham chiếu file tĩnh.
- Các mã standard khác và contract/schema không đổi.
- Import endpoint có thể từ chối code đã tồn tại (upsert/migration phải theo quy trình riêng); không coi ZIP này là lệnh update dữ liệu tự động.
- Nếu backend giới hạn danh sách category, đăng ký `11_quality_assurance_testing` trước khi nhập dữ liệu.

## Quy trình sử dụng
Requirement → AC → QC Plan/Case/Data → Test Execution/Bug → Regression/Traceability → Quality Gate/UAT/Report.

## Phân tách trách nhiệm
Dev phụ trách unit/integration tests và xác minh AC của implementation. QC phụ trách thiết kế test độc lập, thực thi, quản lý lỗi và báo cáo chất lượng. Automation là trách nhiệm phối hợp.
