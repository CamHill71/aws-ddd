// Imports
const {
  CreateLaunchTemplateCommand
} = require('@aws-sdk/client-ec2')

const helpers = require('./helpers')

const ltName = 'hamsterLT'
const roleName = 'hamsterLTRole'
const sgName = 'hamster_sg'
const keyName = 'hamster_key'

async function execute () {
  try {
    const profileArn = await helpers.createIamRole(roleName)
    const response = await createLaunchTemplate(ltName, profileArn)
    console.log('Created launch template with:', response)
  } catch (err) {
    console.error('Failed to create launch template with:', err)
  }
}

async function createLaunchTemplate (ltName, profileArn) {
  const params = {
    LaunchTemplateName:ltName,
    LaunchTemplateData: {
      IamInstanceProfile: {
        Arn:profileArn
      },
      // Images ami id from AWS
      ImageId: 'ami-020414fac96a4dc04',
      InstanceType: 't2.micro',
      keyName: keyName,
      SecurityGroups:[sgName],
      UserData: "IyEvYmluL2Jhc2gKY3VybCAtby0gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL252bS1zaC9udm0vdjAuMzkuMy9pbnN0YWxsLnNoIHwgYmFzaApzdWRvIHl1bSBpbnN0YWxsIC15IG5vZGVqcwpzdWRvIHl1bSBpbnN0YWxsIC15IGdpdApjZCAvaG9tZS9lYzItdXNlcgpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0NhbUhpbGw3MS9hd3MtZGRkLmdpdApjZCBhd3MtZGRkCnN1ZG8gbnBtIGkKc3VkbyBucG0gcnVuIHN0YXJ0"
    },
    
    
  }
  const command = new CreateLaunchTemplateCommand(params);  
  return helpers.sendCommand(command);
}

execute()