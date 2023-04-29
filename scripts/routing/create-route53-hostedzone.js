// Imports
const {
  CreateHostedZoneCommand
} = require('@aws-sdk/client-route-53')
const { sendRoute53Command: sendCommand, sendRoute53Command } = require('./helpers')

// Declare local variables
const hzName = 'astroainetworks.com'

async function execute () {
  try {
    const response = await createHostedZone(hzName)
    console.log(response)
  } catch (err) {
    console.error('Error creating hosted zone:', err)
  }
}

function createHostedZone (hzName) {
  const params = {
    Name: hzName, // required
    CallerReference: `${Date.now()}`
  }
  const command = new CreateHostedZoneCommand(params);
  return sendCommand(command);
}

execute()
