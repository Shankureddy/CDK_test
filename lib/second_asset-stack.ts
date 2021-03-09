import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as path from 'path'
import * as s3Deploy from '@aws-cdk/aws-s3-deployment'
import { RemovalPolicy, Tag, Tags } from '@aws-cdk/core';
import { BucketAccessControl, BucketEncryption, BlockPublicAccess } from "@aws-cdk/aws-s3"

export class SecondAssetStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // new s3.Bucket(this, 'MyFirstBucket', {
    // versioned: true
    // });
   // The code that defines your stack goes here
    
   const itineraryBucket = new s3.Bucket(this, `${id}`, {
    bucketName: `${id}`,
    removalPolicy: RemovalPolicy.DESTROY, //Removing bucket if change needed
    versioned: false,
    accessControl: BucketAccessControl.PRIVATE,
    encryption: BucketEncryption.UNENCRYPTED,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  });

   const destinationBucket = s3.Bucket.fromBucketName(this, 'BucketByName', `${id}`);
   //const fileAsset = new Asset(this, 'SampleSingleFileAsset', {
     //path: path.join('./Assets', 'file-asset.txt')
   //});

   //console.log(byName);
   new s3Deploy.BucketDeployment(this, 'DeployMeWithoutDeletingFilesOnDestination', {
     sources: [s3Deploy.Source.asset(path.join('./Assets'))],
     destinationBucket,
     prune: false,
   });




    
  }
}
