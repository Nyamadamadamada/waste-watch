# Makefile
MAKEFILE_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

start:
	yarn run dev

lint:
	yarn run lint
	yarn run fmt

setup:
	cp $(MAKEFILE_DIR).env.dist $(MAKEFILE_DIR).env
	yarn install -g firebase-tools
	yarn i
