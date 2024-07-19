const core = require("@actions/core");
const linear = require("@linear/sdk");

(async () => {
  const apiKey = core.getInput("linear-key");
  const issueId = core.getInput("linear-issue-id");

  const body = core.getInput("body");

  const linearClient = new linear.LinearClient({ apiKey });
  await linearClient.createComment({
    body,
    issueId,
  });

  return;
})();
