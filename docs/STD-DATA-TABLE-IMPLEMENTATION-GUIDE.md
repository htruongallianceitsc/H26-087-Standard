# STD-DATA-TABLE — Implementation Guide

## Trách nhiệm

- **STD-DATA-TABLE** (04-experience-ui-ux): hành vi và khả năng sử dụng của table/grid/list, áp dụng Web/Mobile.
- **STD-PAGINATION** (03-api-integration-data): contract server pagination, filtering, cursor, sorting.
- **STD-UI-STATE** (04-experience-ui-ux): loading, empty, error, forbidden và offline.
- **STD-WEB-PERF / STD-MOB-PERF**: virtualization, UI threading, memory/performance.
- **STD-PRIV / STD-A11Y / STD-I18N**: quyền, accessibility, locale.

## Chọn presentation

| Ngữ cảnh | Desktop Web | Mobile |
|---|---|---|
| Admin table nhiều cột | Data grid với filter/sort/page | Card hoặc bảng rút gọn + detail |
| Danh sách đơn giao hàng | Bảng trạng thái và hành động | Danh sách compact, primary action |
| Báo cáo cần so cột | Table có sticky column/header | Cho phép scroll ngang có cue rõ ràng |
| Feed thay đổi thường xuyên | Load more/cursor | Infinite scroll có giới hạn |

## Checklist UX tối thiểu

1. Mỗi cột có metadata kiểu/format, ưu tiên, sortable/filterable và quyền.
2. Hiển thị sort/filter đang áp dụng; khi query đổi reset page/cursor và bỏ response cũ.
3. Row IDs bất biến, scope selection rõ current page vs all filtered.
4. Distinct states: initial loading, refresh, filtered-empty, dataset-empty, error, offline, forbidden.
5. Mobile không bắt buộc giữ 100% cột; có cách vào detail; vùng tap đủ lớn.
6. Mask và authorize tại server; export nhất quán filter/permission.
7. Inline edit có draft/save/cancel/validate/conflict handling.
8. Không dùng array index làm row key; không tải mọi bản ghi chỉ để paginate.

## Test matrix

- Data: 0, 1, 20, 10k hàng; null/zero; duplicate timestamps; long content.
- State: fast/slow/error/offline/refetch/out-of-order response.
- Interaction: filter -> page reset; sort with tie-breaker; select current page vs all; bulk partial failure.
- Editing: validate, pending, cancel, 409 conflict và realtime refetch giữ draft.
- Security: cột bị cấm không có trong API payload, export tuân quyền.
- Accessibility: keyboard, screen reader, semantic headers/labels, 200% zoom, màn hình hẹp.
- Performance: frame-time, peak memory, 10k+ rows với windowing và cancel stale queries.
