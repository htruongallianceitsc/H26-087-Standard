# Flutter Runtime Standards Review — 2026-10-16

## Mục tiêu

Bổ sung các rule thực tiễn về performance/memory, process death/state restoration, API mocking và motion/haptics vào catalog hiện tại mà không đưa chi tiết riêng của một project cụ thể vào standard dùng chung.

## Phân loại đã chọn

- `STD-MOB-PERF`: outcome chung cho image memory, long-list virtualization và resource lifecycle.
- `STD-MOB-LIFE`: process recreation và draft persistence.
- `STD-API` + `STD-ENV`: contract-aligned fixture/mock và guard cấu hình mock.
- `STD-FEEDBACK`: motion token, reduce-motion và haptic semantics.
- `STD-FL-WIDGET`: cách hiện thực Flutter cho lazy list, image decode/cache, dispose và RestorationMixin.
- `STD-FL-TEST`: mock ApiClient/Dio theo config, test restoration và memory regression.

## Các điểm cố ý không bê nguyên từ report tham khảo

1. Không bắt buộc tuyệt đối package `cached_network_image`; starter kit có thể chọn package này làm default nhưng standard ưu tiên tiêu chí cache + target-size decode để tránh khóa công nghệ không cần thiết.
2. Không yêu cầu `addAutomaticKeepAlives: false` cho mọi list; chỉ tắt khi state item không cần giữ hoặc đã được quản lý bên ngoài.
3. Không ép `itemExtent`/`prototypeItem` khi item có chiều cao động.
4. Không yêu cầu lưu draft ở mọi keystroke; dùng debounce/mốc thay đổi để giảm I/O và write amplification.
5. Không rung cho mọi lỗi; haptic là feedback bổ trợ, phải có semantic và tôn trọng accessibility/thiết bị.
6. Mock API phải bị chặn ở production và fixture phải deserialize bằng cùng model/contract production.

## Phiên bản

Các standard bị thay đổi được nâng từ `1.1.0` lên `1.2.0`.
