input.onButtonPressed(Button.A, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.AB, function () {
    game.addScore(23)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    game.setScore(0)
})
basic.showString("Hello!")
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(game.score())
    if (game.score() > 101) {
    	
    }
    if (game.score() == 10 || game.score() == 20) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 30 || game.score() == 40) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 50 || game.score() == 60) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 70 || game.score() == 80) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 90) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (game.score() == 100) {
            music.play(music.stringPlayable("C5 F E B C5 - - - ", 120), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . # . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . #
                # # # # #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
                # . # . #
                # # # # #
                # # . # #
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                # # # # #
                # # . # #
                # # # # #
                . . . . .
                `)
            game.addScore(1)
            for (let index = 0; index < 0; index++) {
                basic.clearScreen()
                basic.showString("RESET? CLICK B")
            }
        }
    }
})
