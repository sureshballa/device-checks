//
//  ChecksumUtilities.h
//  DeviceChecksLib
//
//  Created by Suresh.Balla on 12/02/16.
//  Copyright © 2016 sureshballa. All rights reserved.
//

#import <Foundation/Foundation.h>
#include <CommonCrypto/CommonDigest.h>

@interface AiChecksum : NSObject


/**
 * Get the md5 hash of a file
 *
 * @returns		NSString
 * @since		20140120
 * @author		costmo
 * @param		path		Full path to the file
 */
+(NSString *)md5HashOfPath:(NSString *)path;

/**
 * Get the sha1 hash of a file
 *
 * @returns		NSString
 * @since		20140120
 * @author		costmo
 * @param		path		Full path to the file
 */
+(NSString *)shaHashOfPath:(NSString *)path;


@end
