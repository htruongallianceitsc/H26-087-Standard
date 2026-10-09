# Structure Alignment Review

`STRUCTURE.txt` is treated as the source of truth. `standard-import.schema.json` is treated as the validation contract for every active catalog JSON file.

- Active catalog standards/capabilities after alignment: **115**
- Existing standards reused in their canonical destination: **47**
- Existing standards migrated/renamed to new canonical codes: **12**
- Missing standards/capabilities created: **56**
- Legacy codes intentionally not kept in the active catalog because they are not listed in STRUCTURE.txt: **14**

## Migrated codes

- `STD-AI` → `STD-AI-DEV` (source: `01-core/STD-AI.json`)
- `STD-AUTH` → `CAP-AUTH` (source: `05-feature/STD-AUTH.json`)
- `STD-PROFILE` → `CAP-PROFILE` (source: `05-feature/STD-PROFILE.json`)
- `STD-CRUD` → `CAP-CRUD` (source: `05-feature/STD-CRUD.json`)
- `STD-UPLOAD` → `CAP-UPLOAD` (source: `05-feature/STD-UPLOAD.json`)
- `STD-NOTIFY` → `CAP-NOTIFY` (source: `05-feature/STD-NOTIFY.json`)
- `STD-CHAT` → `CAP-CHAT` (source: `05-feature/STD-CHAT.json`)
- `STD-SHARE` → `CAP-SHARE` (source: `05-feature/STD-SHARE.json`)
- `STD-AUDIT` → `CAP-AUDIT` (source: `05-feature/STD-AUDIT.json`)
- `STD-PERM` → `CAP-PERM` (source: `05-feature/STD-PERM.json`)
- `STD-SEARCH` → `CAP-SEARCH` (source: `05-feature/STD-SEARCH.json`)
- `STD-DASHBOARD` → `CAP-REPORT` (source: `05-feature/STD-DASHBOARD.json`)

## Legacy/non-canonical codes excluded from active catalog

- `STD-DB`
- `STD-FL-ARCH`
- `STD-FL-BUILD`
- `STD-FL-DI`
- `STD-FL-DIO`
- `STD-NEXT-CACHE`
- `STD-NEXT-SEO`
- `STD-QR`
- `STD-REACT-ARCH`
- `STD-REACT-UI`
- `STD-RECOVER`
- `STD-REGISTER`
- `STD-RN-ARCH`
- `STD-RN-EXPO`

## Validation intent

- Folder grouping and active filenames mirror `STRUCTURE.txt`.
- Each active file name matches its JSON `code`.
- Dependencies explicitly stated in `STRUCTURE.txt` are represented in `depends_on`.
- Existing content is retained when a canonical code already existed; generated content is used only for missing canonical entries.
