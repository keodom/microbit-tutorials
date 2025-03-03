# Counter

## micro:bit Counter @showdialog

Imagine you are going on a nature walk to gather some data for science class.
You need to count how many bees you see.
You could bring a clipboard with paper and pencil and use tally marks OR we could use the micro:bit by making a counter program!

## Let's get started! @fullscreen

We will not need the ``||basic.forever||`` block, so you can drag it over back to the Toolbox to delete it.
Now, let's start by displaying 0 on the micro:bit LEDs becuase we haven't counted anything yet!
Place the ``||basic:show number||`` block in the ``||basic:on start||``.

```blocks
basic.showNumber(0)
```

## Let's make a variable!

A variable is a container for storing values. Click on the ``||variables:Variables||`` category in the Toolbox. Click on the **Make a Variable** button. Give your new variable the name "**count**" and click **Ok**.

## Initializing our variable

Click on the ``||variables:Variables||`` category in the Toolbox again. You'll notice that there are some new blocks that have appeared. Drag a ``||variables:set count||`` block into the ``||basic:on start||`` block.

```blocks
let count = 0;
basic.showNumber(0)
count = 0
```

## Let's start counting!

Open the ``||input:Input||`` category in the Toolbox and drag a ``||input:on button A  pressed||`` block into your workspace.

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Updating our variable when we press button A

Open the ``||variables:Variables||`` category and drag a ``||variables:change count||`` block and place it inside the ``||input:on button A pressed||`` event block. Test your counter program. Do you see the count increasing? Not yet!

```blocks
input.onButtonPressed(Button.A, function () {
    count += 1
})
```

## Viewing what's stored in our Variable

We also need to tell the micro:bit to display the count on the LEDs! Open the ``||basic:Basic||`` category and drag over a ``||basic:show number||`` block and connect it below the ``||variables:change count||``. Then open the ``||variables:Variables||`` category and grab a ``||variables:count||`` block and put it in place of the 0 on the ``||basic:show number||`` block.

```blocks
input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
```


## What if we want to see our count without changing it?

Open ``||input:Input||`` and drag a ``||input:on button A pressed||`` block into your workspace and change the A to  B.
Duplicate (two-finger tap or right-click on the block) your **show number count** block from the button A code and drag it inside the button B code.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
```

## What if we wanted to start counting something different?

We would need to start counting over from 0 right?
Open the ``||input:Input||`` category and grab another ``||input:on button A pressed||`` block. Change the A to A+B. Then add a ``||basic:show number||`` block and a ``||variables:set count||`` block.

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    count = 0
})
```

## Time to test and submit!

Now test all features of your counter!
Does the count increase when you press A?
Does the value of count display when you press B?
Does the count reset when you press A+B? Great!
You're ready to submit your project in Canvas!