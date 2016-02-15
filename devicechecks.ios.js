var deviceChecks;

module.exports.initiaize = function(byPass){
  deviceChecks = DeviceChecks.alloc().initWithBybassFlag(byPass);
}

module.exports.isBluetoothEnabled = function (){
  return deviceChecks.isBluetoothEnabled();
}

module.exports.isUSBConnected = function (){
  return deviceChecks.isUSBConnected();
}

module.exports.IsROOTEDorJailbrokenDevice = function (){
  return deviceChecks.isJailbroken();
}

module.exports.IsDEBUGMode = function (){
  return deviceChecks.isCurrentProcessRunningInDebugMode();
}

module.exports.getSHA1OfApp = function (appName){
  var filePath = NSBundle.mainBundle().pathForResourceOfType(appName, null);
  return deviceChecks.getSHA1(filePath);
}

module.exports.getMD5OfApp = function (appName){
  var filePath = NSBundle.mainBundle().pathForResourceOfType(appName, null);
  return deviceChecks.getMD5(filePath);
}
