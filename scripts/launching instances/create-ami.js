// Imports
const {
  EC2Client,
  CreateImageCommand
} = require('@aws-sdk/client-ec2')

function sendCommand (command) {
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}

// enter instance id from running EC2 instances
createImage('i-0aeebe021c29fd55f', 'hamsterImage')
  .then(() => console.log('Complete'))

async function createImage (seedInstanceId, imageName) {
  const params = {
    InstanceId: seedInstanceId,
    Name:imageName
  }

  const command = new CreateImageCommand(params);
  return sendCommand(command);

}
