// Imports
const {
  RunInstancesCommand,
  StopInstancesCommand
} = require('@aws-sdk/client-ec2')
const { sendCommand } = require('./helpers')

// Declare local variables
const sgName = 'hamster_sg'
const keyName = 'hamster_key'
// get running instance not autoscaled
const instanceId = 'i-0a357f76a64dac8ae'

async function execute () {
  try {
    await stopInstance(instanceId)
    const data = await createInstance(sgName, keyName)
    console.log('Created instance with:', data)
  } catch (err) {
    console.error('Failed to create instance with:', err)
  }
}

async function createInstance (sgName, keyName) {
  const params = {
    ImageId: 'ami-0d9f286195031c3d9',
    InstanceType: 't2.micro',
    KeyName: keyName,
    MaxCount: 1,
    MinCount: 1,
    Placement: {
      AvailabilityZone: 'ap-southeast-2c'
    },
    SecurityGroups: [ sgName ]
  }
  const command = new RunInstancesCommand(params)
  return sendCommand(command)
}

function stopInstance (instanceId) {
  const params = {
    InstanceIds: [ instanceId ]
  }
  const command = new StopInstancesCommand(params)
  return sendCommand(command)
}

execute()
