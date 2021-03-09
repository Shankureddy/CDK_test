import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SecondAsset from '../lib/second_asset-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SecondAsset.SecondAssetStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
