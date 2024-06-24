#!/bin/sh
# Make Greeting
echo -e "\033[91m[ARS Utility]\033[39m Welcome to ARS Bots Installer!"
sleep 1
echo -e "\033[91m[ARS Utility]\033[39m Installing..."
# Install Package
npm i dotenv discord.js
npm i nodemon eslint --save-dev
# Starting
echo -e "\033[91m[ARS Utility]\033[39m Starting..."
sleep 1
# Actual Start
npm install