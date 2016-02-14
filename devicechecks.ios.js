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
