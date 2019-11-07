const { range, fromEvent } = rxjs
const { map, filter } = rxjs.operators

const input = document.querySelector('.input')
const link = document.querySelector('#btn1')

const $inputFocus = fromEvent(input, 'focus')
const $inputBlur = fromEvent(input, 'blur')
const $linkClick = fromEvent(link, 'click')

// 测试代码
$inputFocus.subscribe((e) => {
    console.log('inputFocus focus:', e)
})

$inputBlur.subscribe((e) => {
    console.log('inputBlur blur:', e)
})

$linkClick.subscribe(() => {
    console.log('inputFocus click')

    input.focus()
})

// range(1, 200).pipe(
//     filter(x => x % 2 === 1),
//     map(x => x + x)
// ).subscribe(x => console.log(x));