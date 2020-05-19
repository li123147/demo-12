const $square = $('#app3.square')

import $ from 'jquery'
import './app3.css'


$square.on('click', () => {
    $square.toggleClass('active')
    //如果没有就加上，如果有就加上
})