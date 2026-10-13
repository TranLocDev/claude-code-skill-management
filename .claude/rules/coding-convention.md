# Coding convention — vi-casso-be

Nguồn chuẩn: `../vi-casso-be/CLAUDE.md`, `../vi-casso-be/docs/00-project-structure.md`, `../vi-casso-be/docs/02-structure-module.md`.

- Layer: Controller → Service → Repository / Client. Không trả entity từ controller.
- Lỗi: `AppException` + `defineErrors`. Message tiếng Việt.
- Config mới: `registerAs` + `getOrThrow`; tuning value hardcode trong `src/config/*.config.ts`.
- Import: theo file xung quanh (đa số relative).
- Commit: `feat:` / `fix:` / `chore:`.
