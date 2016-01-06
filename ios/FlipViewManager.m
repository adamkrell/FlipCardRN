//
//  FlipViewManager.m
//  FlipCardRN
//
//  Created by Adam Krell on 1/6/16.
//  Copyright © 2016 Adam Krell. All rights reserved.
//

#import "FlipViewManager.h"
#import "FlipView.h"


@implementation FlipViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [FlipView new];
}

RCT_CUSTOM_VIEW_PROPERTY(side, NSString, FlipView)
{
  view.side = json ? [RCTConvert NSString:json] : @"front";
}

@end
