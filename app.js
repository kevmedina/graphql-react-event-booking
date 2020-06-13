const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return ["Romantic Cooking", "Sailing", "All Night Coding"];
      },
      createEvent: (args) => {
        const eventName = args.eventName;
        return eventName;
      },
    },
    graphiql: true,
  })
);

app.listen(3000, () => console.log(`Server is running on localhost:3000`));
