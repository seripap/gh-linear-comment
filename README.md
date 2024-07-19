# Github Linear Comment

Add a comment to a Linear ticket via GitHub Actions.

`linear-issue-id` looks like `ENG-1234`.
`body` can be formatted with markdown.

# Usage

### .github/workflows/labeled-issue.yml

Push a new linear issue when issues are tagged with `triaged`

```yaml
name: Comment on Linear Ticket

on:
  push:
    branches:
      - '**'
jobs:
  comment-linear-ticket:
    runs-on: ubuntu-latest
    steps:
      - name: 'Comment'
        uses: seripap/gh-linear-comment@v1
        with:
          linear-key: your-linear-api-key
          linear-issue-id: your-linear-team-id
          body: ${{ github.event.issue.body }}
```
