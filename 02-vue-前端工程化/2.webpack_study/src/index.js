import $ from 'jquery';
import './css/1.css';
import './css/2.less';
import './css/3.scss';
$(function() {
    $('li:even').css('backgroundColor', '#05a')
    $('li:odd').css('backgroundColor', '#1c0')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)