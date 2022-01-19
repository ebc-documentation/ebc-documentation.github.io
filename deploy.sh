#!/bin/bash

# GIT_USER the username for a GitHub account that has push access to the deployment repo. 
# For your own repositories, this will usually be your GitHub username.
# Required if not using SSH eg. GIT_USER=<GITHUB_USERNAME>, and ignored otherwise.

USE_SSH=true \
CURRENT_BRANCH=main \
yarn deploy