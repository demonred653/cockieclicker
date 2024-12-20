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
    if (game.score() > 1001) {
    	
    }
    if (game.score() == 100 || game.score() == 200) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 300 || game.score() == 400) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 500 || game.score() == 600) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 700 || game.score() == 800) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    if (game.score() == 900) {
        for (let index = 0; index < 1; index++) {
            music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (game.score() == 1000) {
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
            for (let index = 0; index < 1; index++) {
                basic.clearScreen()
                basic.showString("RESET? CLICK B")
            }
        }
    }
})
