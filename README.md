# vi-casso-be-skill

Bộ công cụ Claude Code (agent, skill, workflow) hỗ trợ phát triển dự án **`vi-casso-be`**.

> Nhánh `vi-casso-be` của template. Template gốc (có placeholder) ở nhánh `main`.

## Vai trò của folder

- **Không chứa code sản phẩm.** Code nằm ở `../vi-casso-be`.
- Là nơi **thiết kế, thử nghiệm và quản lý** team agent phục vụ quy trình phát triển feature:

  ```
  Spec → Plan → Dev → Review → Test → Report
  ```

- Mỗi bước do một agent chuyên trách. Có thể chạy cả quy trình hoặc chỉ một vài bước, tuỳ feature hay phiên làm việc.
- Mỗi feature được lưu thành một bộ tài liệu trong `features/<feature>/` để theo dõi và làm tiếp từ bất kỳ bước nào.

## Cấu trúc

| Đường dẫn | Nội dung |
|-----------|----------|
| `.claude/agents/` | 6 agent: `spec-analyst`, `planner`, `developer`, `reviewer`, `tester`, `reporter` |
| `.claude/skills/<bước>/` | Lệnh `/spec` `/plan` `/dev` `/review` `/test` `/report` + `template.md` mẫu output |
| `.claude/skills/team-run/` | Lệnh `/team-run`: điều phối nhiều bước |
| `.claude/rules/` | Convention theo chủ đề (coding, testing, api-design) |
| `.claude/workflows/` | Script chạy pipeline tự động bằng nhiều subagent |
| `.claude/settings.json` | Quyền, hooks dùng chung |
| `features/_template/` | Bộ file mẫu cho một feature |
| `docs/` | Tài liệu thiết kế, quyết định |

## Đội agent

| Bước | Lệnh | Agent | Output trong `features/<feature>/` |
|------|------|-------|------------------------------------|
| Spec | `/spec` | `spec-analyst` | `01-spec.md` |
| Plan | `/plan` | `planner` | `02-plan.md` |
| Dev | `/dev` | `developer` | `03-dev-log.md` + code |
| Review | `/review` | `reviewer` | `04-review.md` |
| Test | `/test` | `tester` | `05-test.md` |
| Report | `/report` | `reporter` | `06-report.md` |

## Cách sử dụng

### 1. Khởi tạo feature

```bash
cp -r features/_template features/<feature-slug>
```

Điền yêu cầu gốc (ticket, PRD, link…) vào `00-input.md`, rồi tick các bước cần chạy ở mục **Stages** trong `session.md`.

> `/team-run` tự copy template nếu thư mục feature chưa tồn tại.

### 2. Chạy quy trình

Mở Claude Code tại folder này:

```text
/team-run <feature-slug>                            # chạy đủ 6 bước
/team-run <feature-slug> stages=review,test,report  # chỉ chạy một số bước
```

Hoặc gọi lẻ từng bước:

```text
/spec <feature-slug>
/plan <feature-slug>
/review <feature-slug>
```

Có thể gọi trực tiếp agent: *"Dùng agent reviewer review thay đổi của feature X"*.

### 3. Các kịch bản thường gặp

| Tình huống | Cách chạy |
|------------|-----------|
| Feature mới từ đầu | `/team-run <f>` |
| Đã có spec, cần plan và code | `stages=plan,dev,review,test,report` |
| Code xong, cần kiểm tra | `stages=review,test,report` |
| Chỉ phân tích ticket | `/spec <f>` |
| Tổng kết phiên | `/report <f>` |

### 4. Theo dõi tiến độ

`features/<feature>/session.md` ghi lại các bước đã xong và log từng lần chạy. Mở file này để biết feature đang ở bước nào.

## Tuỳ biến

- **Sửa vai trò agent:** `.claude/agents/<agent>.md` (prompt, `tools`, `model`).
- **Sửa mẫu output:** `.claude/skills/<bước>/template.md`.
- **Thêm bước mới:** tạo agent và skill tương ứng, thêm vào bảng trong `team-run/SKILL.md` và vào `features/_template/session.md`.
- **Convention dự án:** `.claude/rules/*.md`. Chỉnh `paths:` cho khớp với cấu trúc `vi-casso-be`.

## Dùng cho dự án chính

Copy hoặc symlink `.claude/agents`, `.claude/skills`, `.claude/rules` sang `../vi-casso-be/.claude/` để dùng ngay trong repo chính, hoặc sang `~/.claude/` để dùng toàn cục.
