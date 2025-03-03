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

Now, we don't want out hand variable to always be 0, we need it to change, randomly, each time we play!
Open the `||math:Math||` category in the Toolbox and grab a `||math: random number from 0 to 10||` block.
Place it in the `||variables:set hand||` block in place of the 0.

```blocks
let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
})
```

## Conditional time!

Now we need our program to be able to make decisions based on our variable's value, so we need a **conditional**.
**Conditionals** allow programs to run some code when a certain condition is met or true.
Open the `||logic:Logic||` category and grab a `||logic:if true then||` block.
Place it after the `||variables:set hand||` block.
Since Rock, Paper, Scissors has 3 possiblities, we need 3 sections on our **if** block.
Click the **plus** on the **if** block twice to make 3 sections.


```blocks
let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (true) {
	
    } else if (false) {
	
    } else {
	
}
})
```

## 🪨

Now, we need to check to see **if** the micro:bit should show a rock.
Open the `||logic:Logic||` category and grab a `||logic:0 = 0||` block.
Place that block where the `||logic:if||` block says **true**.
Now, grab a `||basic:show icon||` block  and place it in the **if** block in the first then section.
Change the heart to the small square icon to represent rock.


```blocks
let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
	    basic.showIcon(IconNames.SmallSquare)
    } else if (false) {
	
    } else {
	
}
})
```

## 📃

What about if **hand = 2**?
Well, then that can be paper!
Duplicate the **hand = 1** block and place it where the conditional in place of **false**.
Change the 1 to a 2.
Duplicate the `||basic:show icon||` block and place in the next section of the conditional.
Change the small square icon to the square icon to represent paper.

```blocks
let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
	    basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
	    basic.showIcon(IconNames.Square)
    } else {
	
}
})
```


## ✂️

Only one option left to code!
Since there are no other possiblities, we don't have to check to see if hand = 3!
Duplicate the `||basic:show icon||` block and place it in the last section of the conditional.
Change the square to the scissors icon.


```blocks
let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
	    basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
	    basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
}
})
```


## Time to test and submit!

Now let's let's our game!
Shake the micro:bit several times until you see all 3 options show on the screen.
Did it work?
Great! You're ready to submit your project in Canvas!