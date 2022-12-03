.DEFAULT_GOAL := help
VERSION := $(shell cat ./pages/index.js | sed -n "s#const Version =\s*'\(.*\)'#\1#p" )

#help: @ List available tasks
help:
	@clear
	@echo "Usage: make COMMAND"
	@echo "Commands :"
	@grep -E '[a-zA-Z\.\-]+:.*?@ .*$$' $(MAKEFILE_LIST)| tr -d '#' | awk 'BEGIN {FS = ":.*?@ "}; {printf "\033[32m%-13s\033[0m - %s\n", $$1, $$2}'

#clean: @ Cleanup
clean:
	@rm -rf node_modules/ dist/

#install: @ Install dependencies
install:
	pnpm install

#build: @ Build
build: install
	pnpm build

#upgrade: @ Upgrade dependencies
upgrade:
	pnpm upgrade

#run: @ Run
run: install
	@next dev

#image-build: @ Build a Docker image
image-build:
	docker build -t nextjs-web3-sample-app:$(VERSION) .

#image-run: @ Run a Docker image
image-run: image-build
	@docker run --rm -p 3000:3000 -e NEXT_PUBLIC_RPCENDPOINT='https://eth-mainnet-public.unifra.io' nextjs-web3-sample-app:$(VERSION)

#check-version: @ Ensure VERSION variable is set
check-version:
ifndef VERSION
	$(error VERSION is undefined)
endif
	@echo -n ""

#release: @ Create and push a new tag
release: check-version
	@echo -n "Are you sure to create and push ${VERSION} tag? [y/N] " && read ans && [ $${ans:-N} = y ]
	git commit -a -s -m "Cut ${VERSION} release"
	git tag ${VERSION}
	git push origin ${VERSION}
	git push
	echo "Done."
