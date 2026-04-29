# Security Notes

- All content is rendered from trusted local static data structures (no raw HTML rendering).
- `dangerouslySetInnerHTML` is not used anywhere.
- External links open with `rel="noopener noreferrer"`.
- YouTube embeds use controlled, fixed `embedUrl` values from local data and explicit `title` attributes.
- No auth simulation, no sensitive storage, and no secrets/tokens are included.
- Architecture is componentized and data-driven for maintainability and future backend integration.
