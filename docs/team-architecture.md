# Kiến trúc team agent — vi-casso-be

```
00-input → [spec-analyst] → 01-spec ─(checkpoint)→ [planner] → 02-plan ─(checkpoint)→
[developer] → 03-dev-log → [reviewer] → 04-review → [tester] → 05-test → [reporter] → 06-report
                  ↑______________ Blocker / test fail (tối đa 2 vòng) ______________|
```

- Điều phối: `/team-run <feature> [stages=...]`.
- Trạng thái: `features/<feature>/session.md`.
- Agent dùng lại skill có sẵn của dự án chính: feature-spec-planner (plan), develop-new-feature (dev), generate-api-test (test), review-swagger-docs (review).
