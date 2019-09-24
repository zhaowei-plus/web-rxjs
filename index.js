const button = document.querySelector("#button")
button.addEventListener('click', () => {
    console.log('Button click')
})

// rx 创建 observable
Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => console.log('Clicked!'));