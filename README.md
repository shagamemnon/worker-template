# 👷Cloudflare  `worker` Hello World

A simple template for creating a project with Cloudflare Workers.

## Requirements
- [Node.js version 14.x or later](https://nodejs.org/en/)
- [Wrangler](https://developers.cloudflare.com/workers/tooling/wrangler)
- [An account on Cloudflare](https://dash.cloudflare.com/sign-up)

## Quick Start
  
```sh
# Test install
wrangler --version
```
```sh
# Authenticate with Cloudflare and download API token
wrangler config
```

```sh
# Generate template and enter repository
wrangler generate hello-cf-worker https://github.com/shagamemnon/worker-template;
cd hello-cf-worker
```

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.
