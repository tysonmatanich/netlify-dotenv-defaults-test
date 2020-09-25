require("dotenv-defaults").config({
  path: "./.env",
  defaults: "./.defaults.env",
});

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([
      process.env.SAMPLE_1,
      process.env.SAMPLE_2,
      process.env.SAMPLE_3,
      process.env.SAMPLE_4,
    ]),
  };
};
