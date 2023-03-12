# Build apps in 10x speed 🚢

Hey builder 👋
I made this template to allow you to build apps in 10x speed. It's a template that I use for my own projects and I'm sharing it with you. It has a lot of features that I use in my projects and I hope you will find it useful. If you have any questions or suggestions, feel free to open an issue or contact me on Twitter.

## Features

- [x] [Next.js](https://nextjs.org/) - ReactJS framework that allows you to create full-stack apps
- [X] [Capacitor](https://capacitorjs.com/) - Build framework to export your JavaScript app to native apps
- [X] [Tailwind CSS](https://tailwindcss.com/) - CSS framework for inline-styles (design system)
- [X] [DaisyUI](https://daisyui.com/) - Tailwind CSS components (I use this for my projects)
- [X] [PostHog](https://posthog.com/) - Best analytics tool for developers (Better than GA and Mixpanel because it's so easy to use)
- [ ] [Prisma](https://www.prisma.io/) - Management library for databases (adding this soon)
- [ ] [Stripe](https://stripe.com/) - Payment processing for the internet (adding this soon)
- [ ] Anything else that I can think of

## How to use

### The Maker's Way ✨

I am using the [Fish Shell](https://fishshell.com/). It allows you to create an alias for nearly everything. I have an alias for this template that I use to create new projects. You can use it like this:

```bash 
alias ship "npx create-next-app --example https://github.com/0w9/weekend-template.git"
```

This will allow you to create a new project like this:

```bash
ship my-new-project
```

### The Normal Way 🤷‍♂️

Adding this soon. Just clone the repo, go into it and run `npm install` or `yarn install`.

## Running the app

### As web app

```bash
npm run dev
```

... yep, that's all. No special commands or anything. Just run the command and you will be able to see the app running on `localhost:3000`.

### As native app

To run the app as a native app, you need to have [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) installed. After that I have created a list of commands in the `package.json` file that you can use to run the app on your device.

### Run in iOS simulator

```bash
npm run ship ios
```

### Run in Android emulator

```bash
npm run ship android
```

🚨 Those commands build and export the app, sync with Capacitor and then run the app in the simulator/emulator. It takes a while to run the first time, but after that it's much faster.

If there are any issues with the commands, you can always run the commands manually. Here is the list of commands that you can use:

[Package JSON](package.json)

image: https://i.imgur.com/aTcmo45.png
