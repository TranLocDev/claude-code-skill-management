# CLAUDE.md

File này hướng dẫn Claude Code khi làm việc trong repo `vi-casso-be-skill`.

## Cấu hình dự án

| Biến | Giá trị | Ý nghĩa |
|------|---------|---------|
| `PROJECT_NAME` | `vi-casso-be` (package `casso-picasso-backend`) | Tên dự án chính |
| `PROJECT_PATH` | `../vi-casso-be` | Source code dự án chính |
| Stack | NestJS 11, TypeORM + MySQL 8, Redis (ioredis), BullMQ, Node 24 | |
| Ngôn ngữ | Tiếng Việt cho docs, comment, message trả về user | |

> Mọi agent làm việc trên code tại `../vi-casso-be`. Các tài liệu feature (`features/`) vẫn lưu trong repo này.

## Nguồn tham chiếu trong dự án chính

Mọi agent phải đọc trước khi làm việc (đường dẫn tính từ repo này):

- `../vi-casso-be/CLAUDE.md` — kiến trúc, request pipeline, error, config, Redis, task queue, rate limit.
- `../vi-casso-be/docs/00-project-structure.md`, `02-structure-module.md` — cấu trúc module.
- `../vi-casso-be/docs/07-swagger.md` — bắt buộc khi thêm/sửa route.
- `../vi-casso-be/docs/01-how-to-use-migrate.md` — khi đổi schema.

## Lệnh hay dùng (chạy trong `../vi-casso-be`)

```bash
npm run build && npm run lint   # pre-commit cũng chạy build
npm test                        # jest unit (*.spec.ts)
npx jest src/path/file.spec.ts
npm run test:e2e
npm run migration:generate -- src/database/migrations/<Name>
```

## Mục đích

Repo này **không chứa code sản phẩm**. Đây là nơi xây dựng, tổ chức và quản lý các **agent, skill, command, hook** của Claude Code để hỗ trợ phát triển dự án chính **`vi-casso-be`**.

- Dự án chính: `../vi-casso-be` (đọc `../vi-casso-be/CLAUDE.md` để hiểu stack, convention, kiến trúc).
- Repo này: nơi thiết kế, thử nghiệm, version hoá các công cụ AI phục vụ dự án chính.

## Nhiệm vụ

1. **Tổ chức team agent** hỗ trợ quy trình develop của `vi-casso-be` (vd: planner, reviewer, tester, debugger, migration helper...).
2. **Xây dựng skill** đóng gói các workflow lặp lại của dự án (vd: tạo module/API mới, viết test, review PR, phân tích spec).
3. **Quản lý & cải thiện** agent/skill hiện có: đánh giá chất lượng, sửa prompt, tối ưu description để trigger đúng.
4. **Tài liệu hoá** cách dùng từng agent/skill cho team.

## Cấu trúc thư mục

```
.claude/
  agents/        # 7 vai trò: doc-analyst, spec-analyst, planner, developer, reviewer, tester, reporter
  skills/        # /doc /spec /plan /dev /review /test /report (+ template.md) và /team-run (điều phối)
  rules/         # convention theo chủ đề (coding, testing, api-design)
  workflows/     # feature-pipeline.js — chạy pipeline tự động nhiều subagent
  agent-memory/  # Claude tự ghi bộ nhớ từng agent
  settings.json  # permissions, hooks dùng chung
features/
  _template/     # bộ file mẫu cho một feature: session.md, 00-input → 06-report
  <feature>/     # mỗi feature/phiên làm việc một thư mục, copy từ _template
docs/            # thiết kế, hướng dẫn, quyết định
```

Quy trình: `/team-run <feature> [stages=...]` chọn linh hoạt các bước; trạng thái lưu ở `features/<feature>/session.md`.

## Nguyên tắc khi làm việc

- **Bám sát dự án chính**: trước khi viết agent/skill, đọc code và convention thật trong `../vi-casso-be`; không bịa cấu trúc.
- **Không sửa code `../vi-casso-be`** từ repo này trừ khi người dùng yêu cầu rõ ràng — chỉ đọc để tham chiếu.
- **Mỗi agent/skill một trách nhiệm rõ ràng**; `description` phải nói cụ thể *khi nào* dùng để Claude trigger chính xác.
- **Giữ prompt ngắn gọn**, tách tài liệu dài sang `references/` để load khi cần.
- **Giới hạn tools** của agent ở mức tối thiểu cần thiết.
- Khi tạo/sửa skill, ưu tiên dùng skill `anthropic-skills:skill-creator`; có thể kiểm thử bằng các prompt trong `evals/`.
- Viết tài liệu bằng tiếng Việt; tên file, frontmatter, identifier bằng tiếng Anh (kebab-case).

## Triển khai sang dự án chính

Agent/skill hoàn thiện có thể dùng cho `vi-casso-be` bằng cách copy/symlink `.claude/agents`, `.claude/skills`, `.claude/commands` vào `../vi-casso-be/.claude/` (hoặc `~/.claude/` để dùng toàn cục). Ghi lại cách triển khai đã chọn trong `docs/` khi quyết định.
