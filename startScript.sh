#!/bin/bash
DIRECTORY=node_modules
if [ ! -d "$DIRECTORY" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  echo yarn installing...
  yarn install

fi

yarn start