---
name: review
description: "Bước Review trong quy trình feature vi-casso-be: giao cho agent reviewer, ghi 04-review.md. Dùng khi gọi /review <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /review

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `02-plan.md`, `03-dev-log.md`, `git diff` trong dự án chính. Thiếu input → báo người dùng, không đoán.
3. Gọi agent `reviewer` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/04-review.md` theo `template.md`.
5. Tick bước `review` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
