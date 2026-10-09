# Review chuyển nội dung Standard sang tiếng Việt

## Mục tiêu

Chuyển phần nội dung dành cho người đọc sang tiếng Việt để BA/PM/Dev/QC dễ tiếp cận hơn, đồng thời giữ nguyên hợp đồng máy để các project đang import JSON không bị ảnh hưởng.

## Phần đã chuyển sang tiếng Việt

- `name`, `description` của toàn bộ 115 standard/capability.
- `rules[].title`, `detail`, `example_good`, `example_bad`.
- `integration_guide` và `common_issues`.
- Nội dung Mermaid trong `diagrams` ở các file có diagram.
- `features` và `user_stories` của các reusable capability có dữ liệu này.
- Tên hiển thị và mô tả quan hệ trong `STRUCTURE.txt` và `STRUCTURE_API_RESPONSE.js`.
- Mô tả dành cho người đọc trong `standard-import.schema.json`.
- `STRUCTURE-ALIGNMENT-REVIEW.md`.

## Phần cố ý giữ nguyên để đảm bảo tương thích

- Tên key JSON và cấu trúc object/array.
- `schemaVersion`, `code`, `category`, `version`, `status`.
- Enum kỹ thuật như `severity`, `layer`, `dependency_type`, `diagrams[].type`.
- `depends_on[].code` và các mã `STD-*` / `CAP-*`.
- Các tên framework/protocol/technology cần giữ đúng nghĩa kỹ thuật: React, Flutter, BLoC, WebSocket, SSE, OpenAPI, CSRF, LCP, INP, PWA, v.v.

## Nguyên tắc biên dịch

Bản dịch ưu tiên tiếng Việt dễ đọc nhưng không cố dịch mọi thuật ngữ kỹ thuật. Các thuật ngữ quen thuộc trong team phát triển như requirement, feature, state, cache, review, payload, retry, rollback, routing… được giữ khi bản dịch thuần Việt dễ gây mơ hồ hoặc dài dòng. Đây là chủ đích để tài liệu vẫn gần với cách Dev/BA/QC sử dụng hằng ngày.

## Kiểm tra tương thích

Sau khi chuyển ngôn ngữ cần xác minh lại toàn bộ JSON bằng `standard-import.schema.json`, đối chiếu số lượng file/code/dependency với bản gốc và bảo đảm các trường machine-contract nêu trên không thay đổi.
