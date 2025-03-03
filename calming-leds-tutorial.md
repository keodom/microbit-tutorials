# Calming LEDs

## Calming LEDs @showdialog

Sometimes we need a little help calming down when we are upset.
This project will help us make a short animation to help us focus on our breathing to help us calm down when needed.

## Let's get started! @fullscreen

We will not need the `||basic.on start||` block, so you can drag it over back to the Toolbox to delete it.
Open the `||basic:Basic||` category in the Toolbox and grab a `||basic:pause||`.
Place it in the `||basic:forever||`.
Change the 100 ms to 2 seconds which will show as 2000 ms on the block.

```blocks
basic.forever(function (){
    basic.pause(2000)
})
```

## Breathe In

Let's start our calming LEDs animation with a single LED lighting up to tell us to start breathing in.
Open the `||basic:Basic||` category in the Toolbox and grab a `||basic:show leds||`.
Place it after the `||basic:pause||` block.
Click on the square in the middle of the grid to turn on that led.

```blocks
basic.forever(function (){
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
```


## Small Diamond 🔹

Now we need to add another `||basic:pause||` block under our `||basic:show leds||`.
Change this pause to 500 ms.
Open the `||basic:Basic||` category and get a `||basic:show icon||` block and connect it below the `||basic:pause (ms) 500||`.
Change the heart to the small diamond icon.

```blocks
basic.forever(function (){
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
})
```

## Large Diamond 🔷

Now we need to add an indicator to breifly hold our breathe before we breathe out in our animation.
Duplicate (two-finger tap or right click) the `||basic:pause (ms) 500||` block.
Add it below the `||basic:show icon small diamond||` block.
Duplicate the `||basic:show icon||` block and connect it below the last `||basic:pause (ms) 500||`.
Change the small diamond to the diamond icon.

```blocks
basic.forever(function (){
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showIcon(IconNames.Diamond)
})
```

## Breath Out

Now we need to add an indicator to start breathing out in our animation.
Duplicate a `||basic:pause (ms) 500||` block.
Add it below the `||basic:show icon large diamond||` block.
Change the 500 ms to 1 second.
Duplicate the `||basic:show icon small diamond||` block and connect it below the last `||basic:pause (ms) 500||`.

```blocks
basic.forever(function (){
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
})
```

## And hold

Duplicate a `||basic:pause (ms) 500||` block.
Duplicate the `||basic:show leds||` block from the begining of our code and add it below the final `||basic:pause||` block.
We have now finished our animation!

```blocks
basic.forever(function () {
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
```


## Time to test and submit!

Now test all features of your emotion badge!
Does the micro:bit display a happy face when you press A?
Does the micro:bit display a sad face when you press B?
Does the micro:bit display the emotion you designed when you press A+B?
Great! You're ready to submit your project in Canvas!