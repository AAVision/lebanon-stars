# Leabnon Stars

![alt text](https://github.com/AAVision/lebanon-stars/blob/37063f85b391caeb19cf102b943da84cb5518a85/src/assets/images/logo-min.webp)



## Used Technologies
- Angular 17
- Tailwind 3.4.1
- DaisyUI 4.7.3

## Docker

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Contribution

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

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AAVision/lebanon-stars/blob/main/LICENSE) file for details.
