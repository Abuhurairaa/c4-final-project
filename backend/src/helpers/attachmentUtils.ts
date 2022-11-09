import * as AWS from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk/lib'
const AWSXRay = require('aws-xray-sdk')

const XAWS = AWSXRay.captureAWS(AWS)

// TODO: Implement the fileStogare logic
export class AttachmentUtils {
    constructor(
        private readonly s3 = new XAWS.S3({ signatureVersion: 'v4' }),
        private readonly bucketName = process.env.S3_BUCKET_NAME,
        // private readonly expirationTime = process.env.SIGNED_URL_EXPIRATION
    ) { }

    getAttachmentUploadUrl(todoId: string): string {
        return this.s3.getSignedUrl('putObject', {
            Bucket: this.bucketName,
            Key: todoId,
            // Expires: parseInt(this.expirationTime!)
        })
    }
}