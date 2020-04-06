<p align="center"><img  src="https://github.com/keeqler/rocketseat-omnistack-11/blob/master/frontend-mobile/src/assets/logo@3x.png?raw=true"></p>
<h1 align="center">Rocketseat OmniStack bootcamp project</h1>
<p align="center">A project made during the <strong>Rocketseat OmniStack bootcamp</strong>. The project's name is "Be The Hero", that consists of a website that you can register an NGO (non-governmental organization) and then register cases that need help, in order to find for a "hero". It also consists of a mobile app that people who are willing to help can use to see a list of all cases with all the details.</p>

## What I used

### Language:

Javascript (NodeJS)

### Back-end:

- Express
- Knex (ORM)
- SQLite
- Celebrate
- Jest
- Supertest

### Front-end:

- React
- React Native
- Styled Components
- Unform
- Yup

### DevOps:

- Docker Compose

## Running

### Requirements:

- Docker Compose
- Yarn

### Getting started

Open up your terminal and clone this repo with the following command:

```shell
$ git clone http://github.com/keeqler/rocketseat-omnistack-11
```

### Running the API and the React web app

In the project's directory root, run:

```shell
$ docker-compose up -d
```

The API and the web app will be available at `localhost:3333` and `localhost:3000` respectively.

### Running the mobile app

Firstly, open an Android or iOS emulator, if you don't want to use an emulator, you can download Expo Client in your phone at Google Play or Apple App Store and scan the QR code that will appear in the terminal after you start the app. After that, you can navigate to the mobile app directory (`frontend-mobile`) and run:

**For Android:**

```shell
$ yarn android
```

**For iOS:**

```shell
$ yarn ios
```

If you don't have `expo-cli` package installed globally, you may be prompted to install it.
