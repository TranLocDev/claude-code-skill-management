---
name: dev
description: "Bước Dev trong quy trình feature vi-casso-be: giao cho agent developer, ghi 03-dev-log.md. Dùng khi gọi /dev <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /dev

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `02-plan.md`; nếu quay lại sửa thì đọc thêm `04-review.md`, `05-test.md`. Thiếu input → báo người dùng, không đoán.
3. Gọi agent `developer` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/03-dev-log.md` theo `template.md`.
5. Tick bước `dev` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
