# Portfolio Project — Working Rules

## Project goal
Build and maintain my personal Product Design portfolio.
Use Lisa Sue Fischer's portfolio as a reference for layout,
visual simplicity, project grid and interaction patterns.
Do not copy her branding, text, assets or identity.

## Source of truth
- Figma: approved visual design and responsive specifications.
- Repository: current implementation and code conventions.
- GitHub: version history, pull requests and review.
- Live website: actual deployed behavior.

If these sources conflict, report the conflict before making
a significant decision. Do not silently choose one.

## Before every task
1. Inspect the relevant files and existing implementation.
2. Restate the requested outcome in concrete terms.
3. Identify assumptions, missing information and risks.
4. List the files likely to change.
5. Ask questions only when an unresolved detail materially
   affects the result. Otherwise, state a reasonable assumption.

## Implementation rules
- Make the smallest change that solves the problem.
- Reuse existing components and styles when appropriate.
- Do not redesign unrelated pages or remove working features.
- Do not add dependencies without explaining why.
- Preserve responsive behavior and accessibility.
- Do not overwrite Figma designs or modify unrelated code.
- Never commit, merge or deploy without my authorization.

## Verification
After each implementation:
1. Review the complete diff.
2. Run relevant checks and report their actual results.
3. Test affected interactions and responsive layouts.
4. Compare the browser result against approved Figma designs.
5. Check for regressions on previously working pages.

Do not claim a test passed if it was not run.

## Completion report
Report:
- What changed and why.
- Files modified.
- Checks performed and their results.
- Known issues and unverified assumptions.
- Git branch, commit or PR, where applicable.
- Deployment status and live verification evidence.

Distinguish implemented, tested, deployed and verified.

## Standing rules
- Every change goes to Figma first as a clickable prototype.
  Code it only after my green light.
- Before every commit or merge, show me the message so I can
  confirm it or write my own.
- New Figma iterations are copies (vN+1); never edit the
  current version in place.
- Whenever CSS or JS changes, bump the ?v= version on the
  styles.css and script.js links in every page.
