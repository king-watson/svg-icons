console.log("JS file connected")

const bubble = document.querySelector('#bubble');

function bubbleLogId() {
    console.log(this.id);
}

bubble.addEventListener('click', bubbleLogId);

const burple1 = document.querySelector('#burple1');

function burple1LogId() {
    console.log(this.id);
}

burple1.addEventListener('click', burple1LogId);

const type = document.querySelector('#type');

function typeLogId() {
    console.log(this.id);
}

type.addEventListener('click', typeLogId);

const burple = document.querySelector('#burple');

function burpleLogId() {
    console.log(this.id);
}

burple.addEventListener('click', burpleLogId);

const burple_text = document.querySelector('#burple_text');

function burple_textLogId() {
    console.log(this.id);
}

burple_text.addEventListener('click', burple_textLogId);

const bubble1 = document.querySelector('#bubble1');

function bubble1LogId() {
    console.log(this.id);
}

bubble1.addEventListener('click', bubble1LogId);

