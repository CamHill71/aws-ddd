// Imports
const {
  EC2Client,
  AuthorizeSecurityGroupIngressCommand,
  CreateKeyPairCommand,
  CreateSecurityGroupCommand
} = require('@aws-sdk/client-ec2')

const helpers = require('./helpers')

function sendCommand (command) {
  // set region from .env constant
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}

// Declare local variables
const sgName = 'hamster_sg'
const keyName = 'hamster_key'

// Do all the things together
async function execute () {
  try {
    //await createSecurityGroup(sgName)
    //const keyPair = await createKeyPair(keyName)
    //await helpers.persistKeyPair(keyPair)
    const data = await createInstance(sgName, keyName)
    console.log('Created instance with:', data)
  } catch (err) {
    console.error('Failed to create instance with:', err)
  }
}

// Create functions
async function createSecurityGroup (sgName) {
  const sgParams = {
    Description: sgName,
    GroupName: sgName
  }
  const createCommand = new CreateSecurityGroupCommand(sgParams)
  const data = await sendCommand(createCommand)

  const rulesParams = {
    GroupId: data.GroupId,
    IpPermissions: [
      {
        ipProtocol: 'tcp',
        FromPort:22,
        ToPort:22,
        IpRanges:[{CidrIp: '0.0.0.0/0'}]
      },
      {
        ipProtocol: 'tcp',
        FromPort:3000,
        ToPort:3000,
        IpRanges:[{CidrIp: '0.0.0.0/0'}]
      }
    ]
  }
  const authCommand = new AuthorizeSecurityGroupIngressCommand(rulesParams)
  return sendCommand(authCommand)
}

async function createKeyPair (keyName) {
  const params = {
    KeyName: keyName
  }
  const command = new CreateKeyPairCommand(params)
  return sendCommand(command)
}

async function createInstance (sgName, keyName) {
  console.debug({sgName});
  const params = {
    // From AWS Amazon Linux 2023 AMI(Amazon Machine Image) ID
    ImageId: 'ami-0d9f286195031c3d9',
    InstanceType: 't2.micro',
    KeyName: keyName,    
    SecurityGroup:[sgName],
    MaxCount: 1,
    MinCount:1
  }
}

execute()
