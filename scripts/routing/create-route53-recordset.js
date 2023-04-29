// Imports
const {
  ChangeResourceRecordSetsCommand
} = require('@aws-sdk/client-route-53')
const { sendRoute53Command: sendCommand } = require('./helpers')

// Declare local variables
// from aws 
const hzId = '/hostedzone/Z08677861LS6OXKHYW5N0'

async function execute () {
  try {
    const response = await createRecordSet(hzId)
    console.log(response)
  } catch (err) {
    console.error('Error creating record set:', err)
  }
}

async function createRecordSet (hzId) {
  const params = {
    HostedZoneId: hzId,
    ChangeBatch:{
      Changes:[
        {
          Action: 'CREATE',
          ResourceRecordSet:{
            Name: 'astroainetworks.com',
            Type: 'A',
            AliasTarget: {
              DNSName: 'hamsterLB-819844347.ap-southeast-2.elb.amazonaws.com',
              EvaluateTargetHealth: false,
              HostedZoneId: 'Z1GM3OXH4ZPM65'
            }
          }
        }
      ]
    }
  }
  const command = new ChangeResourceRecordSetsCommand(params);
  return sendCommand(command);
  // Link to ELB Regions:
  // https://docs.aws.amazon.com/general/latest/gr/elb.html
}

execute()
