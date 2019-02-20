# Testing React Apps

## Play around with the demo app!

If you'd like to play around with the demo app you can do so at this link: https://benjamminj.github.io/testing-react-apps-talk/

## Getting up and running

If you want to get the demo up and running locally, the fastest way is to check out the project on [CodeSandbox](https://codesandbox.io/s/github/benjamminj/testing-react-apps-talk)! If you haven't used CodeSandbox, it's an online IDE that has _everything_ pre-installed and ready to go! All you've got to do is click the link and you're up and running!

If you'd prefer to run the code on your own computer, you can get up and running with the following steps:

### Clone the repository

```bash
git clone https://github.com/benjamminj/testing-react-apps-talk.git
cd testing-react-apps-talk
```

### Install dependencies

If you're not using [Yarn](https://yarnpkg.com/en/), I'd recommend installing it to make sure you get exactly the same dependencies as this project! If you've got Yarn installed, you can add all the project's dependencies with the following command:

```bash
# in the testing-react-apps-talk folder
yarn
```

### Run locally!

This will get the app running in a local environment that you can play around with!

```bash
yarn start
```

### Run the tests!

Since this _is_ a testing workshop, I'd be remiss if I didn't include how to run the tests! You can run the tests with the following command:

```bash
yarn test
```

## Troubleshooting

If there's things going wrong, this project is built on top of [Create React App](https://facebook.github.io/create-react-app/). My guess is that we'll be able to find any issues through looking at their docs 🙃

## Technologies Used / Links

- [`react`](https://reactjs.org/)
- [`jest`](https://jestjs.io/)
- [`react-testing-library`](https://testing-library.com/react)
- [`jest-dom`](https://github.com/gnapse/jest-dom#readme)
