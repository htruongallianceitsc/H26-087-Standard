/**
 * Định nghĩa catalog tĩnh cho Standards & Capabilities.
 * Biểu diễn theo cây phân cấp.
 */

const STANDARD_CATALOG = [
    {
        key: '01',
        code: '01',
        name: 'Quản trị & Bàn giao',
        title: '01. QUẢN TRỊ & BÀN GIAO',
        type: 'category',
        children: [
            {
                code: 'STD-REQ',
                name: 'Yêu cầu & Tiêu chí chấp nhận',
                title: 'STD-REQ ............ Yêu cầu & Tiêu chí chấp nhận',
                type: 'standard'
            },
            {
                code: 'STD-BIZ',
                name: 'Quy tắc nghiệp vụ & Quy trình nghiệp vụ',
                title: 'STD-BIZ ............ Quy tắc nghiệp vụ & Quy trình nghiệp vụ',
                type: 'standard'
            },
            {
                code: 'STD-FEAT',
                name: 'Đặc tả & Phân rã Feature',
                title: 'STD-FEAT ........... Đặc tả & Phân rã Feature',
                type: 'standard'
            },
            {
                code: 'STD-ARCH',
                name: 'Nguyên tắc kiến trúc & ADR',
                title: 'STD-ARCH ........... Nguyên tắc kiến trúc & ADR',
                type: 'standard'
            },
            {
                code: 'STD-DOC',
                name: 'Tài liệu hóa & Truy vết',
                title: 'STD-DOC ............ Tài liệu hóa & Truy vết',
                type: 'standard'
            },
            {
                code: 'STD-NAME',
                name: 'Đặt tên & Tổ chức mã nguồn',
                title: 'STD-NAME ........... Đặt tên & Tổ chức mã nguồn',
                type: 'standard'
            },
            {
                code: 'STD-GIT',
                name: 'Quy trình Git & Chiến lược Branch',
                title: 'STD-GIT ............ Quy trình Git & Chiến lược Branch',
                type: 'standard'
            },
            {
                code: 'STD-TEST',
                name: 'Chiến lược kiểm thử & Quality Gate',
                title: 'STD-TEST ........... Chiến lược kiểm thử & Quality Gate',
                type: 'standard'
            },
            {
                code: 'STD-PERF-TEST',
                name: 'Kiểm thử hiệu năng, tải & stress',
                title: 'STD-PERF-TEST ...... Kiểm thử hiệu năng, tải & stress',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-TEST'], label: 'Mở rộng STD-TEST' },
                    { type: 'USES', targets: ['STD-PERF', 'STD-SLO'], label: 'Sử dụng STD-PERF, STD-SLO' }
                ]
            },
            {
                code: 'STD-CODE-REVIEW',
                name: 'Code Review & Quản trị Pull Request',
                title: 'STD-CODE-REVIEW .... Code Review & Quản trị Pull Request',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'USES', targets: ['STD-GIT', 'STD-TEST', 'STD-SEC'], label: 'Sử dụng STD-GIT, STD-TEST, STD-SEC' }
                ]
            },
            {
                code: 'STD-VERSIONING',
                name: 'Quản lý phiên bản, Tương thích & Ngừng hỗ trợ',
                title: 'STD-VERSIONING ..... Quản lý phiên bản, Tương thích & Ngừng hỗ trợ',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'USED_BY', targets: ['STD-API', 'STD-CI', 'STD-DEPLOY'], label: 'Được sử dụng bởi STD-API, STD-CI, STD-DEPLOY' }
                ]
            },
            {
                code: 'STD-COMPLIANCE',
                name: 'Tuân thủ quy định & Bằng chứng',
                title: 'STD-COMPLIANCE ..... Tuân thủ quy định & Bằng chứng',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'USES', targets: ['STD-SEC', 'STD-PRIV', 'STD-DOC'], label: 'Sử dụng STD-SEC, STD-PRIV, STD-DOC' }
                ]
            },
            {
                code: 'STD-MONOREPO',
                name: 'Quản lý Monorepo & Workspace',
                title: 'STD-MONOREPO ...... Quản lý Monorepo & Workspace',
                type: 'standard',
                tag: 'MỚI/TÙY CHỌN',
                relations: [
                    { type: 'USES', targets: ['STD-GIT', 'STD-DEP', 'STD-CI'], label: 'Sử dụng STD-GIT, STD-DEP, STD-CI' }
                ]
            },
            {
                code: 'STD-CI',
                name: 'Tích hợp liên tục & Pipeline Build',
                title: 'STD-CI ............. Tích hợp liên tục & Pipeline Build',
                type: 'standard'
            },
            {
                code: 'STD-AI-DEV',
                name: 'Phát triển hỗ trợ bởi AI & Quy trình Agent',
                title: 'STD-AI-DEV ......... Phát triển hỗ trợ bởi AI & Quy trình Agent',
                type: 'standard'
            }
        ]
    },
    {
        key: '02',
        code: '02',
        name: 'Nền tảng Kỹ thuật',
        title: '02. NỀN TẢNG KỸ THUẬT',
        type: 'category',
        children: [
            {
                code: 'STD-ERR',
                name: 'Xử lý & Phân loại lỗi',
                title: 'STD-ERR ............ Xử lý & Phân loại lỗi',
                type: 'standard'
            },
            {
                code: 'STD-LOG',
                name: 'Logging & Observability',
                title: 'STD-LOG ............ Logging & Observability',
                type: 'standard'
            },
            {
                code: 'STD-SEC',
                name: 'Nguyên tắc bảo mật ứng dụng',
                title: 'STD-SEC ............ Nguyên tắc bảo mật ứng dụng',
                type: 'standard'
            },
            {
                code: 'STD-PRIV',
                name: 'Quyền riêng tư, PII & Lưu giữ dữ liệu',
                title: 'STD-PRIV ........... Quyền riêng tư, PII & Lưu giữ dữ liệu',
                type: 'standard'
            },
            {
                code: 'STD-ENV',
                name: 'Môi trường, Cấu hình & Secret',
                title: 'STD-ENV ............ Môi trường, Cấu hình & Secret',
                type: 'standard'
            },
            {
                code: 'STD-I18N',
                name: 'Quốc tế hóa & Bản địa hóa',
                title: 'STD-I18N ........... Quốc tế hóa & Bản địa hóa',
                type: 'standard'
            },
            {
                code: 'STD-ANALYTICS',
                name: 'Phân tích sản phẩm & Theo dõi sự kiện',
                title: 'STD-ANALYTICS ...... Phân tích sản phẩm & Theo dõi sự kiện',
                type: 'standard'
            },
            {
                code: 'STD-PERF',
                name: 'Nguyên tắc kỹ thuật hiệu năng',
                title: 'STD-PERF ........... Nguyên tắc kỹ thuật hiệu năng',
                type: 'standard'
            },
            {
                code: 'STD-RES',
                name: 'Độ tin cậy, Khả năng phục hồi & Chịu lỗi',
                title: 'STD-RES ............ Độ tin cậy, Khả năng phục hồi & Chịu lỗi',
                type: 'standard',
                notes: 'Includes chaos testing principles',
                relations: [
                    { type: 'INCLUDES', label: 'Includes chaos testing principles' }
                ]
            },
            {
                code: 'STD-DEP',
                name: 'Quản lý dependency & Package',
                title: 'STD-DEP ............ Quản lý dependency & Package',
                type: 'standard'
            },
            {
                code: 'STD-FLAG',
                name: 'Feature Flag & Rollout tăng dần',
                title: 'STD-FLAG ........... Feature Flag & Rollout tăng dần',
                type: 'standard'
            }
        ]
    },
    {
        key: '03',
        code: '03',
        name: 'API, Tích hợp & Dữ liệu',
        title: '03. API, TÍCH HỢP & DỮ LIỆU',
        type: 'category',
        children: [
            {
                code: 'STD-API',
                name: 'Hợp đồng API & Quản lý phiên bản',
                title: 'STD-API ............ Hợp đồng API & Quản lý phiên bản',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Sử dụng STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-API-REST',
                name: 'Thiết kế RESTful API',
                title: 'STD-API-REST ....... Thiết kế RESTful API',
                type: 'standard'
            },
            {
                code: 'STD-API-HTTP',
                name: 'Quy ước HTTP Status Code & Phản hồi lỗi API',
                title: 'STD-API-HTTP .... Quy ước HTTP Status Code & Phản hồi lỗi API',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'EXTENDS', targets: ["STD-API"], label: 'Mở rộng STD-API' },
                    { type: 'USES', targets: ["STD-API-REST", "STD-ERR", "STD-FEEDBACK", "STD-LOG", "STD-SEC"], label: 'Sử dụng STD-API-REST, STD-ERR, STD-FEEDBACK, STD-LOG, STD-SEC' }
                ]
            },
            {
                code: 'STD-API-RT',
                name: 'API thời gian thực & WebSocket/SSE',
                title: 'STD-API-RT ......... API thời gian thực & WebSocket/SSE',
                type: 'standard'
            },
            {
                code: 'STD-DEEP-LINK',
                name: 'Deep Link, Universal Links & App Links',
                title: 'STD-DEEP-LINK .... Deep Link, Universal Links & App Links',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'USES', targets: ["STD-MOB-NAV", "STD-WEB-ROUTE", "STD-SEC", "STD-PRIV", "STD-INTEGRATION", "STD-MOB-RELEASE"], label: 'Sử dụng STD-MOB-NAV, STD-WEB-ROUTE, STD-SEC, STD-PRIV, STD-INTEGRATION, STD-MOB-RELEASE' }
                ]
            },
            {
                code: 'STD-INTEGRATION',
                name: 'Tích hợp bên thứ ba',
                title: 'STD-INTEGRATION .... Tích hợp bên thứ ba',
                type: 'standard'
            },
            {
                code: 'STD-WEBHOOK',
                name: 'Webhook & Hợp đồng sự kiện',
                title: 'STD-WEBHOOK ........ Webhook & Hợp đồng sự kiện',
                type: 'standard'
            },
            {
                code: 'STD-DATA',
                name: 'Mô hình dữ liệu & Thiết kế Schema',
                title: 'STD-DATA ........... Mô hình dữ liệu & Thiết kế Schema',
                type: 'standard'
            },
            {
                code: 'STD-DATA-TX',
                name: 'Giao dịch, Đồng thời & Tính nhất quán',
                title: 'STD-DATA-TX ........ Giao dịch, Đồng thời & Tính nhất quán',
                type: 'standard'
            },
            {
                code: 'STD-DATA-MIG',
                name: 'Tiến hóa Schema & Migration cơ sở dữ liệu',
                title: 'STD-DATA-MIG ....... Tiến hóa Schema & Migration cơ sở dữ liệu',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Sử dụng STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-CACHE',
                name: 'Bộ nhớ đệm & Vô hiệu hóa Cache',
                title: 'STD-CACHE .......... Bộ nhớ đệm & Vô hiệu hóa Cache',
                type: 'standard'
            }
        ]
    },
    {
        key: '04',
        code: '04',
        name: 'Trải nghiệm — UI / UX',
        title: '04. TRẢI NGHIỆM — UI / UX',
        type: 'category',
        children: [
            {
                code: 'STD-UX',
                name: 'Nguyên tắc UX & Tương tác',
                title: 'STD-UX ............. Nguyên tắc UX & Tương tác',
                type: 'standard'
            },
            {
                code: 'STD-UI-STATE',
                name: 'Trạng thái UI & Cách trình bày trạng thái',
                title: 'STD-UI-STATE ....... Trạng thái UI & Cách trình bày trạng thái',
                type: 'standard'
            },
            {
                code: 'STD-FEEDBACK',
                name: 'Phản hồi, Thông báo & Messaging',
                title: 'STD-FEEDBACK ....... Phản hồi, Thông báo & Messaging',
                type: 'standard'
            },
            {
                code: 'STD-FORM',
                name: 'Trải nghiệm Form & Validation',
                title: 'STD-FORM ........... Trải nghiệm Form & Validation',
                type: 'standard'
            },
            {
                code: 'STD-A11Y',
                name: 'Khả năng tiếp cận & Thiết kế hòa nhập',
                title: 'STD-A11Y ........... Khả năng tiếp cận & Thiết kế hòa nhập',
                type: 'standard'
            },
            {
                code: 'STD-DESIGN',
                name: 'Bàn giao thiết kế & Độ trung thực',
                title: 'STD-DESIGN ......... Bàn giao thiết kế & Độ trung thực',
                type: 'standard'
            },
            {
                code: 'STD-DS',
                name: 'Design System & Component dùng chung',
                title: 'STD-DS ............. Design System & Component dùng chung',
                type: 'standard'
            }
        ]
    },
    {
        key: '05',
        code: '05',
        name: 'Nền tảng Web',
        title: '05. NỀN TẢNG WEB',
        type: 'category',
        children: [
            {
                code: 'STD-WEB-ARCH',
                name: 'Kiến trúc ứng dụng Web',
                title: 'STD-WEB-ARCH ....... Kiến trúc ứng dụng Web',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Mở rộng STD-ARCH' }
                ]
            },
            {
                code: 'STD-WEB-ROUTE',
                name: 'Routing, Điều hướng & Trạng thái URL',
                title: 'STD-WEB-ROUTE ...... Routing, Điều hướng & Trạng thái URL',
                type: 'standard',
                relations: [
                    { type: 'ALIGNS_WITH', targets: ['STD-UX'], label: 'Căn chỉnh với STD-UX' }
                ]
            },
            {
                code: 'STD-WEB-RESP',
                name: 'Layout Responsive',
                title: 'STD-WEB-RESP ....... Layout Responsive',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-DS', 'STD-A11Y'], label: 'Sử dụng STD-DS, STD-A11Y' }
                ]
            },
            {
                code: 'STD-WEB-FORM',
                name: 'Form trình duyệt & Validation',
                title: 'STD-WEB-FORM ....... Form trình duyệt & Validation',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-FORM'], label: 'Mở rộng STD-FORM' }
                ]
            },
            {
                code: 'STD-WEB-AUTH',
                name: 'Xác thực trình duyệt & Session',
                title: 'STD-WEB-AUTH ....... Xác thực trình duyệt & Session',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-SEC', 'STD-WEB-SEC'], label: 'Sử dụng STD-SEC, STD-WEB-SEC' }
                ]
            },
            {
                code: 'STD-WEB-STORE',
                name: 'Lưu trữ trình duyệt & Persistence',
                title: 'STD-WEB-STORE ...... Lưu trữ trình duyệt & Persistence',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-CACHE', 'STD-WEB-SEC'], label: 'Sử dụng STD-CACHE, STD-WEB-SEC' }
                ]
            },
            {
                code: 'STD-WEB-SEC',
                name: 'Bảo mật trình duyệt & Ứng dụng Web',
                title: 'STD-WEB-SEC ........ Bảo mật trình duyệt & Ứng dụng Web',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Mở rộng STD-SEC' }
                ]
            },
            {
                code: 'STD-WEB-PERF',
                name: 'Hiệu năng Render Web & Bộ nhớ',
                title: 'STD-WEB-PERF ....... Hiệu năng Render Web & Bộ nhớ',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Mở rộng STD-PERF' }
                ]
            },
            {
                code: 'STD-WEB-SEO',
                name: 'SEO & Chiến lược Rendering',
                title: 'STD-WEB-SEO ........ SEO & Chiến lược Rendering',
                type: 'standard'
            },
            {
                code: 'STD-WEB-PWA',
                name: 'Progressive Web App (PWA)',
                title: 'STD-WEB-PWA ........ Progressive Web App (PWA)',
                type: 'standard'
            }
        ]
    },
    {
        key: '06',
        code: '06',
        name: 'Nền tảng Mobile',
        title: '06. NỀN TẢNG MOBILE',
        type: 'category',
        children: [
            {
                code: 'STD-MOB-ARCH',
                name: 'Kiến trúc ứng dụng Mobile',
                title: 'STD-MOB-ARCH ....... Kiến trúc ứng dụng Mobile',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Mở rộng STD-ARCH' }
                ]
            },
            {
                code: 'STD-MOB-NAV',
                name: 'Điều hướng, Routing & Deep Linking',
                title: 'STD-MOB-NAV ........ Điều hướng, Routing & Deep Linking',
                type: 'standard',
                relations: [
                    { type: 'ALIGNS_WITH', targets: ['STD-UX'], label: 'Căn chỉnh với STD-UX' }
                ]
            },
            {
                code: 'STD-MOB-LIFE',
                name: 'Vòng đời & Thực thi nền',
                title: 'STD-MOB-LIFE ....... Vòng đời & Thực thi nền',
                type: 'standard'
            },
            {
                code: 'STD-MOB-STORE',
                name: 'Lưu trữ cục bộ & Lưu trữ an toàn',
                title: 'STD-MOB-STORE ...... Lưu trữ cục bộ & Lưu trữ an toàn',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-CACHE', 'STD-MOB-SEC'], label: 'Sử dụng STD-CACHE, STD-MOB-SEC' }
                ]
            },
            {
                code: 'STD-MOB-OFF',
                name: 'Offline, Kết nối & Đồng bộ',
                title: 'STD-MOB-OFF ........ Offline, Kết nối & Đồng bộ',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-RES', 'STD-CACHE'], label: 'Sử dụng STD-RES, STD-CACHE' }
                ]
            },
            {
                code: 'STD-MOB-PUSH',
                name: 'Push Notification & Routing',
                title: 'STD-MOB-PUSH ....... Push Notification & Routing',
                type: 'standard'
            },
            {
                code: 'STD-MOB-DEVICE',
                name: 'Quyền thiết bị & Khả năng nền tảng',
                title: 'STD-MOB-DEVICE ..... Quyền thiết bị & Khả năng nền tảng',
                type: 'standard'
            },
            {
                code: 'STD-MOB-UI',
                name: 'Layout Mobile, Safe Area & Bàn phím',
                title: 'STD-MOB-UI ......... Layout Mobile, Safe Area & Bàn phím',
                type: 'standard',
                relations: [
                    {
                        type: 'USES',
                        targets: ['STD-UX', 'STD-DS', 'STD-A11Y', 'STD-FORM', 'STD-UI-STATE'],
                        label: 'Sử dụng STD-UX, STD-DS, STD-A11Y, STD-FORM, STD-UI-STATE'
                    }
                ]
            },
            {
                code: 'STD-MOB-SEC',
                name: 'Bảo mật ứng dụng Mobile',
                title: 'STD-MOB-SEC ........ Bảo mật ứng dụng Mobile',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Mở rộng STD-SEC' }
                ]
            },
            {
                code: 'STD-MOB-RELEASE',
                name: 'Build Mobile, Ký ứng dụng & Phát hành Store',
                title: 'STD-MOB-RELEASE .... Build Mobile, Ký ứng dụng & Phát hành Store',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Sử dụng STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-MOB-PERF',
                name: 'Hiệu năng khởi động, Bộ nhớ & Pin',
                title: 'STD-MOB-PERF ....... Hiệu năng khởi động, Bộ nhớ & Pin',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Mở rộng STD-PERF' }
                ]
            }
        ]
    },
    {
        key: '07',
        code: '07',
        name: 'Nền tảng Backend',
        title: '07. NỀN TẢNG BACKEND',
        type: 'category',
        children: [
            {
                code: 'STD-BE-ARCH',
                name: 'Kiến trúc ứng dụng Backend',
                title: 'STD-BE-ARCH ........ Kiến trúc ứng dụng Backend',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Mở rộng STD-ARCH' }
                ]
            },
            {
                code: 'STD-BE-AUTH',
                name: 'Xác thực & Phân quyền',
                title: 'STD-BE-AUTH ........ Xác thực & Phân quyền',
                type: 'standard'
            },
            {
                code: 'STD-BE-VALID',
                name: 'Xác thực Request & Domain',
                title: 'STD-BE-VALID ....... Xác thực Request & Domain',
                type: 'standard'
            },
            {
                code: 'STD-BE-SEC',
                name: 'Bảo mật & Hardening Backend',
                title: 'STD-BE-SEC ......... Bảo mật & Hardening Backend',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Mở rộng STD-SEC' }
                ]
            },
            {
                code: 'STD-BE-TX',
                name: 'Quản lý giao dịch & Unit of Work',
                title: 'STD-BE-TX .......... Quản lý giao dịch & Unit of Work',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-DATA-TX'], label: 'Mở rộng STD-DATA-TX' }
                ]
            },
            {
                code: 'STD-BE-CONCUR',
                name: 'Xử lý đồng thời & Tính idempotent',
                title: 'STD-BE-CONCUR ...... Xử lý đồng thời & Tính idempotent',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-DATA-TX', 'STD-RES'], label: 'Sử dụng STD-DATA-TX, STD-RES' }
                ]
            },
            {
                code: 'STD-BE-JOB',
                name: 'Tác vụ nền & Lập lịch',
                title: 'STD-BE-JOB ......... Tác vụ nền & Lập lịch',
                type: 'standard'
            },
            {
                code: 'STD-BE-QUEUE',
                name: 'Hàng đợi & Xử lý hướng sự kiện',
                title: 'STD-BE-QUEUE ....... Hàng đợi & Xử lý hướng sự kiện',
                type: 'standard'
            },
            {
                code: 'STD-BE-FILE',
                name: 'Xử lý tệp & Object Storage',
                title: 'STD-BE-FILE ........ Xử lý tệp & Object Storage',
                type: 'standard'
            },
            {
                code: 'STD-BE-HEALTH',
                name: 'Readiness, Liveness & Health Check',
                title: 'STD-BE-HEALTH ...... Readiness, Liveness & Health Check',
                type: 'standard'
            },
            {
                code: 'STD-BE-PERF',
                name: 'Hiệu năng & Khả năng mở rộng',
                title: 'STD-BE-PERF ........ Hiệu năng & Khả năng mở rộng',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Mở rộng STD-PERF' }
                ]
            }
        ]
    },
    {
        key: '08',
        code: '08',
        name: 'Công nghệ',
        title: '08. CÔNG NGHỆ',
        type: 'category',
        children: [
            {
                key: '08.1',
                code: '08.1',
                name: 'Công nghệ Web',
                title: '08.1. CÔNG NGHỆ WEB',
                type: 'category',
                children: [
                    {
                        code: 'STD-REACT',
                        name: 'React Component & Hook',
                        title: 'STD-REACT ...... React Component & Hook',
                        type: 'standard'
                    },
                    {
                        code: 'STD-TS',
                        name: 'Quy ước TypeScript',
                        title: 'STD-TS ......... Quy ước TypeScript',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RQ',
                        name: 'TanStack Query',
                        title: 'STD-RQ ......... TanStack Query',
                        type: 'standard'
                    },
                    {
                        code: 'STD-NEXT',
                        name: 'Kiến trúc Next.js',
                        title: 'STD-NEXT ....... Kiến trúc Next.js',
                        type: 'standard'
                    },
                    {
                        code: 'STD-REACT-TEST',
                        name: 'Kiểm thử React, Vitest/Jest & RTL',
                        title: 'STD-REACT-TEST . Kiểm thử React, Vitest/Jest & RTL',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Hiện thực STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.2',
                code: '08.2',
                name: 'Công nghệ React Native',
                title: '08.2. CÔNG NGHỆ REACT NATIVE',
                type: 'category',
                children: [
                    {
                        code: 'STD-RN',
                        name: 'Kiến trúc React Native',
                        title: 'STD-RN ......... Kiến trúc React Native',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-NAV',
                        name: 'Điều hướng & Expo Router',
                        title: 'STD-RN-NAV ..... Điều hướng & Expo Router',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-STATE',
                        name: 'Quản lý State React Native',
                        title: 'STD-RN-STATE ... Quản lý State React Native',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-STORE',
                        name: 'Lưu trữ cục bộ & An toàn',
                        title: 'STD-RN-STORE ... Lưu trữ cục bộ & An toàn',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-MOB-STORE'], label: 'Hiện thực STD-MOB-STORE' }
                        ]
                    },
                    {
                        code: 'STD-RN-TEST',
                        name: 'Jest & React Native Testing Library',
                        title: 'STD-RN-TEST .... Jest & React Native Testing Library',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Hiện thực STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.3',
                code: '08.3',
                name: 'Công nghệ Flutter',
                title: '08.3. CÔNG NGHỆ FLUTTER',
                type: 'category',
                children: [
                    {
                        code: 'STD-FL-DART',
                        name: 'Quy ước Dart',
                        title: 'STD-FL-DART .... Quy ước Dart',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-BLOC',
                        name: 'Flutter BLoC & Cubit',
                        title: 'STD-FL-BLOC .... Flutter BLoC & Cubit',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-WIDGET',
                        name: 'Tổ hợp Widget & Theming',
                        title: 'STD-FL-WIDGET .. Tổ hợp Widget & Theming',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-ROUTE',
                        name: 'Điều hướng Flutter & go_router',
                        title: 'STD-FL-ROUTE ... Điều hướng Flutter & go_router',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-TEST',
                        name: 'flutter_test, bloc_test & Kiểm thử tích hợp',
                        title: 'STD-FL-TEST .... flutter_test, bloc_test & Kiểm thử tích hợp',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Hiện thực STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.4',
                code: '08.4',
                name: 'Công nghệ Backend — .NET',
                title: '08.4. CÔNG NGHỆ BACKEND — .NET',
                type: 'category',
                children: [
                    {
                        code: 'STD-DOTNET',
                        name: 'Kiến trúc ASP.NET Core',
                        title: 'STD-DOTNET ..... Kiến trúc ASP.NET Core',
                        type: 'standard'
                    },
                    {
                        code: 'STD-DOTNET-API',
                        name: 'API, Dependency Injection & Middleware',
                        title: 'STD-DOTNET-API . API, Dependency Injection & Middleware',
                        type: 'standard'
                    },
                    {
                        code: 'STD-DOTNET-EF',
                        name: 'Entity Framework Core',
                        title: 'STD-DOTNET-EF .. Entity Framework Core',
                        type: 'standard',
                        relations: [
                            {
                                type: 'IMPLEMENTS',
                                targets: ['STD-DATA', 'STD-DATA-TX', 'STD-DATA-MIG'],
                                label: 'Hiện thực STD-DATA, STD-DATA-TX, STD-DATA-MIG'
                            },
                            { type: 'USES', targets: ['STD-BE-TX'], label: 'Sử dụng STD-BE-TX' }
                        ]
                    },
                    {
                        code: 'STD-DOTNET-TEST',
                        name: 'xUnit & Kiểm thử tích hợp',
                        title: 'STD-DOTNET-TEST  xUnit & Kiểm thử tích hợp',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Hiện thực STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.5',
                code: '08.5',
                name: 'Công nghệ Cơ sở dữ liệu',
                title: '08.5. CÔNG NGHỆ CƠ SỞ DỮ LIỆU',
                type: 'category',
                children: [
                    {
                        code: 'STD-PG',
                        name: 'Phát triển PostgreSQL & Migration',
                        title: 'STD-PG ......... Phát triển PostgreSQL & Migration',
                        type: 'standard',
                        relations: [
                            {
                                type: 'IMPLEMENTS',
                                targets: ['STD-DATA', 'STD-DATA-TX', 'STD-DATA-MIG'],
                                label: 'Hiện thực STD-DATA, STD-DATA-TX, STD-DATA-MIG'
                            },
                            { type: 'USES', targets: ['STD-PERF'], label: 'Sử dụng STD-PERF' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        key: '09',
        code: '09',
        name: 'Capability tái sử dụng',
        title: '09. CAPABILITY TÁI SỬ DỤNG',
        type: 'category',
        children: [
            {
                code: 'CAP-AUTH',
                name: 'Xác thực & Đăng ký',
                title: 'CAP-AUTH ........... Xác thực & Đăng ký',
                type: 'capability'
            },
            {
                code: 'CAP-PROFILE',
                name: 'Hồ sơ người dùng & Quản lý tài khoản',
                title: 'CAP-PROFILE ........ Hồ sơ người dùng & Quản lý tài khoản',
                type: 'capability'
            },
            {
                code: 'CAP-CRUD',
                name: 'CRUD, Danh sách & Phân trang',
                title: 'CAP-CRUD ........... CRUD, Danh sách & Phân trang',
                type: 'capability'
            },
            {
                code: 'CAP-UPLOAD',
                name: 'Tải tệp lên & Tệp đính kèm',
                title: 'CAP-UPLOAD ......... Tải tệp lên & Tệp đính kèm',
                type: 'capability'
            },
            {
                code: 'CAP-NOTIFY',
                name: 'Phân phối thông báo',
                title: 'CAP-NOTIFY ......... Phân phối thông báo',
                type: 'capability'
            },
            {
                code: 'CAP-CHAT',
                name: 'Trò chuyện thời gian thực',
                title: 'CAP-CHAT ........... Trò chuyện thời gian thực',
                type: 'capability'
            },
            {
                code: 'CAP-SHARE',
                name: 'Chia sẻ, QR & Deep Link',
                title: 'CAP-SHARE .......... Chia sẻ, QR & Deep Link',
                type: 'capability'
            },
            {
                code: 'CAP-AUDIT',
                name: 'Nhật ký kiểm toán & Lịch sử thay đổi',
                title: 'CAP-AUDIT .......... Nhật ký kiểm toán & Lịch sử thay đổi',
                type: 'capability'
            },
            {
                code: 'CAP-PERM',
                name: 'Vai trò & Quyền hạn',
                title: 'CAP-PERM ........... Vai trò & Quyền hạn',
                type: 'capability'
            },
            {
                code: 'CAP-SEARCH',
                name: 'Tìm kiếm & Lập chỉ mục',
                title: 'CAP-SEARCH ......... Tìm kiếm & Lập chỉ mục',
                type: 'capability'
            },
            {
                code: 'CAP-PAYMENT',
                name: 'Thanh toán & Lập hóa đơn',
                title: 'CAP-PAYMENT ........ Thanh toán & Lập hóa đơn',
                type: 'capability'
            },
            {
                code: 'CAP-REPORT',
                name: 'Báo cáo & Dashboard',
                title: 'CAP-REPORT ......... Báo cáo & Dashboard',
                type: 'capability'
            }
        ]
    },
    {
        key: '10',
        code: '10',
        name: 'Vận hành & Hạ tầng',
        title: '10. VẬN HÀNH & HẠ TẦNG',
        type: 'category',
        children: [
            {
                code: 'STD-DEPLOY',
                name: 'Triển khai, Rollout & Rollback',
                title: 'STD-DEPLOY ......... Triển khai, Rollout & Rollback',
                type: 'standard',
                relations: [
                    {
                        type: 'USES',
                        targets: ['STD-CI', 'STD-FLAG', 'STD-VERSIONING'],
                        label: 'Sử dụng STD-CI, STD-FLAG, STD-VERSIONING'
                    }
                ]
            },
            {
                code: 'STD-IAC',
                name: 'Hạ tầng dưới dạng mã nguồn',
                title: 'STD-IAC ............ Hạ tầng dưới dạng mã nguồn',
                type: 'standard'
            },
            {
                code: 'STD-NET',
                name: 'Mạng, DNS, TLS & Bảo mật hạ tầng',
                title: 'STD-NET ............ Mạng, DNS, TLS & Bảo mật hạ tầng',
                type: 'standard'
            },
            {
                code: 'STD-BACKUP',
                name: 'Sao lưu & Khôi phục',
                title: 'STD-BACKUP ......... Sao lưu & Khôi phục',
                type: 'standard'
            },
            {
                code: 'STD-DR',
                name: 'Khôi phục sau thảm họa',
                title: 'STD-DR ............. Khôi phục sau thảm họa',
                type: 'standard'
            },
            {
                code: 'STD-SLO',
                name: 'Mục tiêu mức dịch vụ (SLO)',
                title: 'STD-SLO ............ Mục tiêu mức dịch vụ (SLO)',
                type: 'standard'
            },
            {
                code: 'STD-COST',
                name: 'Quản trị chi phí hạ tầng & Cloud',
                title: 'STD-COST ........... Quản trị chi phí hạ tầng & Cloud',
                type: 'standard',
                tag: 'MỚI',
                relations: [
                    { type: 'USES', targets: ['STD-LOG', 'STD-PERF', 'STD-SLO'], label: 'Sử dụng STD-LOG, STD-PERF, STD-SLO' }
                ]
            },
            {
                code: 'STD-INCIDENT',
                name: 'Quản lý sự cố & Postmortem',
                title: 'STD-INCIDENT ....... Quản lý sự cố & Postmortem',
                type: 'standard'
            },
            {
                code: 'STD-RUNBOOK',
                name: 'Runbook vận hành & Bảo trì',
                title: 'STD-RUNBOOK ........ Runbook vận hành & Bảo trì',
                type: 'standard'
            }
        ]
    }
];

module.exports = {
    STANDARD_CATALOG
};
