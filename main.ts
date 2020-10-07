input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello my name is Landon.")
    basic.showString("I am in 6th grade and am 11 years old. ")
    basic.showString("Let's be friend and help each other.")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("I want to play a game.")
    basic.showString("We can play rock, paper, scissors")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I think we should be friends.")
    basic.showString("We can have a lot of fun.")
    basic.showString("We can go swimming or ride are bikes.")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
