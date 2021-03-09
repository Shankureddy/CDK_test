#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SecondAssetStack } from '../lib/second_asset-stack';

const app = new cdk.App();
new SecondAssetStack(app, 'secondassetstackbucket');
