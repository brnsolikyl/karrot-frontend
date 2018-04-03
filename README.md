This is a fork from the original software [Karrot](https://github.com/yunity/karrot-frontend), and the aim here is to adapt it to be used by Bike Kitchens which operate in a similar logic of coordinating volunteer team-work (working shifts at the workshops and pickups of donated bikes).

We've only made minor changes to the frontend: texts, icons and other graphics.

# Setup

## Requirements

- [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)

To clone and install:

```
git clone https://github.com/yunity/karrot-frontend.git
cd karrot-frontend
yarn
```

To run the local dev server:

```
yarn dev
```

To lint and run the tests:

```
yarn lint
yarn test
```

If you want to use an eslint plugin for your editor, please keep in mind that you either have to install all eslint plugins listed in package.json globally or you run `yarn install`. Otherwise your eslint plugin may not work.

# Attribution

_Karrot_ is built with open-source software. Here are some of them:

- [Django](https://www.djangoproject.com/)
- [Django REST framework](http://www.django-rest-framework.org/)
- [VueJS](https://vuejs.org/) + vuex
- [Quasar Framework](http://quasar-framework.org/)
- [Twemoji](https://github.com/twitter/twemoji)
