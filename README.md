## SuperShortener _by Mateusz Kisiel_

### Project description
The idea is simple - url shortener. It could be written in 50 lines of code. 
But I decided to take an another approach and create a cannon to shoot a fly :)
The project concists of NestJS as backend and React as Frontend.
It is very neatly configured:
- Husky with checking ESLint, Typescript and reformating with Prettier on precommit  
- CircleCI pipeline to automaticaly update project on VPS on every push to Githbub repo
- Everything contenerized with Docker
- Reverse proxy with Nginx so that CORS doesn't need to be enabled.
- Reverse proxy in debug using vite. 
- Profile for VSCode to debug code from container.
- Planned switch between dark mode and light mode

You can try this app here: https://url.zaora.me