var point = 0;
var all_stopped = 0;
var stopped = 0;
var get_point = 0;

function minus(stop_checkpoint) {
    if (stop_checkpoint == 0) {
        get_point = 5;
    } else if (stop_checkpoint == 1) {
        get_point = 3;
    } else if (stop_checkpoint == 2) {
        get_point = 1;
    } else {
        get_point = 0;
    }
    return get_point
}
function checkpoint_1() {
    var checkpoint_1 = document.getElementById("checkpoint_1").value;
    point = point + parseFloat(checkpoint_1) * minus(stopped);
    document.getElementById('point').innerHTML = point;
    stopped = 0;
}
function checkpoint_2() {
    var checkpoint_2 = document.getElementById("checkpoint_2").value;
    point = point + parseFloat(checkpoint_2) * minus(stopped);
    document.getElementById('point').innerHTML = point;
    stopped = 0;
}
function checkpoint_3() {
    var checkpoint_3 = document.getElementById("checkpoint_3").value;
    point = point + parseFloat(checkpoint_3) * minus(stopped);
    document.getElementById('point').innerHTML = point;
    stopped = 0;
}
function checkpoint_4() {
    var checkpoint_4 = document.getElementById("checkpoint_4").value;
    point = point + parseFloat(checkpoint_4) * minus(stopped);
    document.getElementById('point').innerHTML = point;
    stopped = 0;
}
function checkpoint_5() {
    var checkpoint_5 = document.getElementById("checkpoint_5").value;
    point = point + parseFloat(checkpoint_5) * minus(stopped);
    document.getElementById('point').innerHTML = point;
    stopped = 0;
}
function stop() {
    stopped++;
    all_stopped++;
}
function plus_5() {
    point = point + 5;
    document.getElementById('point').innerHTML = point;
}
function plus_10() {
    point = point + 10;
    document.getElementById('point').innerHTML = point;
}
function plus_15() {
    point = point + 15;
    document.getElementById('point').innerHTML = point;
}
function plus_30() {
    point = point + 30;
    document.getElementById('point').innerHTML = point;
}
function minus_5() {
    point = point - 5;
    document.getElementById('point').innerHTML = point;
}
function escape() {
    var plus_point = 60 - all_stopped * 5
    point = point + plus_point;
    document.getElementById('point').innerHTML = point;
}
var time;

function showtime() {
    time++;
    nokori = 480 - time
    nokori_byo = nokori % 60;
    nokori_hun = Math.floor(nokori / 60);
    if (nokori_byo < 10) {
        nokori_byo = "0" + nokori_byo;
    }
    nokori_zikan = nokori_hun + ":" + nokori_byo;
    document.getElementById("timer_area").innerHTML = nokori_zikan;
    if (nokori <= 0) {
        stop_timer();
        setTimeout('alert("競技を終了して下さい")', 500);
    }
}
function start() {
    time = 0;
    TimerID = setInterval('showtime()', 1000);
    document.getElementById("start").disabled = true;
    document.getElementById("timer_area").innerHTML = "8:00";
    plus_5();
}
function stop_timer() {
    clearInterval(TimerID);
    document.getElementById("start").disabled = false;
}