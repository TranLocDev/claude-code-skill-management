---
name: doc
description: "Bước Doc trong quy trình feature vi-casso-be: giao cho agent doc-analyst bóc tách tài liệu thiết kế trong 00-input.md, ghi 00b-docs.md. Dùng khi gọi /doc <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /doc

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `00-input.md` (phải chứa tài liệu nhúng hoặc link). Thiếu tài liệu → báo người dùng, không đoán.
3. Gọi agent `doc-analyst` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/00b-docs.md` theo `template.md`.
5. Tick bước `docs` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
