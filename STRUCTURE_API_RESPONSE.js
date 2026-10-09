/** GENERATED FROM STANDARD JSON FILES. DO NOT EDIT MANUALLY. */
const STANDARD_CATALOG = [
  {
    "key": "01",
    "code": "01",
    "name": "Governance & Delivery",
    "title": "01. GOVERNANCE & DELIVERY",
    "type": "category",
    "children": [
      {
        "code": "STD-AI-DEV",
        "name": "Phát triển hỗ trợ bởi AI & Quy trình Agent",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": [
          {
            "code": "STD-DOC",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-ARCH",
        "name": "Nguyên tắc kiến trúc & ADR",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-BIZ",
        "name": "Quy tắc nghiệp vụ & Quy trình nghiệp vụ",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-CI",
        "name": "Tích hợp liên tục & Pipeline Build",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-CODE-REVIEW",
        "name": "Code Review & Quản trị Pull Request",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": [
          {
            "code": "STD-GIT",
            "dependency_type": "uses"
          },
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-COMPLIANCE",
        "name": "Tuân thủ quy định & Bằng chứng",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-PRIV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-DOC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-DOC",
        "name": "Tài liệu hóa & Truy vết",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-FEAT",
        "name": "Đặc tả & Phân rã Feature",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-GIT",
        "name": "Quy trình Git & Chiến lược Branch",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-MONOREPO",
        "name": "Quản lý Monorepo & Workspace",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": [
          {
            "code": "STD-GIT",
            "dependency_type": "uses"
          },
          {
            "code": "STD-DEP",
            "dependency_type": "uses"
          },
          {
            "code": "STD-CI",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-NAME",
        "name": "Đặt tên & Tổ chức mã nguồn",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-REQ",
        "name": "Yêu cầu & Tiêu chí chấp nhận",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      },
      {
        "code": "STD-VERSIONING",
        "name": "Quản lý phiên bản, Tương thích & Ngừng hỗ trợ",
        "type": "standard",
        "folder": "01-governance-delivery",
        "depends_on": []
      }
    ]
  },
  {
    "key": "02",
    "code": "02",
    "name": "Engineering Foundation",
    "title": "02. ENGINEERING FOUNDATION",
    "type": "category",
    "children": [
      {
        "code": "STD-ANALYTICS",
        "name": "Phân tích sản phẩm & Theo dõi sự kiện",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-DEP",
        "name": "Quản lý dependency & Package",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-ENV",
        "name": "Môi trường, Cấu hình & Secret",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-ERR",
        "name": "Xử lý & Phân loại lỗi",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-FLAG",
        "name": "Feature Flag & Rollout tăng dần",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-I18N",
        "name": "Quốc tế hóa & Bản địa hóa",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-LOG",
        "name": "Logging & Observability",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-PERF",
        "name": "Nguyên tắc kỹ thuật hiệu năng",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-PRIV",
        "name": "Quyền riêng tư, PII & Lưu giữ dữ liệu",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-RES",
        "name": "Độ tin cậy, Khả năng phục hồi & Chịu lỗi",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      },
      {
        "code": "STD-SEC",
        "name": "Nguyên tắc bảo mật ứng dụng",
        "type": "standard",
        "folder": "02-engineering-foundation",
        "depends_on": []
      }
    ]
  },
  {
    "key": "03",
    "code": "03",
    "name": "API, Integration & Data",
    "title": "03. API, INTEGRATION & DATA",
    "type": "category",
    "children": [
      {
        "code": "STD-API",
        "name": "Hợp đồng API & Quản lý phiên bản",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "requires"
          },
          {
            "code": "STD-VERSIONING",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-API-HTTP",
        "name": "Quy ước HTTP Status Code & Phản hồi lỗi API",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": [
          {
            "code": "STD-API",
            "dependency_type": "extends"
          },
          {
            "code": "STD-API-REST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-ERR",
            "dependency_type": "uses"
          },
          {
            "code": "STD-FEEDBACK",
            "dependency_type": "uses"
          },
          {
            "code": "STD-LOG",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-API-REST",
        "name": "Thiết kế RESTful API",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-API-RT",
        "name": "API thời gian thực & WebSocket/SSE",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-CACHE",
        "name": "Bộ nhớ đệm & Vô hiệu hóa Cache",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-DATA",
        "name": "Mô hình dữ liệu & Thiết kế Schema",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-DATA-MIG",
        "name": "Tiến hóa Schema & Migration cơ sở dữ liệu",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": [
          {
            "code": "STD-VERSIONING",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-DATA-TX",
        "name": "Giao dịch, Đồng thời & Tính nhất quán",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-DEEP-LINK",
        "name": "Deep Link, Universal Links & App Links",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": [
          {
            "code": "STD-MOB-NAV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-WEB-ROUTE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-PRIV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-INTEGRATION",
            "dependency_type": "uses"
          },
          {
            "code": "STD-MOB-RELEASE",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-INTEGRATION",
        "name": "Tích hợp bên thứ ba",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      },
      {
        "code": "STD-WEBHOOK",
        "name": "Webhook & Hợp đồng sự kiện",
        "type": "standard",
        "folder": "03-api-integration-data",
        "depends_on": []
      }
    ]
  },
  {
    "key": "04",
    "code": "04",
    "name": "Experience / UI / UX",
    "title": "04. EXPERIENCE / UI / UX",
    "type": "category",
    "children": [
      {
        "code": "STD-A11Y",
        "name": "Khả năng tiếp cận & Thiết kế hòa nhập",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-DESIGN",
        "name": "Bàn giao thiết kế & Độ trung thực",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-DS",
        "name": "Design System & Component dùng chung",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-FEEDBACK",
        "name": "Phản hồi, Thông báo & Messaging",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-FORM",
        "name": "Trải nghiệm Form & Validation",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-UI-STATE",
        "name": "Trạng thái UI & Cách trình bày trạng thái",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      },
      {
        "code": "STD-UX",
        "name": "Nguyên tắc UX & Tương tác",
        "type": "standard",
        "folder": "04-experience-ui-ux",
        "depends_on": []
      }
    ]
  },
  {
    "key": "05",
    "code": "05",
    "name": "Web Platform",
    "title": "05. WEB PLATFORM",
    "type": "category",
    "children": [
      {
        "code": "STD-WEB-ARCH",
        "name": "Kiến trúc ứng dụng Web",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-ARCH",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-WEB-AUTH",
        "name": "Xác thực trình duyệt & Session",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-WEB-SEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-WEB-FORM",
        "name": "Form trình duyệt & Validation",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-FORM",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-WEB-PERF",
        "name": "Hiệu năng Render Web & Bộ nhớ",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-PERF",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-WEB-PWA",
        "name": "Progressive Web App (PWA)",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": []
      },
      {
        "code": "STD-WEB-RESP",
        "name": "Layout Responsive",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-DS",
            "dependency_type": "uses"
          },
          {
            "code": "STD-A11Y",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-WEB-ROUTE",
        "name": "Routing, Điều hướng & Trạng thái URL",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-UX",
            "dependency_type": "aligns_with"
          }
        ]
      },
      {
        "code": "STD-WEB-SEC",
        "name": "Bảo mật trình duyệt & Ứng dụng Web",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-WEB-SEO",
        "name": "SEO & Chiến lược Rendering",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": []
      },
      {
        "code": "STD-WEB-STORE",
        "name": "Lưu trữ trình duyệt & Persistence",
        "type": "standard",
        "folder": "05-web-platform",
        "depends_on": [
          {
            "code": "STD-CACHE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-WEB-SEC",
            "dependency_type": "uses"
          }
        ]
      }
    ]
  },
  {
    "key": "06",
    "code": "06",
    "name": "Mobile Platform",
    "title": "06. MOBILE PLATFORM",
    "type": "category",
    "children": [
      {
        "code": "STD-MOB-ARCH",
        "name": "Kiến trúc ứng dụng Mobile",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-ARCH",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-MOB-DEVICE",
        "name": "Quyền thiết bị & Khả năng nền tảng",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": []
      },
      {
        "code": "STD-MOB-LIFE",
        "name": "Vòng đời & Thực thi nền",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": []
      },
      {
        "code": "STD-MOB-NAV",
        "name": "Điều hướng, Routing & Deep Linking",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-UX",
            "dependency_type": "aligns_with"
          }
        ]
      },
      {
        "code": "STD-MOB-OFF",
        "name": "Offline, Kết nối & Đồng bộ",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-RES",
            "dependency_type": "uses"
          },
          {
            "code": "STD-CACHE",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-MOB-PERF",
        "name": "Hiệu năng khởi động, Bộ nhớ & Pin",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-PERF",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-MOB-PUSH",
        "name": "Push Notification & Routing",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": []
      },
      {
        "code": "STD-MOB-RELEASE",
        "name": "Build Mobile, Ký ứng dụng & Phát hành Store",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-VERSIONING",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-MOB-SEC",
        "name": "Bảo mật ứng dụng Mobile",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-MOB-STORE",
        "name": "Lưu trữ cục bộ & Lưu trữ an toàn",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-CACHE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-MOB-SEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-MOB-UI",
        "name": "Layout Mobile, Safe Area & Bàn phím",
        "type": "standard",
        "folder": "06-mobile-platform",
        "depends_on": [
          {
            "code": "STD-UX",
            "dependency_type": "uses"
          },
          {
            "code": "STD-DS",
            "dependency_type": "uses"
          },
          {
            "code": "STD-A11Y",
            "dependency_type": "uses"
          },
          {
            "code": "STD-FORM",
            "dependency_type": "uses"
          },
          {
            "code": "STD-UI-STATE",
            "dependency_type": "uses"
          }
        ]
      }
    ]
  },
  {
    "key": "07",
    "code": "07",
    "name": "Backend Platform",
    "title": "07. BACKEND PLATFORM",
    "type": "category",
    "children": [
      {
        "code": "STD-BE-ARCH",
        "name": "Kiến trúc ứng dụng Backend",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": [
          {
            "code": "STD-ARCH",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-BE-AUTH",
        "name": "Xác thực & Phân quyền",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      },
      {
        "code": "STD-BE-CONCUR",
        "name": "Xử lý đồng thời & Tính idempotent",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": [
          {
            "code": "STD-DATA-TX",
            "dependency_type": "uses"
          },
          {
            "code": "STD-RES",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-BE-FILE",
        "name": "Xử lý tệp & Object Storage",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      },
      {
        "code": "STD-BE-HEALTH",
        "name": "Readiness, Liveness & Health Check",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      },
      {
        "code": "STD-BE-JOB",
        "name": "Tác vụ nền & Lập lịch",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      },
      {
        "code": "STD-BE-PERF",
        "name": "Hiệu năng & Khả năng mở rộng",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": [
          {
            "code": "STD-PERF",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-BE-QUEUE",
        "name": "Hàng đợi & Xử lý hướng sự kiện",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      },
      {
        "code": "STD-BE-SEC",
        "name": "Bảo mật & Hardening Backend",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-BE-TX",
        "name": "Quản lý giao dịch & Unit of Work",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": [
          {
            "code": "STD-DATA-TX",
            "dependency_type": "extends"
          }
        ]
      },
      {
        "code": "STD-BE-VALID",
        "name": "Xác thực Request & Domain",
        "type": "standard",
        "folder": "07-backend-platform",
        "depends_on": []
      }
    ]
  },
  {
    "key": "08",
    "code": "08",
    "name": "Technology",
    "title": "08. TECHNOLOGY",
    "type": "category",
    "children": [
      {
        "code": "STD-NEXT",
        "name": "Kiến trúc Next.js",
        "type": "standard",
        "folder": "08-technology/08.1-web-technology",
        "depends_on": [
          {
            "code": "STD-WEB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-REACT",
        "name": "React Component & Hook",
        "type": "standard",
        "folder": "08-technology/08.1-web-technology",
        "depends_on": [
          {
            "code": "STD-WEB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-REACT-TEST",
        "name": "Kiểm thử React, Vitest/Jest & RTL",
        "type": "standard",
        "folder": "08-technology/08.1-web-technology",
        "depends_on": [
          {
            "code": "STD-WEB-ARCH",
            "dependency_type": "requires"
          },
          {
            "code": "STD-TEST",
            "dependency_type": "implements"
          }
        ]
      },
      {
        "code": "STD-RQ",
        "name": "TanStack Query",
        "type": "standard",
        "folder": "08-technology/08.1-web-technology",
        "depends_on": [
          {
            "code": "STD-WEB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-TS",
        "name": "Quy ước TypeScript",
        "type": "standard",
        "folder": "08-technology/08.1-web-technology",
        "depends_on": [
          {
            "code": "STD-WEB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-RN",
        "name": "Kiến trúc React Native",
        "type": "standard",
        "folder": "08-technology/08.2-react-native-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-RN-NAV",
        "name": "Điều hướng & Expo Router",
        "type": "standard",
        "folder": "08-technology/08.2-react-native-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-RN-STATE",
        "name": "Quản lý State React Native",
        "type": "standard",
        "folder": "08-technology/08.2-react-native-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-RN-STORE",
        "name": "Lưu trữ cục bộ & An toàn",
        "type": "standard",
        "folder": "08-technology/08.2-react-native-technology",
        "depends_on": [
          {
            "code": "STD-MOB-STORE",
            "dependency_type": "implements"
          }
        ]
      },
      {
        "code": "STD-RN-TEST",
        "name": "Jest & React Native Testing Library",
        "type": "standard",
        "folder": "08-technology/08.2-react-native-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          },
          {
            "code": "STD-TEST",
            "dependency_type": "implements"
          }
        ]
      },
      {
        "code": "STD-FL-BLOC",
        "name": "Flutter BLoC & Cubit",
        "type": "standard",
        "folder": "08-technology/08.3-flutter-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-FL-DART",
        "name": "Quy ước Dart",
        "type": "standard",
        "folder": "08-technology/08.3-flutter-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-FL-ROUTE",
        "name": "Điều hướng Flutter & go_router",
        "type": "standard",
        "folder": "08-technology/08.3-flutter-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-FL-TEST",
        "name": "flutter_test, bloc_test & Kiểm thử tích hợp",
        "type": "standard",
        "folder": "08-technology/08.3-flutter-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          },
          {
            "code": "STD-TEST",
            "dependency_type": "implements"
          }
        ]
      },
      {
        "code": "STD-FL-WIDGET",
        "name": "Tổ hợp Widget & Theming",
        "type": "standard",
        "folder": "08-technology/08.3-flutter-technology",
        "depends_on": [
          {
            "code": "STD-MOB-ARCH",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-DOTNET",
        "name": "Kiến trúc ASP.NET Core",
        "type": "standard",
        "folder": "08-technology/08.4-backend-technology-dotnet",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "STD-DOTNET-API",
        "name": "API, Dependency Injection & Middleware",
        "type": "standard",
        "folder": "08-technology/08.4-backend-technology-dotnet",
        "depends_on": []
      },
      {
        "code": "STD-DOTNET-EF",
        "name": "Entity Framework Core",
        "type": "standard",
        "folder": "08-technology/08.4-backend-technology-dotnet",
        "depends_on": [
          {
            "code": "STD-DATA",
            "dependency_type": "implements"
          },
          {
            "code": "STD-DATA-TX",
            "dependency_type": "implements"
          },
          {
            "code": "STD-DATA-MIG",
            "dependency_type": "implements"
          },
          {
            "code": "STD-BE-TX",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-DOTNET-TEST",
        "name": "xUnit & Kiểm thử tích hợp",
        "type": "standard",
        "folder": "08-technology/08.4-backend-technology-dotnet",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "implements"
          }
        ]
      },
      {
        "code": "STD-PG",
        "name": "Phát triển PostgreSQL & Migration",
        "type": "standard",
        "folder": "08-technology/08.5-database-technology",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "requires"
          },
          {
            "code": "STD-DATA",
            "dependency_type": "implements"
          },
          {
            "code": "STD-DATA-TX",
            "dependency_type": "implements"
          },
          {
            "code": "STD-DATA-MIG",
            "dependency_type": "implements"
          },
          {
            "code": "STD-PERF",
            "dependency_type": "uses"
          }
        ]
      }
    ]
  },
  {
    "key": "09",
    "code": "09",
    "name": "Reusable Capabilities",
    "title": "09. REUSABLE CAPABILITIES",
    "type": "category",
    "children": [
      {
        "code": "CAP-AUDIT",
        "name": "Nhật ký kiểm toán & Lịch sử thay đổi",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-AUTH",
        "name": "Xác thực & Đăng ký",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-CHAT",
        "name": "Trò chuyện thời gian thực",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-CRUD",
        "name": "CRUD, Danh sách & Phân trang",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-NOTIFY",
        "name": "Phân phối thông báo",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-PAYMENT",
        "name": "Thanh toán & Lập hóa đơn",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": []
      },
      {
        "code": "CAP-PERM",
        "name": "Vai trò & Quyền hạn",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-PROFILE",
        "name": "Hồ sơ người dùng & Quản lý tài khoản",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-REPORT",
        "name": "Báo cáo & Dashboard",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-SEARCH",
        "name": "Tìm kiếm & Lập chỉ mục",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-SHARE",
        "name": "Chia sẻ, QR & Deep Link",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      },
      {
        "code": "CAP-UPLOAD",
        "name": "Tải tệp lên & Tệp đính kèm",
        "type": "capability",
        "folder": "09-reusable-capabilities",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "requires"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "requires"
          }
        ]
      }
    ]
  },
  {
    "key": "10",
    "code": "10",
    "name": "Operations & Infrastructure",
    "title": "10. OPERATIONS & INFRASTRUCTURE",
    "type": "category",
    "children": [
      {
        "code": "STD-BACKUP",
        "name": "Sao lưu & Khôi phục",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-COST",
        "name": "Quản trị chi phí hạ tầng & Cloud",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": [
          {
            "code": "STD-LOG",
            "dependency_type": "uses"
          },
          {
            "code": "STD-PERF",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SLO",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-DEPLOY",
        "name": "Triển khai, Rollout & Rollback",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": [
          {
            "code": "STD-CI",
            "dependency_type": "uses"
          },
          {
            "code": "STD-FLAG",
            "dependency_type": "uses"
          },
          {
            "code": "STD-VERSIONING",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-DR",
        "name": "Khôi phục sau thảm họa",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-IAC",
        "name": "Hạ tầng dưới dạng mã nguồn",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-INCIDENT",
        "name": "Quản lý sự cố & Postmortem",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-NET",
        "name": "Mạng, DNS, TLS & Bảo mật hạ tầng",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-RUNBOOK",
        "name": "Runbook vận hành & Bảo trì",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      },
      {
        "code": "STD-SLO",
        "name": "Mục tiêu mức dịch vụ (SLO)",
        "type": "standard",
        "folder": "10-operations-infrastructure",
        "depends_on": []
      }
    ]
  },
  {
    "key": "11",
    "code": "11",
    "name": "Quality Assurance & Testing",
    "title": "11. QUALITY ASSURANCE & TESTING",
    "type": "category",
    "children": [
      {
        "code": "STD-PERF-TEST",
        "name": "Kiểm thử hiệu năng, tải & stress",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "extends"
          },
          {
            "code": "STD-PERF",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SLO",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-A11Y",
        "name": "Kiểm thử khả năng tiếp cận",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-A11Y",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-UI",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-AC",
        "name": "Xác minh tiêu chí chấp nhận",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-REQ",
            "dependency_type": "uses"
          },
          {
            "code": "STD-BIZ",
            "dependency_type": "uses"
          },
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-API",
        "name": "Kiểm thử API & Hợp đồng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-API",
            "dependency_type": "uses"
          },
          {
            "code": "STD-API-REST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-API-HTTP",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-AUTO",
        "name": "Tự động hóa kiểm thử",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-CI",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-DATA",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-BUG",
        "name": "Quản lý lỗi & Vòng đời Defect",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-ERR",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-EXEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-REG",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-CASE",
        "name": "Thiết kế & Quản lý Test Case",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-AC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-DATA",
        "name": "Quản lý dữ liệu kiểm thử",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-PRIV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-ENV",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-E2E",
        "name": "Kiểm thử luồng End-to-End",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-FEAT",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-CASE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-AUTO",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-ENV",
        "name": "Quản lý môi trường kiểm thử",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-ENV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-DATA",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-EXEC",
        "name": "Thực thi kiểm thử & Bằng chứng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-QC-CASE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-ENV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-BUG",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-GATE",
        "name": "Cổng kiểm soát chất lượng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-TRACE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-REPORT",
            "dependency_type": "uses"
          },
          {
            "code": "STD-CI",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-MOB",
        "name": "Kiểm thử ứng dụng Mobile & Deep Link",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-MOB-LIFE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-MOB-OFF",
            "dependency_type": "uses"
          },
          {
            "code": "STD-MOB-NAV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-DEEP-LINK",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-NEG",
        "name": "Kiểm thử trường hợp âm & Biên",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-ERR",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-CASE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-API-HTTP",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-PLAN",
        "name": "Lập kế hoạch & Phạm vi kiểm thử",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-TEST",
            "dependency_type": "uses"
          },
          {
            "code": "STD-REQ",
            "dependency_type": "uses"
          },
          {
            "code": "STD-FEAT",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-REG",
        "name": "Kiểm thử hồi quy theo thay đổi",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-QC-TRACE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-CASE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-GIT",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-REPORT",
        "name": "Báo cáo kiểm thử & Chỉ số chất lượng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-QC-EXEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-TRACE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-BUG",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-SEC",
        "name": "Kiểm thử bảo mật ứng dụng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-SEC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-PRIV",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-API",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-TRACE",
        "name": "Truy vết kiểm thử & Độ bao phủ",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-DOC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-REQ",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-CASE",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-UAT",
        "name": "Kiểm thử chấp nhận người dùng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-BIZ",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-AC",
            "dependency_type": "uses"
          },
          {
            "code": "STD-QC-EXEC",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-QC-UI",
        "name": "Kiểm thử giao diện & Trải nghiệm người dùng",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-DESIGN",
            "dependency_type": "uses"
          },
          {
            "code": "STD-UI-STATE",
            "dependency_type": "uses"
          },
          {
            "code": "STD-FEEDBACK",
            "dependency_type": "uses"
          },
          {
            "code": "STD-A11Y",
            "dependency_type": "uses"
          }
        ]
      },
      {
        "code": "STD-TEST",
        "name": "Chiến lược kiểm thử & Quality Gate",
        "type": "standard",
        "folder": "11-quality-assurance-testing",
        "depends_on": [
          {
            "code": "STD-REQ",
            "dependency_type": "requires"
          }
        ]
      }
    ]
  }
];
module.exports = { STANDARD_CATALOG };
