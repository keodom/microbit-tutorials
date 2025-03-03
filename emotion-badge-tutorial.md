# Emotion Badge

## Emotion Badge @showdialog

Some people have difficulty understanding their own and others' emotions. In this project we will design a program to help people to identify emotions through facial expressions!

## Let's get started! @fullscreen

We will not need the ``||basic.forever||`` block, so you can drag it over back to the Toolbox to delete it.
Open the ``||basic:Basic||`` category in the Toolbox and grab a ``||basic:clear screen||``.
Place it in the ``||basic:on start||``.

```blocks
basic.clearScreen()
```

## Button Pressing

Open the ``||input:Input||`` category in the Toolbox and drag a ``||input:on button A  pressed||`` block into your workspace.

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## A = 😊

Open `||basic:Basic||` and  grab a `||basic:show Icon||` block and place it inside the `||input:on button A pressed||`.
Change the heart to the happy face.


```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
```

## B = 😞

Duplicate (two-finger tap or right-click on the block) your `||input:on button A pressed||` code and change the A to B.
On the `||basic:show icon||` block, change the happy face to the sad face.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
```

## A+B = ??

Now its time for you to create a third emotion expression using buttons A+B together!
Open `||input:Input||` and grab a `||input:on button A pressed||` event block and change A to A+B.
Open `||basic:Basic||` and grab a `||basic:show leds||` block and add it to your **button A+B** code.
Now, create your own facial expression on the show leds block!

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
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