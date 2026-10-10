# Wave 6 – Nguyên tắc đánh giá rule theo ý nghĩa

## Phân biệt taxonomy

- `layer`: nơi chịu trách nhiệm thực thi; không dùng làm tag chung cho chủ đề.
- `concerns`: nhóm rủi ro hoặc mục tiêu kiểm soát; có thể nhiều concern.
- `severity`: mức bắt buộc; không phản ánh người thực hiện.
- Role và verification là **derived suggestions**, chưa được lưu vào schema và không ảnh hưởng importer.

## Quy trình review

1. Resolve standards theo profile thực tế trước khi chọn rule để kiểm tra.
2. Với từng rule, hỏi: có thể mô tả pass/fail bằng bằng chứng quan sát được không? `example_good`/`example_bad` có phản ánh cùng một điều kiện không?
3. Review các cờ trong `docs/quality/semantic-audit.json`. Không tự động xem cờ heuristic là lỗi.
4. Với cặp rule chồng lấn, phân định tầng và trách nhiệm; không đánh lại Rule ID.
5. Khi nghiệm thu, lưu `{ruleId, status: pass|fail|waived|not_applicable, evidence, reviewer, reviewedAt}` tại **project sử dụng catalog**, không ghi vào standard JSON. Waiver cần lý do, người chấp thuận và hạn hết hiệu lực.
6. Các standard `must` phải có bằng chứng hoặc waiver được phê duyệt trước khi release; `should` phải có ghi nhận quyết định nếu chưa đạt.

## Các báo cáo

- `docs/quality/SEMANTIC-AUDIT.md`: tổng quan cờ nội dung.
- `docs/quality/CHECKLIST-*.md`: checklist theo vai trò, **chưa lọc profile**.
- `docs/quality/semantic-audit.json`: dữ liệu máy, có rule ID, roles và verification suggestion.

## Giới hạn

Similarity tự động không chứng minh rule trùng nghĩa; role gợi ý không thay thế RACI; bài kiểm tra linter không xác nhận tính đúng đắn kỹ thuật hay tiêu chuẩn pháp lý. Không chỉnh schema trong Wave 6.

## Sinh checklist đã lọc theo profile

```bash
python3 tools/quality_wave6.py --profile project-profiles/react-web.auto.example.json --role developer --out checklist-react-dev.md
python3 tools/quality_wave6.py --profile project-profiles/flutter-mobile.auto.example.json --role qc --out checklist-flutter-qc.md
```

Script dùng chính resolver của catalog để tránh mang rule không áp dụng vào project.
