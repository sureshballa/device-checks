var deviceChecks;

module.exports.initiaize = function(var byPass){
  deviceChecks = DeviceChecks.alloc().initWithBybassFlag(false);
}

module.exports.isBluetoothEnabled = function (){
  return deviceChecks.isBluetoothEnabled();
}
