//
//  FlipView.h
//  FlipCardRN
//
//  Created by Adam Krell on 1/6/16.
//  Copyright © 2016 Adam Krell. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTView.h"

@interface FlipView : RCTView

/**
 * Creates a flip transition animation (side = 'front' or 'back').
 * This makes it look as if a new view was flipped into place,
 * but the view actually remains the same.
 */
@property (nonatomic, assign) NSString *side;

@end
