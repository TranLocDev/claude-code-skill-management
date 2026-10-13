---
name: team-run
description: "Điều phối team agent cho một feature/phiên làm việc của vi-casso-be. Chọn linh hoạt các bước: spec, plan, dev, review, test, report. Dùng khi người dùng muốn chạy cả quy trình hoặc nhiều bước liên tiếp cho một feature."
argument-hint: "<feature-slug> [stages=docs,spec,plan,dev,review,test,report]"
---

# /team-run

Điều phối team agent theo file `features/<feature>/session.md`.

## Cách chọn bước
- Mặc định: `docs → spec → plan → dev → review → test → report` (bỏ `docs` nếu input không có tài liệu nhúng).
- Truyền `stages=` để chọn tập con, vd: `stages=review,test,report`.
- Hoặc khai báo trong `session.md` (mục **Stages**).

## Quy trình
1. Nếu `features/<feature>/` chưa có → copy từ `features/_template/`.
2. Đọc `session.md`, xác định các bước cần chạy.
3. Chạy lần lượt từng bước bằng skill tương ứng (`/spec`, `/plan`, ...).
4. Sau mỗi bước: cập nhật `session.md`.
5. **Checkpoint** — dừng, tóm tắt và chờ người dùng duyệt:
   - sau `spec` (xác nhận câu hỏi mở),
   - sau `plan` (duyệt plan trước khi code).
6. Review có Blocker/Major hoặc test fail do code → quay lại `dev` với finding tương ứng, tối đa **2 vòng**; quá 2 vòng thì dừng và báo người dùng.

## Bảng vai trò
| Bước   | Agent         | Output          |
|--------|---------------|-----------------|
| docs   | doc-analyst   | 00b-docs.md     |
| spec   | spec-analyst  | 01-spec.md      |
| plan   | planner       | 02-plan.md      |
| dev    | developer     | 03-dev-log.md   |
| review | reviewer      | 04-review.md    |
| test   | tester        | 05-test.md      |
| report | reporter      | 06-report.md    |
