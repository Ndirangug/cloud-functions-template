// @ts-nocheck
import { functions, db, admin } from "./setup";

export const greeting = functions.https.onRequest(
  async (request, response) => {
    try {
      const { user } = request.body;
      response.json(`Hello ${user ?? 'world' }`);
    } catch (error) {
      functions.logger.error(error);
      response.status(500).json(error);
    }
  },
);


