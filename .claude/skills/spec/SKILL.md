---
name: spec
description: "Bước Spec trong quy trình feature vi-casso-be: giao cho agent spec-analyst, ghi 01-spec.md. Dùng khi gọi /spec <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /spec

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `00-input.md` (yêu cầu gốc) + `00b-docs.md` nếu đã chạy bước docs (bóc tách tài liệu). Thiếu input → báo người dùng, không đoán.
3. Gọi agent `spec-analyst` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/01-spec.md` theo `template.md`.
5. Tick bước `spec` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
