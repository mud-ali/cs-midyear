[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

# CS Midyear

## Authors

- [Mudasir](https://github.com/mud-ali)
- [Areeb](https://github.com/reeb72)
- [Ibrahim](https://github.com/ibrahimwichka)

## About the App

Oftentimes, social media traps people into spheres that simply reaffirm their personal biases. Many people never challenge their beliefs because they are never contested by the people they interact with. This application matches people with starkly different opinions and lets them debate, allowing them to broaden their worldview and think about the opposite opinions. This application can also be used by aspiring or professional debaters. Using a point-value system, more skilled debaters are frequently matched together, allowing new contenders to improve and further challenging the experienced.

## Technical Details

The frontend is written in NextJS, a [web development framework](https://nextjs.org/) to enhance [React-](https://react.dev/)based applications. We use Typescript along with [TailwindCSS](https://tailwindcss.com/) to design our layouts and components.

On the backend, we use a Flask server, which is mapped to the frontend using the NextJS API handler. On the dev server, this is done using two separate ports, while the production server uses Vercel Serverless functions. The Flask Session library is used to manage preservation of authentication state, which is required for matching users. The server uses SQLite 3 for a single file database, with API routes for different utility queries.

Further technical details, as well as setup instructions for a development environment, can be found in [CONTRIBUTING.md](CONTRIBUTING.md)
