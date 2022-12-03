This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Requirements

- [curl](https://help.ubidots.com/en/articles/2165289-learn-how-to-install-run-curl-on-windows-macosx-linux)
- [nvm](https://github.com/nvm-sh/nvm#install--update-script)
  ```bash
  nvm install v18.10.0
  nvm use v18.10.0
  nvm alias default v18.10.0
  npm install npm --global
  ```
- [pnpm](https://pnpm.io/installation)
  ```bash
  npm install -g pnpm
  ```

## Help

```bash
$ make help
```

```text
Usage: make COMMAND
Commands :
help          - List available tasks
clean         - Cleanup
install       - Install dependencies
build         - Build
upgrade       - Upgrade dependencies
run           - Run
image-build   - Build a Docker image
image-run     - Run a Docker image
check-version - Ensure VERSION variable is set
release       - Create and push a new tag
```

## Build Docker Image

```
make image-build
```

## Run Docker Image

We need to pass an environment variable to the docker run command using `-e NEXT_PUBLIC_[VARIABLE_NAME]` where `[VARAIBLE_NAME]` is the name of your variable. You can also use the `--env-file` flag to specify the `.env` file.

Passing environment variables via `-e`:

```
make image-run
```

Passing environment variables via `--env-file`:

```
docker run --rm  -p 3000:3000 --env-file .env.development nextjs-web3-sample-app
```

## Getting Started

First, run the development server:

```bash
make run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/eth-balance). This endpoint can be edited in `pages/api/eth-balance.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

