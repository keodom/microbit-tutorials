# Rock, Paper, Scissors

## Rock, Paper, Scissors @showdialog

Sometimes we just write programs to have some fun, like making video games!
Today, you are going to make a simple game on the micro:bit that can play Rock, Paper, Scissors.

## Let's get started! @fullscreen

We will not need the `||basic.forever||` or `||basic:on start||` blocks, so you can delete them both.
Open the `||input:Input||` category in the Toolbox and grab a `||input: on shake||` block.

```blocks
input.onGesture(Gesture.Shake, function ()
```

## Time for a variable

Remember, a variable is a container for storing values. Click on the `||variables:Variables||` category in the Toolbox.
Click on the **Make a Variable** button.
Give your new variable the name **hand** and click **Ok**.
We named the variable **hand** because it will be storing what your hand does in Rock, Paper, Scissors!

## Time to initialize our variable

Click on the `||variables:Variables||` category in the Toolbox again.
You'll notice that there are some new blocks that have appeared.
Drag a `||variables:set hand||` block into the `||input:on shake||` block.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function (){
    hand = 0
})
```

## Now, let's randomize our variable's value!



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