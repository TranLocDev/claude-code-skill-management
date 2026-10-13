---
name: plan
description: "TODO: khi nào gọi /plan (bước plan trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /plan

Giao việc cho subagent `planner` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `planner`.
3. Kết quả ghi vào `features/$ARGUMENTS/02-plan.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
