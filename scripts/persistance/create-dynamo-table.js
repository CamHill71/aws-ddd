// Imports
const {
  CreateTableCommand
} = require('@aws-sdk/client-dynamodb')
const { sendDynamoDBCommand } = require('./helpers')

async function execute () {
  try {
    await createTable('hamsters')
    const data = await createTable('races')
    console.log(data)
  } catch (err) {
    console.error('Could not create tables:', err)
  }
}

async function createTable (tableName) {
  const params = {
    TableName: tableName, // required
    AttributeDefinitions: [ // AttributeDefinitions // required
      { // AttributeDefinition
        AttributeName: "id", // required
        AttributeType: "N", // required
      },
    ],
      KeySchema: [ // KeySchema // required
      { // KeySchemaElement
        AttributeName: "id", // required
        KeyType: "HASH", // required
      },
    ],
    ProvisionedThroughput: { // ProvisionedThroughput
      ReadCapacityUnits: 5, // required
      WriteCapacityUnits: 5, // required
    },
  }

  const command = new CreateTableCommand(params);
  return sendDynamoDBCommand(command);
}

execute()