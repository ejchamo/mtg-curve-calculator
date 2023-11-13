/* eslint-disable no-console */
import { connection } from "../boot.js";
import UserSeeder from "./seeders/UserSeeder.js";
import DeckSeeder from "./seeders/DeckSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here

    console.log("seeding users");
    await UserSeeder.seed();

    console.log("seeding decks");
    await DeckSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
