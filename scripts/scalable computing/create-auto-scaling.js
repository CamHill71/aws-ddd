// Imports
const {
  CreateAutoScalingGroupCommand,
  PutScalingPolicyCommand
} = require('@aws-sdk/client-auto-scaling')

const { sendAutoScalingCommand } = require('./helpers')

// Declare local variables
const asgName = 'hamsterASG'
const ltName = 'hamsterLT'
const policyName = 'hamsterPolicy'
// from created load balancer
const tgArn = 'arn:aws:elasticloadbalancing:ap-southeast-2:089544927069:targetgroup/hamsterTG/06a27b4dc4a705d7'


async function execute () {
  try {
    const response = await createAutoScalingGroup(asgName, ltName)
    await createASGPolicy(asgName, policyName)
    console.log('Created auto scaling group with:', response)
  } catch (err) {
    console.error('Failed to create auto scaling group with:', err)
  }
}

function createAutoScalingGroup (asgName, ltName) {
  const params = {
    AutoScalingGroupName:asgName,
    AvailabilityZones: [
      'ap-southeast-2b',
      'ap-southeast-2a'      
    ],
    LaunchTemplate:{
      LaunchTemplateName:ltName
    },
    MaxSize: 2,
    MinSize:1,
    TargetGroupARNs: [ tgArn ]
  }
  const command = new CreateAutoScalingGroupCommand(params);
  return sendAutoScalingCommand(command);
}

function createASGPolicy (asgName, policyName) {
  const params = {
    AdjustmentType:'ChangeInCapacity',
    AutoScalingGroupName:asgName,
    PolicyName:policyName,
    PolicyType:'TargetTrackingScaling',
    TargetTrackingConfiguration: {
      TargetValue: 5,
      PredefinedMetricSpecification: {
        PredefinedMetricType: 'ASGAverageCPUUtilization'
      }
    }
  }
  const command = new PutScalingPolicyCommand(params);
  return sendAutoScalingCommand(command);
}

execute()