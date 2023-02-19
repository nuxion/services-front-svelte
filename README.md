# Services-Front-Svelte

This is part of [services tool](https://github.com/nuxion/services)

It could be used for `frontend` part of the service. 

This template includes support for:

- Svelte
- Taildwindcss

## Quickstart

One way to copy the files into your proyect easily is using [degit](https://github.com/Rich-Harris/degit).

We will reproduce the example of https://github.com/nuxion/services/tree/main/example.

1- We our project created the first step is clonning the frontend code:

```
degit user/repo front
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

## Resources

- Tailwind was added using [svelte-add](https://github.com/svelte-add/)
- [degit](https://github.com/Rich-Harris/degit).
- [services tool](https://github.com/nuxion/services)
