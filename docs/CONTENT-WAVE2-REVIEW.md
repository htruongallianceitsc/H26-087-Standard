# Content Hardening Wave 2 - Backend, Operations, UX

- Không thay đổi schema, `applicability`, `depends_on` hoặc resolver.
- Nâng 23 standard: 6 UX, 8 Backend, 9 Operations (riêng A11Y, BE-AUTH, BE-SEC, BE-CONCUR đã thực hiện ở Wave 1).
- Mỗi standard có 4 rule theo trường hợp nghiệp vụ/kiến trúc cụ thể, kèm cách kiểm chứng, ví dụ tốt/xấu; 3 ID đầu giữ nguyên, thêm R004 và cập nhật rule-id-registry.
- Tổng catalog: 137 standard, 587 rule, 0 lỗi schema; kiểm thử 4 project profile mẫu đạt.
- Chất lượng còn tồn đọng: 24 standard generic skeleton; 220 boilerplate detail và example từ các standard bán khuôn mẫu; 2 rule title trùng. Đây là nợ nội dung cho Wave 3.
- Lưu ý: một số R001-R003 trước đó mang nội dung skeleton; vì chưa có nghĩa vụ kiểm tra cụ thể, Wave 2 viết lại semantic của chúng nhưng giữ stable ID. Project importer có kiểm duyệt rule nên review thay đổi nội dung khi cập nhật.
- `content-quality-baseline.json` cập nhật generic skeleton = 24, để CI chặn tăng trở lại.
