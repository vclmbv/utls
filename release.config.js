export default {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
};

/*
export default {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { scope: "breaking", release: "major" },
          { scope: "no-release", release: false },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "revert", release: "patch" },
          { type: "style", release: "patch" },
          { type: "build", release: false },
          { type: "chore", release: false },
          { type: "ci", release: false },
          { type: "test", release: false },
        ],
        parserOpts: { noteKeywords: ["Breaking Change", "Breaking Changes"] },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "build",
              section: "System build & External packages",
              hidden: true,
            },
            { type: "chore", section: "Chores", hidden: true },
            { type: "ci", section: "CI/CD", hidden: true },
            { type: "docs", section: "Docs", hidden: false },
            { type: "feat", section: "Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false },
            { type: "perf", section: "Performance", hidden: false },
            { type: "refactor", section: "Refactor", hidden: false },
            { type: "revert", section: "Reverts", hidden: false },
            { type: "style", section: "Styles", hidden: false },
            { type: "test", section: "Tests", hidden: true },
          ],
        },
        parserOpts: { noteKeywords: ["Breaking Change", "Breaking Changes"] },
        writerOpts: { commitsSort: ["subject", "scope"] },
      },
    ],
    ["@semantic-release/github"],
    ["@semantic-release/npm", { pkgRoot: ".", tarball: "dist" }],
    [
      "@semantic-release/changelog",
      { changelogFile: "CHANGELOG.md", changelogTitle: "# CHANGELOG" },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
*/
