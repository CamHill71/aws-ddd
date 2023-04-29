// Imports
const {
  SubscribeCommand
} = require('@aws-sdk/client-sns')
const { sendSNSCommand: sendCommand } = require('./helpers')

// Declare local variables
const type = 'sms'
const endpoint = '61415418213'
const topicArn = 'arn:aws:sns:ap-southeast-2:089544927069:hamster-topic'

async function execute () {
  try {
    const response = await createSubscription(type, topicArn, endpoint)
    console.log(response)
  } catch (err) {
    console.error('Error subscribing to topic:', err)
  }
}

function createSubscription (type, topicArn, endpoint) {
  const params = {
    Protocol: type,
    TopicArn: topicArn,
    Endpoint: endpoint
  }
  const command = new SubscribeCommand(params);
  return sendCommand(command);
}

execute()
