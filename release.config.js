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
      },
    ],
    ["@semantic-release/release-notes-generator"],
    ["@semantic-release/npm"],
    ["@semantic-release/github"],
    ["@semantic-release/changelog"],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
