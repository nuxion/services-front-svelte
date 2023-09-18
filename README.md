# Services-Front-Svelte

This is part of [services tool](https://github.com/nuxion/services)

It could be used for `frontend` part of the service. 

This template includes support for:

- Svelte
- Taildwindcss

## Quickstart

A easy way to copy the files into your proyect is using [degit](https://github.com/Rich-Harris/degit).

We will reproduce the example of https://github.com/nuxion/services/tree/main/example.

1- We our project created the first step is clonning the frontend code:

```
degit https://github.com/nuxion/services-front-svelte front
```

2- After the files are copied, you will need to check the `tailwind.config.cjs` file and modify it to your project: 

```
content: ["./src/**/*.{html,js,svelte,ts}", "../<your-app>/templates/**/*.html"],
```


3- Finally, install the node dependencies:

```
cd front/
yarn install
```
## Testing template locally

It's possible to test this template locally using the `http-server` of nodejs:

```
npx http-server --cors
```

By default it will server files located in the `public/` folder.

You will need to have both servers running:  vite server and http-server

Then in the browser go to the address served by `http-server`

## Resources

- Tailwind was added using [svelte-add](https://github.com/svelte-add/)
- [degit](https://github.com/Rich-Harris/degit).
- [services tool](https://github.com/nuxion/services)
- [legacy browsers](https://www.npmjs.com/package/@vitejs/plugin-legacy)
