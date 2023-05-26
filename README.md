## SuperShortener _by Mateusz Kisiel_

### Project Description

The idea behind this project is to create a URL shortener. While it could be implemented in just 50 lines of code, I decided to take a different approach and create a cannon to shoot a fly :). The project consists of a backend using NestJS and a frontend using React.

The project has been meticulously configured with the following features:

- Husky, which performs ESLint and TypeScript checks, as well as code reformatting with Prettier before each commit.
- A CircleCI pipeline that automatically updates the project on a VPS with every push to the GitHub repository.
- Docker containerization for all components.
- Reverse proxy with Nginx so that CORS doesn't need to be enabled.
- Vite-based reverse proxy for debugging purposes.
- A profile for VSCode that enables debugging of code within the container.
- Switch between dark mode and light mode.
- Switch between polish and english translations.

You can try out this app by visiting: [https://url.zaora.me](https://url.zaora.me)
