<p align="center"><img src="https://github.com/keeqler/rocketseat-omnistack-11/blob/master/frontend-mobile/src/assets/logo@3x.png?raw=true"></p>
<h1 align="center">Be the Hero</h1>
<p align="center">A project made during the <strong><a href="https://rocketseat.com.br">Rocketseat</a> OmniStack 11 course</strong>. It consists of a web application where you can register necessities of NGOs (non-governmental organizations) in order to find someone who wants to help, or a "hero". It also consists of a mobile app for people who wants to help, where they can see a list of all cases with all the details.</p>

# 📸 Screenshots

<p align="center">
  <img src="https://i.imgur.com/cTd1ZYZ.png">
  <img src="https://i.imgur.com/zQbiFCC.png">
  <img src="https://i.imgur.com/UB69SkK.png">
  <img src="https://i.imgur.com/79ET5di.png">
  <img src="https://i.imgur.com/ix4PCd1.png">
</p>

# ✅ Certificate

<p align="center"><img src="https://i.imgur.com/cv9tidg.png"></p>

# 🔥 Technologies/libraries

### 🌐 Back-end:

- [Express](https://expressjs.com)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org)
- [Celebrate](https://github.com/arb/celebrate)
- [Jest](https://jestjs.io)
- [Supertest](https://github.com/visionmedia/supertest)

### 💻 Front-end:

- [React](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [Styled Components](https://styled-components.com)
- [Unform](https://unform.dev)
- [Yup](https://github.com/jquense/yup)

### 🛠 DevOps:

- [Docker Compose](https://www.docker.com/)

# 🎉 Running

### ⚠️ Requirements:

- [Docker Compose](https://www.docker.com/)
- [Yarn](https://yarnpkg.com)
- [Expo CLI](https://expo.io)

### 🚀 Running the API and the React web app

After clonning this repository, start Docker Compose containers:

```shell
$ docker-compose up -d
```

The API and the web app are going to be available at `localhost:3333` and `localhost:3000` respectively.

### 📱 Running the mobile app

Firstly, open an Android or iOS emulator, if you don't want to use an emulator, you can download Expo Client in your phone at Google Play or Apple App Store and scan the QR code that will appear in the terminal after you start the app.

If you don't have Expo CLI installed globally, you can install it by running:

```shell
$ yarn global add expo-cli
```

Finally, you can navigate to the mobile app directory (`frontend-mobile`) and run:

**Android:**

```shell
$ yarn android
```

**iOS:**

```shell
$ yarn ios
```
