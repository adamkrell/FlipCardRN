//
//  FlipViewManager.m
//  FlipCardRN
//
//  Created by Adam Krell on 1/6/16.
//  Copyright © 2016 Adam Krell. All rights reserved.
//

#import "RNFlipViewManager.h"
#import "RNFlipView.h"


@implementation RNFlipViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [RNFlipView new];
}

RCT_CUSTOM_VIEW_PROPERTY(side, NSString, RNFlipView)
{
  view.side = json ? [RCTConvert NSString:json] : @"front";
}

@end
