# API design — vi-casso-be

Nguồn chuẩn: `../vi-casso-be/docs/07-swagger.md`, module mẫu `src/modules/auth`, `src/modules/org-bank`.

- Response bọc bởi `ResponseInterceptor`: `{ success, statusCode, message, data }`; controller trả data thuần.
- DTO dùng class-validator; field lạ bị từ chối (`forbidNonWhitelisted`).
- Route bảo vệ: `@Auth()`; admin: `@AdminAuth()` + `@AdminAudit` (xem `docs/09-admin-api.md`).
- Rate limit riêng: `@RateLimit(...RATE_LIMIT_PRESETS.X)` (xem `docs/08-rate-limit.md`).
