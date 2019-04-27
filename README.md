# nuxt-firebase

> Nust.js deploy ready for firebase functions and host

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

# Install Nuxt.js app

### 1. Old method (deprecated / preferred because webpack 4) [read more...](https://www.telerik.com/blogs/getting-started-with-nuxtjs)

```
$ npm install -g @vue/cli @vue/cli-init
$ vue init nuxt-community/starter-template <project-name>
```

### 2. Npx generator (based on old webpack 3 and lots of security warning) [read more...](https://github.com/nuxt/create-nuxt-app)

```
$ npx create-nuxt-app <my-project>

or

$ npm init nuxt-app <my-project>
```

### Setup firebase env

```
firebase functions:config:set environment.apikey=""
firebase functions:config:set environment.authdomain=""
firebase functions:config:set environment.databaseurl=""
firebase functions:config:set environment.projectid=""
firebase functions:config:set environment.storagebucket=""
firebase functions:config:set environment.messagingsenderid=""
```
