---
name: report
description: "TODO: khi nào gọi /report (bước report trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /report

Giao việc cho subagent `reporter` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `reporter`.
3. Kết quả ghi vào `features/$ARGUMENTS/06-report.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
