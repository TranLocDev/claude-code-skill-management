# Testing — vi-casso-be

- Unit test: `*.spec.ts` dưới `src/`, chạy `npm test` / `npx jest <file>` trong `../vi-casso-be`.
- E2E: `npm run test:e2e` (`test/jest-e2e.json`).
- Test plan API: theo skill `../vi-casso-be/.claude/skills/generate-api-test/`; lưu bản chính thức ở `../vi-casso-be/docs/api-tests/` nếu người dùng yêu cầu.
- Mock bên thứ 3 qua `src/config/dev-mock.config.ts` (`DEV_MOCK_*`), không gọi dịch vụ thật.
