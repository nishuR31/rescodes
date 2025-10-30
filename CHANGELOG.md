# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.2] - 2025-10-30 (Pending Release)
### Added / Updated
- Prepared new version with minor improvements and optimizations in internal code.
- Verified that compiled JS + `.d.ts` are included properly in `dist/`.
- Ensured all internal ESM imports have `.js` extensions for Node `NodeNext`/`Node16`.
- Ready to be published once npm cooldown allows.

### Notes
- This is a **pre-release version**, fixing packaging and internal import issues from 1.0.1.
- Consumers should see smooth installation and proper runtime imports after publishing.

---

## [1.0.1] - 2025-10-30
### Fixed / Updated
- Compiled TypeScript source into JavaScript + type declarations (`.d.ts`) for proper Node ESM consumption.
- Fixed ESM import paths: added `.js` extensions for internal module imports.
- Resolved runtime import errors for consumers using Node `NodeNext`/`Node16`.
- Ensured `dist/` contains both `.js` and `.d.ts` files for smooth npm usage.
- Cleaned up `tsconfig.json` for proper strict type checking and module resolution.

### Notes
- This version corrects the first npm release which only contained `.d.ts` files.
- But is unpublished.

---

## [1.0.0] - 2025-10-29

### Initial Release

* First published version.
* Included only TypeScript declaration files (`.d.ts`), missing compiled JavaScript.
* Basic structure and utility functions for HTTP status code messages.

