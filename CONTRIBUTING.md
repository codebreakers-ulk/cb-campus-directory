---

### File 2: `CONTRIBUTING.md`
**Location in your project:** Root directory (`cb-campus-directory/CONTRIBUTING.md`)

```markdown
# Contributing to Campus Resource Directory

Thank you for contributing to Codebreakers! Here are the rules to ensure smooth collaboration.

---

## Important Rules

1. **Claim Before You Code:** Browse open issues on GitHub. Comment on the issue you want to work on. Wait for a maintainer to assign it to you before opening a PR.
2. **One Issue = One Branch:** Never commit directly to `main`. Create a descriptive branch (e.g., `git switch -c add-library-resource`).
3. **No External Libraries:** Keep this project 100% vanilla (no Bootstrap, Tailwind, or npm packages).
4. **Automated/Bot PRs will be closed immediately.**

---

## How to Add a New Resource

1. Fork and clone the repository.
2. Open `js/data.js`.
3. Add your resource entry to the end of the `resources` array following this structure:
   ```javascript
   {
     id: 5,
     title: "Resource Name",
     category: "Academic",
     description: "One or two concise sentences describing this resource.",
     url: "[https://valid-link.com](https://valid-link.com)",
     tags: ["tag1", "tag2"]
   }