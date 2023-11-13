const Model = require("./Model.js");

class Deck extends Model {
  static get tableName() {
    return "decks";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        cards: { type: "object" },
      },
    };
  }

  static get relationMappings() {
    const { User } = require("./index.js");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "decks.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Deck;
