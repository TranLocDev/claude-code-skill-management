---
name: team-run
description: "Điều phối team agent cho một feature/phiên làm việc. Chọn linh hoạt các bước: spec, plan, dev, review, test, report. TODO: tinh chỉnh."
argument-hint: "<feature-slug> [stages=spec,plan,dev,review,test,report]"
---

# /team-run

Điều phối team agent theo file `features/<feature>/session.md`.

## Cách chọn bước
- Mặc định: `spec → plan → dev → review → test → report`.
- Truyền `stages=` để chọn tập con, vd: `stages=review,test,report`.
- Hoặc khai báo trong `session.md` (mục **Stages**).

## Quy trình
1. Nếu `features/<feature>/` chưa có → copy từ `features/_template/`.
2. Đọc `session.md`, xác định các bước cần chạy.
3. Chạy lần lượt từng bước bằng skill tương ứng (`/spec`, `/plan`, ...).
4. Sau mỗi bước: cập nhật `session.md`; dừng hỏi người dùng tại các checkpoint (TODO).
5. Vòng lặp review/test fail → quay lại `dev` (tối đa N lần, TODO).

## Bảng vai trò
| Bước   | Agent         | Output          |
|--------|---------------|-----------------|
| spec   | spec-analyst  | 01-spec.md      |
| plan   | planner       | 02-plan.md      |
| dev    | developer     | 03-dev-log.md   |
| review | reviewer      | 04-review.md    |
| test   | tester        | 05-test.md      |
| report | reporter      | 06-report.md    |
