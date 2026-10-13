---
name: spec
description: "TODO: khi nào gọi /spec (bước spec trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /spec

Giao việc cho subagent `spec-analyst` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `spec-analyst`.
3. Kết quả ghi vào `features/$ARGUMENTS/01-spec.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
