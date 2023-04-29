// Imports
const {
  PutObjectCommand
} = require('@aws-sdk/client-s3')
const helpers = require('./helpers')

// Declare local variables
// created bucket
const bucketName = 'hamster-bucket-perth'

async function execute () {
  try {
    const files = await helpers.getPublicFiles()

    for (const file of files) {
      const response = await uploadS3Object(bucketName, file)
      console.log('Uploaded file with ETag:', response.ETag)
    }
    console.log({files})
    console.log('Uploaded all files')
  } catch (err) {
    console.error('Error uploading files to S3:', err)
  }
}

async function uploadS3Object (bucketName, file) {
  const params = {
    Body: file.contents,
    Bucket: bucketName ,
    ACL:"public-read",  
    Key: file.name,
    ContentType: helpers.getContentType(file.name)
  }
  const command = new PutObjectCommand(params);
  return helpers.sendS3Command(command);
}

execute()
