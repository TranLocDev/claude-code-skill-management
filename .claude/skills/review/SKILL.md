---
name: review
description: "TODO: khi nào gọi /review (bước review trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /review

Giao việc cho subagent `reviewer` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `reviewer`.
3. Kết quả ghi vào `features/$ARGUMENTS/04-review.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
