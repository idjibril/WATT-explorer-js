var api = 'http://127.0.0.1:11877';
var donationAddress = "WA3URoGxSeXa91qrCqtugRjWhz3xdAgWCKHdqG1niMbRKsA5WRcRMJPNSPQKP2g1zz5EHf8dfpmMJVC56exMYSnV2Y9YhRXZH";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'WATT'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "WATT": [
	["pool.watt.cash", "https://pool.watt.cash:8119"]
 ]
};

var networkStat2 = {
    "WATT": [
	[""]
 ]
};
