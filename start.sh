#!/bin/bash

# nvm
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;
# nvm end

# pnpm
export PNPM_HOME="/home/ubuntu/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

# main
pnpm start
# main end