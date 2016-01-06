//
//  FlipView.m
//  FlipCardRN
//
//  Created by Adam Krell on 1/6/16.
//  Copyright © 2016 Adam Krell. All rights reserved.
//

#import "FlipView.h"

@implementation FlipView

- (void)setSide:(NSString *)side
{
  if (side != _side) {
    _side = side;
    [UIView transitionWithView:self
                      duration:.3
                       options:[side isEqualToString:@"front"] ? UIViewAnimationOptionTransitionFlipFromLeft :
     UIViewAnimationOptionTransitionFlipFromRight
                    animations:NULL
                    completion:NULL];
  }
}

@end
