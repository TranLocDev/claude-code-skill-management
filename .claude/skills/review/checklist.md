# Checklist review — vi-casso-be

## Cấu trúc
- [ ] Controller mỏng, không trả entity; nghiệp vụ ở Service; DB/Redis ở Repository; HTTP bên thứ 3 ở Client.
- [ ] Barrel `index.ts` đúng; module khác chỉ dùng qua service export, không import sâu.

## Lỗi & response
- [ ] Throw `AppException` với errors từ `defineErrors` trong `constants/<name>.errors.ts`.
- [ ] Message tiếng Việt; `@ResponseMessage` khi cần.

## Swagger
- [ ] `@ApiTags`, `@ApiOperation`, `@ApiSuccess`, `@ApiAppErrors`; route bảo vệ dùng `@Auth()`.
- [ ] Response DTO là class trong `dto/<name>-response.dto.ts`.

## Dữ liệu
- [ ] Entity mới đã thêm vào `src/config/database.config.ts`.
- [ ] Có migration, revert được.
- [ ] Redis: inject trong repository, key `<domain>:<type>:<id>`, có TTL, secret được hash.
- [ ] Task queue `push` sau khi transaction commit.

## Config & bảo mật
- [ ] Integration mới dùng `registerAs` + `configService.getOrThrow`; biến mới có trong `.env.example`.
- [ ] Mock dùng `dev-mock.config.ts`, không rẽ nhánh theo `NODE_ENV`.
- [ ] Rate limit phù hợp; webhook idempotent, luôn trả 200.
- [ ] Không log/commit secret.

## Chất lượng
- [ ] `npm run build` và `npm run lint` pass.
