bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    SendDsitanceAndSpeed()
    basic.pause(500)
    Connected = true
    CarCtrl()
    DoSpeed()
})
function SendDsitanceAndSpeed () {
	
}
function DoSpeed () {
	
}
function CarCtrl () {
	
}
let Connected = false
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.showIcon(IconNames.StickFigure)
Connected = false
let Speed = 100
