led.enable(true)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(1000)
})
