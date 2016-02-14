//
//  DeviceChecksUtility.h
//  DeviceChecksLib
//
//  Created by Suresh.Balla on 12/02/16.
//  Copyright © 2016 sureshballa. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreBluetooth/CoreBluetooth.h>
#import <UIKit/UIKit.h>

@interface DeviceChecks : NSObject

@property CBCentralManager *bluetoothManager;


- (id)initWithBybassFlag:(BOOL)byPass;

-(BOOL)isJailbroken;

-(NSString *)getSHA1: (NSString *)path;
-(NSString *)getMD5: (NSString *)path;


-(BOOL)isCurrentProcessRunningInDebugMode;

-(BOOL)isBluetoothEnabled;

-(BOOL)isUSBConnected;


@end

