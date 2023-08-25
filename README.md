# [Portfolio app](https://perchusha.github.io/Portfolio/)

Greetings! This portfolio project consists of a client built with React and a server built with Node.js, which I'm slowly filling out.
<br><br>
The client offers three main functionalities: Calculator, Paint, and API Fetcher.
<br><br>
The server provides a basic API for working with MongoDB data. All endpoints are separated into routes and have full documentation.

[LinkedIn: Anton Perch](https://www.linkedin.com/in/anton-perch-768578113/)

## Table of Contents

- [Features](#features)
    - [Client Features](#client-features)
    - [Server Features](#server-features)
- [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
      - [Client](#client)
      - [Server](#server)
- [Contributing](#contributing)
- [License](#license)

## Features

### Client Features

1. **Calculator**: Calculator is an online application that allows users to perform mathematical operations and calculations directly in the browser. It has various basic functions and features.
<br><br>
2. **Paint**: Paint is an interactive online application that allows users to draw, create digital drawings and graphics directly in the browser. It has various tools and functions, similar to how it is done in graphic editors, but works in a web environment.
<br><br>
3. **API Fetcher**: The API fetcher on the front is a mechanism that facilitates making HTTP requests to a remote server or API from within your web application. It is a key part of the architecture of web applications that work with server data, as it allows you to exchange information between the client and server parts of the application.

### Server Features

1. [**User Management API**](./server/API.md): The server provides the basic API data endpoints for managing users. 
    - Fetch all users.
    - Retrieve user by ID.
    - Delete user by ID.
    - Add new user.
    - Edit user by ID.

## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/Perchusha/Portfolio`.
2. Navigate to the project directory: `cd portfolio`.
3. Run `yarn prepare` in root folder for installing dependencies for client and server.
4. Run `yarn start` to start the client and server at the same time.
5. Run `yarn build` to build client and server.
6. Run `yarn lint` to lint client and server via eslint.

### Usage

#### Client

1. Start the project: In the `client` directory, run `yarn start`.
2. Build the project: In the `client` directory, run `yarn build`.

#### Server

1. Start the project: In the `server` directory, run `yarn start`.
2. Start debug mode: In the `server` directory, run `yarn watch`.
3. Build the project: In the `server` directory, run `yarn build`.

## Contributing

Contributions are welcome! Firstly, this is my portfolio, so I don’t expect any functional additions, perhaps this is not an income haha. So feel free to point out my mistakes.

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b new-branch-name`.
3. Commit your changes: `git commit -m "Description of your changes"`.
4. Push the branch to your fork: `git push origin new-branch-name`.
5. Create a pull request detailing your changes.

## License

This project is licensed under the [MIT License](license.txt).
