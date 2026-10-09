/**
 * Static catalog definition for Standards & Capabilities.
 * Hierarchical tree representation.
 */

const STANDARD_CATALOG = [
    {
        key: '01',
        code: '01',
        name: 'Governance & Delivery',
        title: '01. GOVERNANCE & DELIVERY',
        type: 'category',
        children: [
            {
                code: 'STD-REQ',
                name: 'Requirements & Acceptance Criteria',
                title: 'STD-REQ ............ Requirements & Acceptance Criteria',
                type: 'standard'
            },
            {
                code: 'STD-BIZ',
                name: 'Business Rules & Business Processes',
                title: 'STD-BIZ ............ Business Rules & Business Processes',
                type: 'standard'
            },
            {
                code: 'STD-FEAT',
                name: 'Feature Specification & Decomposition',
                title: 'STD-FEAT ........... Feature Specification & Decomposition',
                type: 'standard'
            },
            {
                code: 'STD-ARCH',
                name: 'Architecture Principles & ADRs',
                title: 'STD-ARCH ........... Architecture Principles & ADRs',
                type: 'standard'
            },
            {
                code: 'STD-DOC',
                name: 'Documentation & Traceability',
                title: 'STD-DOC ............ Documentation & Traceability',
                type: 'standard'
            },
            {
                code: 'STD-NAME',
                name: 'Naming & Code Organization',
                title: 'STD-NAME ........... Naming & Code Organization',
                type: 'standard'
            },
            {
                code: 'STD-GIT',
                name: 'Git Workflow & Branching Strategy',
                title: 'STD-GIT ............ Git Workflow & Branching Strategy',
                type: 'standard'
            },
            {
                code: 'STD-TEST',
                name: 'Testing Strategy & Quality Gates',
                title: 'STD-TEST ........... Testing Strategy & Quality Gates',
                type: 'standard'
            },
            {
                code: 'STD-PERF-TEST',
                name: 'Performance, Load & Stress Testing',
                title: 'STD-PERF-TEST ...... Performance, Load & Stress Testing',
                type: 'standard',
                tag: 'NEW',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-TEST'], label: 'Extends STD-TEST' },
                    { type: 'USES', targets: ['STD-PERF', 'STD-SLO'], label: 'Uses STD-PERF, STD-SLO' }
                ]
            },
            {
                code: 'STD-CODE-REVIEW',
                name: 'Code Review & Pull Request Governance',
                title: 'STD-CODE-REVIEW .... Code Review & Pull Request Governance',
                type: 'standard',
                tag: 'NEW',
                relations: [
                    { type: 'USES', targets: ['STD-GIT', 'STD-TEST', 'STD-SEC'], label: 'Uses STD-GIT, STD-TEST, STD-SEC' }
                ]
            },
            {
                code: 'STD-VERSIONING',
                name: 'Versioning, Compatibility & Deprecation',
                title: 'STD-VERSIONING ..... Versioning, Compatibility & Deprecation',
                type: 'standard',
                tag: 'NEW',
                relations: [
                    { type: 'USED_BY', targets: ['STD-API', 'STD-CI', 'STD-DEPLOY'], label: 'Used by STD-API, STD-CI, STD-DEPLOY' }
                ]
            },
            {
                code: 'STD-COMPLIANCE',
                name: 'Regulatory Compliance & Evidence',
                title: 'STD-COMPLIANCE ..... Regulatory Compliance & Evidence',
                type: 'standard',
                tag: 'NEW',
                relations: [
                    { type: 'USES', targets: ['STD-SEC', 'STD-PRIV', 'STD-DOC'], label: 'Uses STD-SEC, STD-PRIV, STD-DOC' }
                ]
            },
            {
                code: 'STD-MONOREPO',
                name: 'Monorepo & Workspace Management',
                title: 'STD-MONOREPO ...... Monorepo & Workspace Management',
                type: 'standard',
                tag: 'NEW/OPTIONAL',
                relations: [
                    { type: 'USES', targets: ['STD-GIT', 'STD-DEP', 'STD-CI'], label: 'Uses STD-GIT, STD-DEP, STD-CI' }
                ]
            },
            {
                code: 'STD-CI',
                name: 'Continuous Integration & Build Pipeline',
                title: 'STD-CI ............. Continuous Integration & Build Pipeline',
                type: 'standard'
            },
            {
                code: 'STD-AI-DEV',
                name: 'AI-Assisted Development & Agent Workflow',
                title: 'STD-AI-DEV ......... AI-Assisted Development & Agent Workflow',
                type: 'standard'
            }
        ]
    },
    {
        key: '02',
        code: '02',
        name: 'Engineering Foundation',
        title: '02. ENGINEERING FOUNDATION',
        type: 'category',
        children: [
            {
                code: 'STD-ERR',
                name: 'Error Handling & Classification',
                title: 'STD-ERR ............ Error Handling & Classification',
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
                name: 'Application Security Principles',
                title: 'STD-SEC ............ Application Security Principles',
                type: 'standard'
            },
            {
                code: 'STD-PRIV',
                name: 'Privacy, PII & Data Retention',
                title: 'STD-PRIV ........... Privacy, PII & Data Retention',
                type: 'standard'
            },
            {
                code: 'STD-ENV',
                name: 'Environment, Configuration & Secrets',
                title: 'STD-ENV ............ Environment, Configuration & Secrets',
                type: 'standard'
            },
            {
                code: 'STD-I18N',
                name: 'Internationalization & Localization',
                title: 'STD-I18N ........... Internationalization & Localization',
                type: 'standard'
            },
            {
                code: 'STD-ANALYTICS',
                name: 'Product Analytics & Event Tracking',
                title: 'STD-ANALYTICS ...... Product Analytics & Event Tracking',
                type: 'standard'
            },
            {
                code: 'STD-PERF',
                name: 'Performance Engineering Principles',
                title: 'STD-PERF ........... Performance Engineering Principles',
                type: 'standard'
            },
            {
                code: 'STD-RES',
                name: 'Reliability, Resilience & Fault Tolerance',
                title: 'STD-RES ............ Reliability, Resilience & Fault Tolerance',
                type: 'standard',
                notes: 'Includes chaos testing principles',
                relations: [
                    { type: 'INCLUDES', label: 'Includes chaos testing principles' }
                ]
            },
            {
                code: 'STD-DEP',
                name: 'Dependency & Package Management',
                title: 'STD-DEP ............ Dependency & Package Management',
                type: 'standard'
            },
            {
                code: 'STD-FLAG',
                name: 'Feature Flags & Progressive Rollout',
                title: 'STD-FLAG ........... Feature Flags & Progressive Rollout',
                type: 'standard'
            }
        ]
    },
    {
        key: '03',
        code: '03',
        name: 'API, Integration & Data',
        title: '03. API, INTEGRATION & DATA',
        type: 'category',
        children: [
            {
                code: 'STD-API',
                name: 'API Contracts & Versioning',
                title: 'STD-API ............ API Contracts & Versioning',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Uses STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-API-REST',
                name: 'RESTful API Design',
                title: 'STD-API-REST ....... RESTful API Design',
                type: 'standard'
            },
            {
                code: 'STD-API-RT',
                name: 'Realtime API & WebSocket/SSE',
                title: 'STD-API-RT ......... Realtime API & WebSocket/SSE',
                type: 'standard'
            },
            {
                code: 'STD-INTEGRATION',
                name: 'Third-Party Integration',
                title: 'STD-INTEGRATION .... Third-Party Integration',
                type: 'standard'
            },
            {
                code: 'STD-WEBHOOK',
                name: 'Webhook & Event Contracts',
                title: 'STD-WEBHOOK ........ Webhook & Event Contracts',
                type: 'standard'
            },
            {
                code: 'STD-DATA',
                name: 'Data Modeling & Schema Design',
                title: 'STD-DATA ........... Data Modeling & Schema Design',
                type: 'standard'
            },
            {
                code: 'STD-DATA-TX',
                name: 'Transactions, Concurrency & Consistency',
                title: 'STD-DATA-TX ........ Transactions, Concurrency & Consistency',
                type: 'standard'
            },
            {
                code: 'STD-DATA-MIG',
                name: 'Schema Evolution & Database Migrations',
                title: 'STD-DATA-MIG ....... Schema Evolution & Database Migrations',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Uses STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-CACHE',
                name: 'Caching & Cache Invalidation',
                title: 'STD-CACHE .......... Caching & Cache Invalidation',
                type: 'standard'
            }
        ]
    },
    {
        key: '04',
        code: '04',
        name: 'Experience — UI / UX',
        title: '04. EXPERIENCE — UI / UX',
        type: 'category',
        children: [
            {
                code: 'STD-UX',
                name: 'UX & Interaction Principles',
                title: 'STD-UX ............. UX & Interaction Principles',
                type: 'standard'
            },
            {
                code: 'STD-UI-STATE',
                name: 'UI State & State Presentation',
                title: 'STD-UI-STATE ....... UI State & State Presentation',
                type: 'standard'
            },
            {
                code: 'STD-FEEDBACK',
                name: 'Feedback, Notifications & Messaging',
                title: 'STD-FEEDBACK ....... Feedback, Notifications & Messaging',
                type: 'standard'
            },
            {
                code: 'STD-FORM',
                name: 'Form & Validation Experience',
                title: 'STD-FORM ........... Form & Validation Experience',
                type: 'standard'
            },
            {
                code: 'STD-A11Y',
                name: 'Accessibility & Inclusive Design',
                title: 'STD-A11Y ........... Accessibility & Inclusive Design',
                type: 'standard'
            },
            {
                code: 'STD-DESIGN',
                name: 'Design Handoff & Fidelity',
                title: 'STD-DESIGN ......... Design Handoff & Fidelity',
                type: 'standard'
            },
            {
                code: 'STD-DS',
                name: 'Design System & Shared Components',
                title: 'STD-DS ............. Design System & Shared Components',
                type: 'standard'
            }
        ]
    },
    {
        key: '05',
        code: '05',
        name: 'Web Platform',
        title: '05. WEB PLATFORM',
        type: 'category',
        children: [
            {
                code: 'STD-WEB-ARCH',
                name: 'Web Application Architecture',
                title: 'STD-WEB-ARCH ....... Web Application Architecture',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Extends STD-ARCH' }
                ]
            },
            {
                code: 'STD-WEB-ROUTE',
                name: 'Routing, Navigation & URL State',
                title: 'STD-WEB-ROUTE ...... Routing, Navigation & URL State',
                type: 'standard',
                relations: [
                    { type: 'ALIGNS_WITH', targets: ['STD-UX'], label: 'Aligns With STD-UX' }
                ]
            },
            {
                code: 'STD-WEB-RESP',
                name: 'Responsive Layout',
                title: 'STD-WEB-RESP ....... Responsive Layout',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-DS', 'STD-A11Y'], label: 'Uses STD-DS, STD-A11Y' }
                ]
            },
            {
                code: 'STD-WEB-FORM',
                name: 'Browser Form & Validation',
                title: 'STD-WEB-FORM ....... Browser Form & Validation',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-FORM'], label: 'Extends STD-FORM' }
                ]
            },
            {
                code: 'STD-WEB-AUTH',
                name: 'Browser Authentication & Sessions',
                title: 'STD-WEB-AUTH ....... Browser Authentication & Sessions',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-SEC', 'STD-WEB-SEC'], label: 'Uses STD-SEC, STD-WEB-SEC' }
                ]
            },
            {
                code: 'STD-WEB-STORE',
                name: 'Browser Storage & Persistence',
                title: 'STD-WEB-STORE ...... Browser Storage & Persistence',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-CACHE', 'STD-WEB-SEC'], label: 'Uses STD-CACHE, STD-WEB-SEC' }
                ]
            },
            {
                code: 'STD-WEB-SEC',
                name: 'Browser & Web Application Security',
                title: 'STD-WEB-SEC ........ Browser & Web Application Security',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Extends STD-SEC' }
                ]
            },
            {
                code: 'STD-WEB-PERF',
                name: 'Web Rendering & Memory Performance',
                title: 'STD-WEB-PERF ....... Web Rendering & Memory Performance',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Extends STD-PERF' }
                ]
            },
            {
                code: 'STD-WEB-SEO',
                name: 'SEO & Rendering Strategy',
                title: 'STD-WEB-SEO ........ SEO & Rendering Strategy',
                type: 'standard'
            },
            {
                code: 'STD-WEB-PWA',
                name: 'Progressive Web Apps',
                title: 'STD-WEB-PWA ........ Progressive Web Apps',
                type: 'standard'
            }
        ]
    },
    {
        key: '06',
        code: '06',
        name: 'Mobile Platform',
        title: '06. MOBILE PLATFORM',
        type: 'category',
        children: [
            {
                code: 'STD-MOB-ARCH',
                name: 'Mobile Application Architecture',
                title: 'STD-MOB-ARCH ....... Mobile Application Architecture',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Extends STD-ARCH' }
                ]
            },
            {
                code: 'STD-MOB-NAV',
                name: 'Navigation, Routing & Deep Linking',
                title: 'STD-MOB-NAV ........ Navigation, Routing & Deep Linking',
                type: 'standard',
                relations: [
                    { type: 'ALIGNS_WITH', targets: ['STD-UX'], label: 'Aligns With STD-UX' }
                ]
            },
            {
                code: 'STD-MOB-LIFE',
                name: 'Lifecycle & Background Execution',
                title: 'STD-MOB-LIFE ....... Lifecycle & Background Execution',
                type: 'standard'
            },
            {
                code: 'STD-MOB-STORE',
                name: 'Local Storage & Secure Persistence',
                title: 'STD-MOB-STORE ...... Local Storage & Secure Persistence',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-CACHE', 'STD-MOB-SEC'], label: 'Uses STD-CACHE, STD-MOB-SEC' }
                ]
            },
            {
                code: 'STD-MOB-OFF',
                name: 'Offline, Connectivity & Sync',
                title: 'STD-MOB-OFF ........ Offline, Connectivity & Sync',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-RES', 'STD-CACHE'], label: 'Uses STD-RES, STD-CACHE' }
                ]
            },
            {
                code: 'STD-MOB-PUSH',
                name: 'Push Notifications & Routing',
                title: 'STD-MOB-PUSH ....... Push Notifications & Routing',
                type: 'standard'
            },
            {
                code: 'STD-MOB-DEVICE',
                name: 'Device Permissions & Capabilities',
                title: 'STD-MOB-DEVICE ..... Device Permissions & Capabilities',
                type: 'standard'
            },
            {
                code: 'STD-MOB-UI',
                name: 'Mobile Layout, Safe Areas & Keyboard',
                title: 'STD-MOB-UI ......... Mobile Layout, Safe Areas & Keyboard',
                type: 'standard',
                relations: [
                    {
                        type: 'USES',
                        targets: ['STD-UX', 'STD-DS', 'STD-A11Y', 'STD-FORM', 'STD-UI-STATE'],
                        label: 'Uses STD-UX, STD-DS, STD-A11Y, STD-FORM, STD-UI-STATE'
                    }
                ]
            },
            {
                code: 'STD-MOB-SEC',
                name: 'Mobile Application Security',
                title: 'STD-MOB-SEC ........ Mobile Application Security',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Extends STD-SEC' }
                ]
            },
            {
                code: 'STD-MOB-RELEASE',
                name: 'Mobile Build, Signing & Store Release',
                title: 'STD-MOB-RELEASE .... Mobile Build, Signing & Store Release',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-VERSIONING'], label: 'Uses STD-VERSIONING' }
                ]
            },
            {
                code: 'STD-MOB-PERF',
                name: 'Startup, Memory & Battery Performance',
                title: 'STD-MOB-PERF ....... Startup, Memory & Battery Performance',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Extends STD-PERF' }
                ]
            }
        ]
    },
    {
        key: '07',
        code: '07',
        name: 'Backend Platform',
        title: '07. BACKEND PLATFORM',
        type: 'category',
        children: [
            {
                code: 'STD-BE-ARCH',
                name: 'Backend Application Architecture',
                title: 'STD-BE-ARCH ........ Backend Application Architecture',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-ARCH'], label: 'Extends STD-ARCH' }
                ]
            },
            {
                code: 'STD-BE-AUTH',
                name: 'Authentication & Authorization',
                title: 'STD-BE-AUTH ........ Authentication & Authorization',
                type: 'standard'
            },
            {
                code: 'STD-BE-VALID',
                name: 'Request & Domain Validation',
                title: 'STD-BE-VALID ....... Request & Domain Validation',
                type: 'standard'
            },
            {
                code: 'STD-BE-SEC',
                name: 'Backend Security & Hardening',
                title: 'STD-BE-SEC ......... Backend Security & Hardening',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-SEC'], label: 'Extends STD-SEC' }
                ]
            },
            {
                code: 'STD-BE-TX',
                name: 'Transaction Management & Unit of Work',
                title: 'STD-BE-TX .......... Transaction Management & Unit of Work',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-DATA-TX'], label: 'Extends STD-DATA-TX' }
                ]
            },
            {
                code: 'STD-BE-CONCUR',
                name: 'Concurrency & Idempotency',
                title: 'STD-BE-CONCUR ...... Concurrency & Idempotency',
                type: 'standard',
                relations: [
                    { type: 'USES', targets: ['STD-DATA-TX', 'STD-RES'], label: 'Uses STD-DATA-TX, STD-RES' }
                ]
            },
            {
                code: 'STD-BE-JOB',
                name: 'Background Jobs & Scheduling',
                title: 'STD-BE-JOB ......... Background Jobs & Scheduling',
                type: 'standard'
            },
            {
                code: 'STD-BE-QUEUE',
                name: 'Queues & Event-Driven Processing',
                title: 'STD-BE-QUEUE ....... Queues & Event-Driven Processing',
                type: 'standard'
            },
            {
                code: 'STD-BE-FILE',
                name: 'File Processing & Object Storage',
                title: 'STD-BE-FILE ........ File Processing & Object Storage',
                type: 'standard'
            },
            {
                code: 'STD-BE-HEALTH',
                name: 'Readiness, Liveness & Health',
                title: 'STD-BE-HEALTH ...... Readiness, Liveness & Health',
                type: 'standard'
            },
            {
                code: 'STD-BE-PERF',
                name: 'Performance & Scalability',
                title: 'STD-BE-PERF ........ Performance & Scalability',
                type: 'standard',
                relations: [
                    { type: 'EXTENDS', targets: ['STD-PERF'], label: 'Extends STD-PERF' }
                ]
            }
        ]
    },
    {
        key: '08',
        code: '08',
        name: 'Technology',
        title: '08. TECHNOLOGY',
        type: 'category',
        children: [
            {
                key: '08.1',
                code: '08.1',
                name: 'Web Technology',
                title: '08.1. WEB TECHNOLOGY',
                type: 'category',
                children: [
                    {
                        code: 'STD-REACT',
                        name: 'React Components & Hooks',
                        title: 'STD-REACT ...... React Components & Hooks',
                        type: 'standard'
                    },
                    {
                        code: 'STD-TS',
                        name: 'TypeScript Conventions',
                        title: 'STD-TS ......... TypeScript Conventions',
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
                        name: 'Next.js Architecture',
                        title: 'STD-NEXT ....... Next.js Architecture',
                        type: 'standard'
                    },
                    {
                        code: 'STD-REACT-TEST',
                        name: 'React Testing, Vitest/Jest & RTL',
                        title: 'STD-REACT-TEST . React Testing, Vitest/Jest & RTL',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Implements STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.2',
                code: '08.2',
                name: 'React Native Technology',
                title: '08.2. REACT NATIVE TECHNOLOGY',
                type: 'category',
                children: [
                    {
                        code: 'STD-RN',
                        name: 'React Native Architecture',
                        title: 'STD-RN ......... React Native Architecture',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-NAV',
                        name: 'Navigation & Expo Router',
                        title: 'STD-RN-NAV ..... Navigation & Expo Router',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-STATE',
                        name: 'React Native State Management',
                        title: 'STD-RN-STATE ... React Native State Management',
                        type: 'standard'
                    },
                    {
                        code: 'STD-RN-STORE',
                        name: 'Local & Secure Storage',
                        title: 'STD-RN-STORE ... Local & Secure Storage',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-MOB-STORE'], label: 'Implements STD-MOB-STORE' }
                        ]
                    },
                    {
                        code: 'STD-RN-TEST',
                        name: 'Jest & React Native Testing Library',
                        title: 'STD-RN-TEST .... Jest & React Native Testing Library',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Implements STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.3',
                code: '08.3',
                name: 'Flutter Technology',
                title: '08.3. FLUTTER TECHNOLOGY',
                type: 'category',
                children: [
                    {
                        code: 'STD-FL-DART',
                        name: 'Dart Conventions',
                        title: 'STD-FL-DART .... Dart Conventions',
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
                        name: 'Widget Composition & Theming',
                        title: 'STD-FL-WIDGET .. Widget Composition & Theming',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-ROUTE',
                        name: 'Flutter Navigation & go_router',
                        title: 'STD-FL-ROUTE ... Flutter Navigation & go_router',
                        type: 'standard'
                    },
                    {
                        code: 'STD-FL-TEST',
                        name: 'flutter_test, bloc_test & Integration',
                        title: 'STD-FL-TEST .... flutter_test, bloc_test & Integration',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Implements STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.4',
                code: '08.4',
                name: 'Backend Technology — .NET',
                title: '08.4. BACKEND TECHNOLOGY — .NET',
                type: 'category',
                children: [
                    {
                        code: 'STD-DOTNET',
                        name: 'ASP.NET Core Architecture',
                        title: 'STD-DOTNET ..... ASP.NET Core Architecture',
                        type: 'standard'
                    },
                    {
                        code: 'STD-DOTNET-API',
                        name: 'API, DI & Middleware',
                        title: 'STD-DOTNET-API . API, DI & Middleware',
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
                                label: 'Implements STD-DATA, STD-DATA-TX, STD-DATA-MIG'
                            },
                            { type: 'USES', targets: ['STD-BE-TX'], label: 'Uses STD-BE-TX' }
                        ]
                    },
                    {
                        code: 'STD-DOTNET-TEST',
                        name: 'xUnit & Integration Testing',
                        title: 'STD-DOTNET-TEST  xUnit & Integration Testing',
                        type: 'standard',
                        relations: [
                            { type: 'IMPLEMENTS', targets: ['STD-TEST'], label: 'Implements STD-TEST' }
                        ]
                    }
                ]
            },
            {
                key: '08.5',
                code: '08.5',
                name: 'Database Technology',
                title: '08.5. DATABASE TECHNOLOGY',
                type: 'category',
                children: [
                    {
                        code: 'STD-PG',
                        name: 'PostgreSQL Development & Migrations',
                        title: 'STD-PG ......... PostgreSQL Development & Migrations',
                        type: 'standard',
                        relations: [
                            {
                                type: 'IMPLEMENTS',
                                targets: ['STD-DATA', 'STD-DATA-TX', 'STD-DATA-MIG'],
                                label: 'Implements STD-DATA, STD-DATA-TX, STD-DATA-MIG'
                            },
                            { type: 'USES', targets: ['STD-PERF'], label: 'Uses STD-PERF' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        key: '09',
        code: '09',
        name: 'Reusable Capabilities',
        title: '09. REUSABLE CAPABILITIES',
        type: 'category',
        children: [
            {
                code: 'CAP-AUTH',
                name: 'Authentication & Registration',
                title: 'CAP-AUTH ........... Authentication & Registration',
                type: 'capability'
            },
            {
                code: 'CAP-PROFILE',
                name: 'User Profile & Account Management',
                title: 'CAP-PROFILE ........ User Profile & Account Management',
                type: 'capability'
            },
            {
                code: 'CAP-CRUD',
                name: 'CRUD, Listing & Pagination',
                title: 'CAP-CRUD ........... CRUD, Listing & Pagination',
                type: 'capability'
            },
            {
                code: 'CAP-UPLOAD',
                name: 'File Upload & Attachments',
                title: 'CAP-UPLOAD ......... File Upload & Attachments',
                type: 'capability'
            },
            {
                code: 'CAP-NOTIFY',
                name: 'Notification Delivery',
                title: 'CAP-NOTIFY ......... Notification Delivery',
                type: 'capability'
            },
            {
                code: 'CAP-CHAT',
                name: 'Realtime Chat',
                title: 'CAP-CHAT ........... Realtime Chat',
                type: 'capability'
            },
            {
                code: 'CAP-SHARE',
                name: 'Sharing, QR & Deep Links',
                title: 'CAP-SHARE .......... Sharing, QR & Deep Links',
                type: 'capability'
            },
            {
                code: 'CAP-AUDIT',
                name: 'Audit Trail & History',
                title: 'CAP-AUDIT .......... Audit Trail & History',
                type: 'capability'
            },
            {
                code: 'CAP-PERM',
                name: 'Roles & Permissions',
                title: 'CAP-PERM ........... Roles & Permissions',
                type: 'capability'
            },
            {
                code: 'CAP-SEARCH',
                name: 'Search & Indexing',
                title: 'CAP-SEARCH ......... Search & Indexing',
                type: 'capability'
            },
            {
                code: 'CAP-PAYMENT',
                name: 'Payments & Billing',
                title: 'CAP-PAYMENT ........ Payments & Billing',
                type: 'capability'
            },
            {
                code: 'CAP-REPORT',
                name: 'Reporting & Dashboards',
                title: 'CAP-REPORT ......... Reporting & Dashboards',
                type: 'capability'
            }
        ]
    },
    {
        key: '10',
        code: '10',
        name: 'Operations & Infrastructure',
        title: '10. OPERATIONS & INFRASTRUCTURE',
        type: 'category',
        children: [
            {
                code: 'STD-DEPLOY',
                name: 'Deployment, Rollout & Rollback',
                title: 'STD-DEPLOY ......... Deployment, Rollout & Rollback',
                type: 'standard',
                relations: [
                    {
                        type: 'USES',
                        targets: ['STD-CI', 'STD-FLAG', 'STD-VERSIONING'],
                        label: 'Uses STD-CI, STD-FLAG, STD-VERSIONING'
                    }
                ]
            },
            {
                code: 'STD-IAC',
                name: 'Infrastructure as Code',
                title: 'STD-IAC ............ Infrastructure as Code',
                type: 'standard'
            },
            {
                code: 'STD-NET',
                name: 'Network, DNS, TLS & Infrastructure Security',
                title: 'STD-NET ............ Network, DNS, TLS & Infrastructure Security',
                type: 'standard'
            },
            {
                code: 'STD-BACKUP',
                name: 'Backup & Restore',
                title: 'STD-BACKUP ......... Backup & Restore',
                type: 'standard'
            },
            {
                code: 'STD-DR',
                name: 'Disaster Recovery',
                title: 'STD-DR ............. Disaster Recovery',
                type: 'standard'
            },
            {
                code: 'STD-SLO',
                name: 'Service Level Objectives',
                title: 'STD-SLO ............ Service Level Objectives',
                type: 'standard'
            },
            {
                code: 'STD-COST',
                name: 'Infrastructure & Cloud Cost Governance',
                title: 'STD-COST ........... Infrastructure & Cloud Cost Governance',
                type: 'standard',
                tag: 'NEW',
                relations: [
                    { type: 'USES', targets: ['STD-LOG', 'STD-PERF', 'STD-SLO'], label: 'Uses STD-LOG, STD-PERF, STD-SLO' }
                ]
            },
            {
                code: 'STD-INCIDENT',
                name: 'Incident Management & Postmortems',
                title: 'STD-INCIDENT ....... Incident Management & Postmortems',
                type: 'standard'
            },
            {
                code: 'STD-RUNBOOK',
                name: 'Operational Runbooks & Maintenance',
                title: 'STD-RUNBOOK ........ Operational Runbooks & Maintenance',
                type: 'standard'
            }
        ]
    }
];

module.exports = {
    STANDARD_CATALOG
};
