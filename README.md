# Portfolio app

---

Greetings! This project in my portfolio consists of a client built with React and a server built with Node.js, which I'm slowly filling out.
<br><br>
The client offers three main functionalities: Calculator, Paint, and API Fetcher.
<br><br>
The server provides a basic API for working with mock-data. All endpoints are separated into routes and have full documentation.

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

1. Clone the repository: `git clone https://github.com/Perchusha/landingTemp`
2. Navigate to the project directory: `cd landingTemp`
3. Run `yarn prepare` in root folder for installing dependencies for client and server
4. Run `yarn start:client` to run client part of project
5. Run `yarn start:server` to run server part of project

### Usage

#### Client

1. Start the project: In the `client` directory, run `yarn start`.
2. Build the project: In the `client` directory, run `yarn build`.
3. Lint the project: In the `client` directory, run `yarn lint`.

#### Server

1. Start the project: In the `server` directory, run `yarn start`.
2. Start debug mode: In the `server` directory, run `yarn start:dev`.
3. Build the project: In the `server` directory, run `yarn build`.
4. Lint the project: In the `server` directory, run `yarn lint`.

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
