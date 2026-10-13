---
name: test
description: "TODO: khi nào gọi /test (bước test trong quy trình feature)."
argument-hint: "<feature-slug>"
---

# /test

Giao việc cho subagent `tester` với feature `$ARGUMENTS`.

1. Đọc input trong `features/$ARGUMENTS/` (TODO).
2. Gọi agent `tester`.
3. Kết quả ghi vào `features/$ARGUMENTS/05-test.md` theo `template.md`.
4. Cập nhật trạng thái trong `features/$ARGUMENTS/session.md`.
