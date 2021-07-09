function Solution(n) {
    let ladder = {}
    ladder[0] = 1
    let x = 1
    while(!Object.values(ladder).includes(n)) {
        debugger
        doublingUp = ladder[x-1]*2
        addingUp = ladder[x-1]+1
        if (doublingUp<=n) {
            ladder[x] = doublingUp
        } else if(doublingUp>n && (ladder[x-2]+1)*2 <= n) {
            ladder[x-1] = ladder[x-2]+1
            x--
        } else {
            ladder[x] = addingUp
        }
        x++
    }
    console.log(ladder)
    return Object.keys(ladder).length
}

newNum = ladder[x-1]*2
if (newNum<n) {
    ladder[x] = newNum
} else {
    ladder[x-1] = ladder[x-2]+1
}
x++

if (n%2==0) {
    n=n/2
    x++
} else {
    n=n-1
    x++
}