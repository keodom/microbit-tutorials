input.onGesture(Gesture.Shake, function () {
    let hand = 0
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
    	
    }
})
