// Imports
const {
  AttachVolumeCommand,
  DetachVolumeCommand
} = require('@aws-sdk/client-ec2')
const { sendCommand, sleep } = require('./helpers')

// Declare local variables
// from stoped instance
const volumeId = 'vol-03b56bb5ec3908191'
// from newly created instance
const instanceId = 'i-01e004ed0575581e2'

async function execute () {
  try {
    await detachVolume(volumeId)
    console.log('Detached volume:', volumeId)
    await sleep(3)
    await attachVolume(instanceId, volumeId)
    console.log(`Attached volume: ${volumeId} to instance: ${instanceId}`)
  } catch (err) {
    console.error('Could not attach volume:', err)
  }
}

async function detachVolume (volumeId) {
  const params = {
    VolumeId: volumeId
  }
  const command = new DetachVolumeCommand(params);
  return sendCommand(command);
}

async function attachVolume (instanceId, volumeId) {
  const params = {
    InstanceId: instanceId,
    VolumeId: volumeId,
    Device: '/dev/sdf'
  }
  const command = new AttachVolumeCommand(params);
  return sendCommand(command)
}

execute()
