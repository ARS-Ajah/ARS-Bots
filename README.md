# ARS-Bots

## What is ARS Bots

> [ARS Bots](https://github.com/ARS-Ajah/ARS-Bots) is an Open Source GitHub Repositories for A Prebuilt Discord Bots
>
> > Builded By [ARS-Ajah](https://github.com/ARS-Ajah/)

## How To Setup

- First Go To [Discord Developer Portal](https://discord.dev) And Create new Applications
- Then Copy Your token from your Discord Bots [Example Links](https://discord.com/developers/applications/BOT-USER-ID/bot)
- Then Copy Your Bot User ID [Example Links](https://discord.com/developers/applications/BOT-USER-ID/information)
- And Lastly Your Guild ID (Optional) [Turn On Developer Mode In Discord](https://www.youtube.com/watch?v=Akturol-8o4)

## How To Install

First Install **Node.js & Git** Here is a link for all of them:

- `Node.js:` [Nodejs.org](https://nodejs.org/en/download/package-manager)

* `Git:` [Git-scm.com](https://www.git-scm.com/downloads)

### For Linux

- Clone the Repositories with this command

```sh
$~ git clone https://github.com/ARS-Ajah/ARS-Bots.git
```

- Remove **.** From **.package.json**

- Change **.env.example** to .env and change the content for example

```env
TOKEN="MTI0NjQ4MzA5NDc5NDUzOTA3OQ.GCJ337.8UzSY6gAD81_zBEdhIrNwtCYg74fHsyyjcsRpU"
ID="1"
GUILD="1"
```

**DISCLAIMER: Don't use this Token. It's Expired :D**

- Start the run.sh file with this

```sh
$~ chmod +x script-name-here.sh
$~ ./run.sh
```

- (Optional) If you want the Command to be **Globally**/_Not Stored in 1 Guild_ Then change the **handleCommands.js** at this part

```js
const data = await rest.put(
    Routes.applicationCommands(process.env.ID, process.env.GUILD),
    { body: commands },
);
```

**To This**

```js
const data = await rest.put(
    Routes.applicationCommands(process.env.ID),
    { body: commands },
);
```

And You can safely Delete Your GUILD environment variables

### For Windows

- Clone the Repositories with this command

```sh
git clone https://github.com/ARS-Ajah/ARS-Bots.git
```

- Remove **.** From **.package.json**

- Change **.env.example** to .env and change the content for example

```env
TOKEN="MTI0NjQ4MzA5NDc5NDUzOTA3OQ.GCJ337.8UzSY6gAD81_zBEdhIrNwtCYg74fHsyyjcsRpU"
ID="1"
GUILD="1"
```

**DISCLAIMER: Don't use this Token. It's Expired :D**

- And then install **Discord.js & dotenv** Using this command

```sh
npm i discord.js dotenv 
```

- Also install nodemon and eslint and save it as dev(Optional)

```sh
npm i nodemon eslint --save-dev
```

- If you didn't Use eslint then delete the `.eslintrc.json`

- Then run this in **TWO** Seperate **Powershell**

```sh
npm start
```

```sh
npm install
```

- (Optional) If you want the Command to be **Globally**/_Not Stored in 1 Guild_ Then change the **handleCommands.js** at this part

```js
const data = await rest.put(
    Routes.applicationCommands(process.env.ID, process.env.GUILD),
    { body: commands },
);
```

**To This**

```js
const data = await rest.put(
    Routes.applicationCommands(process.env.ID),
    { body: commands },
);
```

And You can safely Delete Your GUILD environment variables

## How to Report Bug

Report any bug to:

- [Github Issues Tab](https://github.com/ARS-Ajah/ARS-Bots/issues)
- [Discord Server](https://discord.gg/Rpg7wmq5t2)
- Or Contact me at [kimininyipa@gmail.com](mailto:kimininyipa@gmail.com)

## Did You Know?

1. ARS Ajah Was Started Going on his Dev Journey in 2020!
2. The first GitHub Repositories made by ARS Ajah was ars-ajah.github.io
3. ARS-Bots Was an Repositories made in 2024!
4. The first programming languages that ARS-Ajah know was JavaScript
5. ARS-Ajah Join Github In 

## Resources

### Main:

- Discord.js Home: [Click Me!](https://discord.js.org/)
- dotenv Home : [Click Me!](https://www.npmjs.com/package/dotenv)
- Nodemon Home [Click Me!](https://nodemon.io/)
- Eslint Home: [Click Me!](https://eslint.org/)

### Add-ons:

- Nano Editor: [Click Me!](https://nano-editor.org/)
- Bot-hosting: [Click Me!](https://bot-hosting.net)
- Ubuntu: [Click Me!](https://ubuntu.com/)
- Pterodactyl: [Click Me!](https://pterodactyl.io/)
- Docker: [Click Me!](https://www.docker.com/)

## Notes! (Important)

**If you only install Git & Node.js when you see this Repositories then I am sorry but I Hate You**