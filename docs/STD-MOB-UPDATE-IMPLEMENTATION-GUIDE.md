# STD-MOB-UPDATE — Implementation Guide

## Chọn đúng trạng thái

| Mode | UX | Tiếp tục dùng app? |
|---|---|---|
| NONE | Không hiển thị | Có |
| INFO | Thông báo thay đổi | Có |
| OPTIONAL | Có bản mới, Update / Để sau | Có |
| RECOMMENDED | Khuyến nghị, snooze/cooldown | Có |
| REQUIRED | Chặn phần app không còn tương thích, CTA Store / Retry / Support | Không với chức năng không tương thích |

**Không suy ra REQUIRED chỉ từ latestBuild > currentBuild.**

## Ví dụ API contract (minh họa, không thay thế policy schema)

```json
{
  "platform": "android",
  "channel": "production",
  "policyVersion": "p-2026-10-20-01",
  "evaluatedAt": "2026-10-20T01:00:00Z",
  "minSupportedBuild": 120,
  "latestBuild": 145,
  "mode": "RECOMMENDED",
  "effectiveAt": "2026-10-21T00:00:00Z",
  "messageKey": "update.recommended",
  "storeUrl": "https://play.google.com/store/apps/details?id=example.app",
  "policyTtlSeconds": 1800
}
```

Với bản build 118, mode hiệu lực phải tuân theo minSupportedBuild và thời điểm áp dụng, nhưng chỉ mở gate REQUIRED sau khi bản thay thế khả dụng cho phân khúc thiết bị đó. Verify server-owned policy, URL allowlist, auth, ETag/cache TTL, và không tin đồng hồ máy làm nguồn duy nhất cho deadline.

## Luồng đề xuất

```text
App startup / foreground (debounced)
  -> fetch runtime policy (deadline + fallback)
  -> evaluate platform + channel + installed build + eligibility
  -> NONE / INFO / OPTIONAL / RECOMMENDED / REQUIRED
  -> REQUIRED: availability confirmed? -> show gate -> Store -> return -> re-check
  -> policy unavailable: bounded cache + safe degraded behavior; no fabricated forced update
```

## Khác biệt nền tảng

- Android Google Play: Play In-App Updates có flexible và immediate flows; chỉ gọi khi Play xác nhận eligible. Các kênh non-Play cần cơ chế riêng đã được phê duyệt.
- iOS: dẫn đến App Store; phased release có thể trì hoãn automatic updates cho một số người dùng, nên không dựa vào ngày release để giả định người dùng đã có update.
- Không làm người dùng mất draft/session/offline data khi nâng cấp.

## Test matrix tối thiểu

1. Build dưới/bằng/trên minSupportedBuild, current/latest và hotfix; so versionName vs buildCode.
2. Soft dismiss/snooze/cooldown, REQUIRED cannot bypass, reopen/resume duplicate dialog.
3. Offline, 408/500, timeout, malformed policy, stale cache, policy rollback.
4. Store chưa duyệt, rollout theo đợt, region khác, store không cài đặt được, device minOS không tương thích.
5. In-flight form/draft, session, local DB migration, deep link và API compatibility rejection.
6. Server alert khi block spike, staged/canary policies, kill switch và audit.

## Tài liệu nền tảng

- Android Developers: https://developer.android.com/guide/playcore/in-app-updates
- Apple App Store Connect: https://developer.apple.com/help/app-store-connect/update-your-app/release-a-version-update-in-phases
