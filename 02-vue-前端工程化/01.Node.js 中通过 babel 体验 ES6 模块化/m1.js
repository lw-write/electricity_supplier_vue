let a = 10;
let c = 20;
let d = 30;

function show() {
    console.log(11111111);

}
export default {
    a,
    c,
    show
}
export let s1 = 'aaa';
export let s2 = 'ccc';
export function say() {
    console.log('ooooooo')
}
// 只能使用一次export default
// export default {
//     d
// }