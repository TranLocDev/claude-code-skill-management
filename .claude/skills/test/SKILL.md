---
name: test
description: "Bước Test trong quy trình feature vi-casso-be: giao cho agent tester, ghi 05-test.md. Dùng khi gọi /test <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /test

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `02-plan.md`, `03-dev-log.md`, `04-review.md`. Thiếu input → báo người dùng, không đoán.
3. Gọi agent `tester` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/05-test.md` theo `template.md`.
5. Tick bước `test` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
