# Lebanon Stars :star:

**We're successful developers and software engineers from Lebanon who invented a bunch of success repositories in a place filled with obstacles and economic crises!**

**LIVE DEMO:** https://lebanon-stars.netlify.app/

<p align="center">
  <img src="https://github.com/AAVision/lebanon-stars/blob/37063f85b391caeb19cf102b943da84cb5518a85/src/assets/images/lebanon.svg" />
</p>


## Used Technologies :hammer_and_wrench:
- Angular 17.3.2
- Tailwind 3.4.3
- DaisyUI 4.9.0

## Development server :rocket:

- Install Node version `21.5.0` using NVM or from Node's website.
- Run `npm install` to install dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker :whale:

You can run the solution using docker:
Build Image:
```bash
docker build -t lebanon-star .
```

Run the Docker container:
```bash
docker run -p 4201:4200 lebanon-star
```

You can head to `localhost:4201` to access the application.


## Contribution :rotating_light:

- Star the repo.
- Fork it.
- You can add your repo info to the `data.json` file in `src/assets/files/data.json`
```bash
[
    {
        "id": "1",
        "name": "Beside You",
        "description": "❤️ We can motivate!",
        "url": "https://github.com/AAVision/beSideYou"
    },

    ...
]

```
- Create a Pull request and add your Github repo link to the description of the PR.

## LICENSE :balance_scale:

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AAVision/lebanon-stars/blob/main/LICENSE) file for details.
