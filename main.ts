bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    SendDsitanceAndSpeed()
    basic.pause(500)
    connected = true
    while (connected) {
        uartdata = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        CarCtrl()
        DoSpeed()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = false
})
function SendDsitanceAndSpeed () {
	
}
function DoSpeed () {
    if (uartdata == "1") {
        speed = 20
    } else if (uartdata == "2") {
        speed = 50
    } else if (uartdata == "3") {
        speed = 100
    } else if (uartdata == "4") {
        speed = 120
    } else if (uartdata == "5") {
        speed = 160
    } else if (uartdata == "6") {
        speed = 180
    } else if (uartdata == "7") {
        speed = 220
    } else if (uartdata == "8") {
        speed = 255
    } else if (uartdata == "B1") {
        speed = 160
    } else if (uartdata == "B2") {
        speed = 180
    } else if (uartdata == "B3") {
        speed = 200
    } else if (uartdata == "B4") {
        speed = 255
    }
}
function CarCtrl () {
	
}
let uartdata = ""
let speed = 0
let connected = false
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.showIcon(IconNames.StickFigure)
connected = false
speed = 100
