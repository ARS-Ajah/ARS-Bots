# ARS-Bots
## What is ARS Bots
ARS Bots is an Open Source GitHub Repositories for A Prebuilt Discord Bots
## How To install
First Install **Node.js & Git** Here is a link for all of them:

`Node.js:` [Nodejs.org](https://nodejs.org/en/download/package-manager)

`Git:` [Git-scm.com](https://www.git-scm.com/downloads)

### For Linux

Clone the Repositories with this command
```sh
$~ git clone https://github.com/ARS-Ajah/ARS-Bots.git
```

Start the run.sh file with this 

```sh
$~ chmod +x script-name-here.sh
$~ ./run.sh
```

Add change sections **Scripts** and add **Start Command** In the Package.json (It is recommended to use Nano)
```json
{
  "scripts": {
    "start": "npx nodemon index.js",
    "install": "node deploy-commands.js"
  },
}
```

Change **.env.example** to .env and change the content for example
```env
TOKEN="MTI0NjQ4MzA5NDc5NDUzOTA3OQ.GCJ337.8UzSY6gAD81_zBEdhIrNwtCYg74fHsyyjcsRpU"
ID="1"
GUILD="1"
```
**DISCLAIMER: Don't use this Token. It's Expired :D**

### For Windows

After installing **Node.js and Git** run this command to install initialize **package.json**
```sh
npm init
```
After initializing **Package.json** add change sections **Scripts** and add **Start Command** and **Install Command**
```json
{
  "scripts": {
    "start": "npx nodemon index.js",
    "install": "node deploy-commands.js"
  },
}
```
And then install **Discord.js & dotenv** Using this command
```sh
npm i discord.js dotenv
```
Also install nodemon and eslint and save it as dev(Optional)
```sh
npm i nodemon eslint --save-dev
```
If you didn't Use eslint then delete the `.eslintrc.json`

Then clone the Repositories with this command
```sh
git clone https://github.com/ARS-Ajah/ARS-Bots.git
```

Change **.env.example** to .env and change the content for example
```env
TOKEN="MTI0NjQ4MzA5NDc5NDUzOTA3OQ.GCJ337.8UzSY6gAD81_zBEdhIrNwtCYg74fHsyyjcsRpU"
ID="1"
GUILD="1"
```
**DISCLAIMER: Don't use this Token. It's Expired :D**

Then run this in **TWO** Seperate **Powershell**
```sh
npm start
```
```sh
npm install
```


## How to Report Bug

Report any bug to [Github Issues Tab](https://github.com/ARS-Ajah/ARS-Bots/issues) Or On my [Discord Server](https://discord.gg/Rpg7wmq5t2)

## Message
If you only install Git & Node.js when you see this Repositories then I am sorry but I Hate You