// 0 = single vendo, and set the first "vendoIp"
// 1 = traditional (client choose a vendo), 
// 2 = interface name ( this will preserve one hotspot server ip only)
var VendoOption = 0;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "Main Vendo", //change accordingly to your vendo name
		vendoIp: "10.0.0.5", //change accordingly to your vendo ip
		interfaceName: "Vlan10", // hotspot interface name preser
	},
	{
		vendoName: "XKids1 Pisowifi", //change accordingly to your vendo name
		vendoIp: "10.0.0.3", //change accordingly to your vendo ip
		interfaceName: "VLAN-11", // hotspot interface name preser
	},
	{
		vendoName: "XKids2 Pisowifi", //change accordingly to your vendo name
		vendoIp: "10.0.0.4", //change accordingly to your vendo ip
		interfaceName: "VLAN-12", // hotspot interface name preser
	},
	{
		vendoName: "XKids3 Pisowifi", //change accordingly to your vendo name
		vendoIp: "10.0.0.5", //change accordingly to your vendo ip
		interfaceName: "VLAN-13", // hotspot interface name preser
	}
	
	
];

//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

var randomMacSync = true; //if "true" enable random mac sync on mikrotik onlogin script.

var showPauseTime = true;

var EnableConvertVoucher = false;

// Telegram Feature
var EnableTelegram = true;

// Notify for every coin inserted by custmer via Telegram.
var CoinDropNotify = true;

// Telegram Token
var  telegramToken  = "7628232416:AAHZL1nwx3X2lU2MkGo3iYotLM0VZ7Qv0uM";

// Telegram ChatID
var  telechatId = "6687826751";

// If voucher starts with these letters then "Extend time" and "Pause time" will be removed
var noExpause = ['ME', 'MO', 'Ec'];
var Subscription = true; 
// if noExpause set above, replace true if you want to replace remaining time into "SUBSCRIPTION"

var Footer = 'JamesTech v4.4'