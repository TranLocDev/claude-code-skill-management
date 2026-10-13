---
name: dev
description: "TODO: khi nào gọi /dev (bước dev trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /dev

Giao việc cho subagent `developer` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `developer`.
3. Kết quả ghi vào `features/$ARGUMENTS/03-dev-log.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
