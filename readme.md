# The Pokémon Go Project

This project draws inspiration from Niantic's renowned game, Pokémon Go. It is crafted to provide an engaging experience while enhancing your logic-building skills.

## Overview

- **Backend**: Express.js
- **Database**: MongoDB

## Naming Conventions

- **Variable and Function Names**: Utilize underscores `_` for multi-word identifiers (e.g., `variable_name`).
- **File Names**: Employ hyphens `-` for multi-word filenames (e.g., `file-name.js`).
- **MongoDB Model Properties**: Adopt `camelCase` notation (e.g., `propertyName`).
- **Default Imports**: Adopt `camelCase` notation.

## Purpose

This project serves both educational and entertainment purposes. It offers an opportunity to delve into backend logic and database interactions akin to those found in Pokémon Go.

## About Pokémon Go

Pokémon Go is an augmented reality (AR) mobile game developed by Niantic. It allows players to capture, train, and battle virtual creatures called Pokémon, which appear as if they are in the player's real-world location. The game encourages physical activity and exploration, making it a unique blend of gaming and real-world interaction.

## Pokémon GO Offcial App Links

Visit these links to download **Pokémon GO**:

- Google Play Store (Android): [Play Store](https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo)
- Apple App Store (iOS): [App Store](https://apps.apple.com/app/id1094591345)

## Pokémon GO Official App Links

Visit these links to download **Pokémon GO**:

- Google Play Store (Android): [Play Store](https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo)
- Apple App Store (iOS): [App Store](https://apps.apple.com/app/id1094591345)

## Initial Setup

If you are cloning the repository and testing it, make sure to first hit the following routes to create necessary entries in the database:

- `POST http://localhost:port/pokedex-pokemon/all`
- `POST http://localhost:port/inventory-item/defaults`

After that, you can register using the route:

- `POST http://localhost:port/trainee/register`

<!-- ## Features

- **Real-Time Data Handling**: Learn how to manage real-time data using Express.js and MongoDB.
- **User Authentication**: Implement secure user authentication mechanisms.
- **Pokémon Data Management**: Handle data related to various Pokémon, including their attributes and statistics.
- **Interactive Gameplay**: Simulate gameplay mechanics such as capturing and training Pokémon.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Set up your MongoDB database.
4. Run the server using `npm start`.

## Contribution Guidelines

We welcome contributions to enhance the project. Please adhere to the following guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code follows the established naming conventions and coding standards.
- Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Enjoy coding and have fun exploring the world of Pokémon Go! -->
