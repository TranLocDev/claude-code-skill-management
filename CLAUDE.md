# CLAUDE.md

File này hướng dẫn Claude Code khi làm việc trong repo `{{PROJECT_NAME}}-skill`.

## Cấu hình dự án

| Biến | Giá trị | Ý nghĩa |
|------|---------|---------|
| `{{PROJECT_NAME}}` | TODO | Tên dự án chính |
| `{{PROJECT_PATH}}` | TODO | Đường dẫn tới source code dự án chính (tương đối hoặc tuyệt đối) |

> Mọi agent làm việc trên code tại `{{PROJECT_PATH}}`. Các tài liệu feature (`features/`) vẫn lưu trong repo này.

## Mục đích

Repo này **không chứa code sản phẩm**. Đây là nơi xây dựng, tổ chức và quản lý các **agent, skill, command, hook** của Claude Code để hỗ trợ phát triển dự án chính **`{{PROJECT_NAME}}`**.

- Dự án chính: `{{PROJECT_PATH}}` (đọc `{{PROJECT_PATH}}/CLAUDE.md` để hiểu stack, convention, kiến trúc).
- Repo này: nơi thiết kế, thử nghiệm, version hoá các công cụ AI phục vụ dự án chính.

## Nhiệm vụ

1. **Tổ chức team agent** hỗ trợ quy trình develop của `{{PROJECT_NAME}}` (vd: planner, reviewer, tester, debugger, migration helper...).
2. **Xây dựng skill** đóng gói các workflow lặp lại của dự án (vd: tạo module/API mới, viết test, review PR, phân tích spec).
3. **Quản lý & cải thiện** agent/skill hiện có: đánh giá chất lượng, sửa prompt, tối ưu description để trigger đúng.
4. **Tài liệu hoá** cách dùng từng agent/skill cho team.

## Cấu trúc thư mục

```
.claude/
  agents/        # 6 vai trò: spec-analyst, planner, developer, reviewer, tester, reporter
  skills/        # /spec /plan /dev /review /test /report (+ template.md) và /team-run (điều phối)
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

- **Bám sát dự án chính**: trước khi viết agent/skill, đọc code và convention thật trong `{{PROJECT_PATH}}`; không bịa cấu trúc.
- **Không sửa code `{{PROJECT_PATH}}`** từ repo này trừ khi người dùng yêu cầu rõ ràng — chỉ đọc để tham chiếu.
- **Mỗi agent/skill một trách nhiệm rõ ràng**; `description` phải nói cụ thể *khi nào* dùng để Claude trigger chính xác.
- **Giữ prompt ngắn gọn**, tách tài liệu dài sang `references/` để load khi cần.
- **Giới hạn tools** của agent ở mức tối thiểu cần thiết.
- Khi tạo/sửa skill, ưu tiên dùng skill `anthropic-skills:skill-creator`; có thể kiểm thử bằng các prompt trong `evals/`.
- Viết tài liệu bằng tiếng Việt; tên file, frontmatter, identifier bằng tiếng Anh (kebab-case).

## Triển khai sang dự án chính

Agent/skill hoàn thiện có thể dùng cho `{{PROJECT_NAME}}` bằng cách copy/symlink `.claude/agents`, `.claude/skills`, `.claude/commands` vào `{{PROJECT_PATH}}/.claude/` (hoặc `~/.claude/` để dùng toàn cục). Ghi lại cách triển khai đã chọn trong `docs/` khi quyết định.
