import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Token Reward System exposes project metadata", () => {
  assert.equal(project.slug, "token-reward-system");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
