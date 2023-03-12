let P2 = 0
let P1 = 0
let P15 = 0
let P13 = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
basic.forever(function () {
    P13 = pins.digitalReadPin(DigitalPin.P13)
    P15 = pins.digitalReadPin(DigitalPin.P15)
    P1 = pins.analogReadPin(AnalogPin.P1)
    P2 = pins.analogReadPin(AnalogPin.P2)
    if (P13 == 0) {
        radio.sendString("Up")
    } else if (P15 == 0) {
        radio.sendString("Down")
    } else {
        if (P2 > 550 && (P1 > 400 && P1 < 600)) {
            radio.sendValue("F", P2)
        } else if (P2 < 450 && (P1 > 400 && P1 < 600)) {
            radio.sendValue("B", P2)
        } else if (P1 < 450 && (P2 > 400 && P2 < 600)) {
            radio.sendValue("L", P1)
        } else if (P1 > 550 && (P2 > 400 && P2 < 600)) {
            radio.sendValue("R", P1)
        } else {
            radio.sendString("Stop")
        }
    }
})
