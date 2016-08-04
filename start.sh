#!/usr/bin/env bash

cat << EOF
----------------------------------------------------
Start installation of:
 - typescript
 - angular-cli
 - webpack

IMPORTANT: Installataion require root access.
EOF

function install_npm {
  #Check if npm exist
  if hash npm 2>/dev/null; then
    sudo npm install -g angular-cli typescript webpack
  else
    echo "You need to install node & npm (Node Package Manager) before go on."
  fi
#  sudo  npm install -g angular-cli typescript webpack  
}


read -p "Do you wish to install these packages? (Y/n) " userInput;

if [ "$userInput" == "Y" ]; then
  install_npm;
else
  exit;
fi



