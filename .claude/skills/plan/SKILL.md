---
name: plan
description: "Bước Plan trong quy trình feature vi-casso-be: giao cho agent planner, ghi 02-plan.md. Dùng khi gọi /plan <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /plan

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: `01-spec.md` (hoặc `00-input.md` nếu bỏ qua bước spec). Thiếu input → báo người dùng, không đoán.
3. Gọi agent `planner` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/02-plan.md` theo `template.md`.
5. Tick bước `plan` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
