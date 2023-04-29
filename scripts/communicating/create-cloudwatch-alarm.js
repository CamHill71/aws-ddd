// Imports
const {
  PutMetricAlarmCommand
} = require('@aws-sdk/client-cloudwatch')
const { sendCloudWatchCommand: sendCommand } = require('./helpers')

// Declare local variables
const alarmName = 'hamster-elb-alarm'
const topicArn = 'arn:aws:sns:ap-southeast-2:089544927069:hamster-topic'
const tg = 'targetgroup/hamsterTG/06a27b4dc4a705d7'
const lb = 'loadbalancer/app/hamsterLB/f50a84e24ee3cbb5'

async function execute () {
  try {
    const response = await createCloudWatchAlarm(alarmName, topicArn, tg, lb)
    console.log(response)
  } catch (err) {
    console.error('Error creating CloudWatch alarm:', err)
  }
}

function createCloudWatchAlarm (alarmName, topicArn, tg, lb) {
  const params = {
    AlarmName: alarmName,
    ComparisonOperator: 'LessThanThreshold',
    EvaluationPeriods: 1,
    MetricName: 'HealthyHostCount',
    Namespace: 'AWS/ApplicationELB',
    Period: 60,
    Threshold: 1,
    AlarmActions: [
      topicArn
    ],
    Dimensions:[
      {
        Name: 'TargetGroup',
        Value: tg
      }, {
        Name: 'LoadBalancer',
        Value:lb
      }
    ],
    Statistic: 'Average',
    TreatMissingData: 'breaching'
  }
  const command = new PutMetricAlarmCommand(params);
  return sendCommand(command);

}

execute()
