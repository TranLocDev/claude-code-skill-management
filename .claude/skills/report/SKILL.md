---
name: report
description: "Bước Report trong quy trình feature vi-casso-be: giao cho agent reporter, ghi 06-report.md. Dùng khi gọi /report <feature-slug> hoặc khi /team-run tới bước này."
argument-hint: "<feature-slug>"
---

# /report

1. Kiểm tra `features/$ARGUMENTS/` tồn tại (chưa có → copy từ `features/_template/`).
2. Input: Toàn bộ `features/<feature>/*.md`. Thiếu input → báo người dùng, không đoán.
3. Gọi agent `reporter` với feature `$ARGUMENTS`.
4. Kết quả ghi vào `features/$ARGUMENTS/06-report.md` theo `template.md`.
5. Tick bước `report` và thêm dòng log trong `features/$ARGUMENTS/session.md`.
