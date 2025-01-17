// Imports
const {
  EC2Client,
  DescribeInstancesCommand,
  TerminateInstancesCommand
} = require('@aws-sdk/client-ec2')

function sendCommand (command) {
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}

async function listInstances () {
  const command = new DescribeInstancesCommand({});
  const data = await sendCommand(command);
  return data.Reservations.reduce((i,r) => {
    return i.concat(r.Instances)
  },[])
}

async function terminateInstance (instanceId) {
  const params = {
    InstanceIds:[ instanceId ]
  }
  const command = new TerminateInstancesCommand(params);
  return sendCommand(command);
}

listInstances().then(console.log)
// choose an ami to terminate
//terminateInstance('i-01bd4e3f947a6b920').then(console.log)
