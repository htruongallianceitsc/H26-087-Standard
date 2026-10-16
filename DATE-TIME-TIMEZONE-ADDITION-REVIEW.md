# Bổ sung STD-DATETIME — Date, Time & Timezone

- Standard mới: `03-api-integration-data/STD-DATETIME.json` (10 MUST rules).
- Tài liệu áp dụng xuyên Flutter/Web/API/Backend/Database, không chứa tên dự án riêng.
- Các standard `STD-API`, `STD-DATA`, `STD-I18N`, `STD-FL-DART`, `STD-TEST`, `STD-BE-ARCH` tham chiếu bằng quan hệ `uses` (không tự kế thừa rule).
- Catalog manifest và `rule-id-registry.json` đã đồng bộ.

## Quy tắc chính

1. Phân biệt `instant`, `local-date`, `local-time`, `local-date-time`, `zoned-date-time`.
2. Instant qua API yêu cầu offset rõ ràng (`Z` hoặc `+07:00`); không chuyển ngày sinh sang UTC.
3. Tách timezone nghiệp vụ (IANA) khỏi locale và device timezone.
4. Schema database phụ thuộc loại DB, kiểm tra roundtrip; ngày báo cáo theo `[start, end)` trong timezone nghiệp vụ.
5. Server dùng trusted/injectable clock; test DST, giao ngày/năm, lệch giờ thiết bị và dữ liệu legacy.

## Ghi chú validation

Repo đầu vào có duplicate code `STD-TEST` và `STD-PERF-TEST` trong các nhóm legacy; không tự ý sửa trong đợt này.
