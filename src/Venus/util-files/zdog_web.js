Zfont.init(Zdog);
let isSpinning = true;

illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',

    dragRotate: true,
    onDragStart: function() {
        isSpinning = false;
    },
});

var font = new Zdog.Font({
    src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
    //src: 'https://fonts.google.com/specimen/Source+Sans+Pro'
});

new Zdog.Shape({//for agriculture
    addTo: illo,
    stroke: 60,
    color: '#b3cce6',
    translate: {x: 250, y: 250, z: 0},
});

var agriculture = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Agriculture",
    translate: {x: 250, y: 295, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge agriculture
    addTo: illo,
    path: [{x: 250, y: 250, z: 0}, {x: 0, y: -100, z: -100}
    ],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge agriculture
    addTo: illo,
    path: [{x: 250, y: 250, z: 0}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge agriculture
    addTo: illo,
    path: [{x: 250, y: 250, z: 0}, {x: -50, y: 250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge agriculture
    addTo: illo,
    path: [{x: 250, y: 250, z: 0}, {x: 0, y: -100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge agriculture
    addTo: illo,
    path: [{x: 250, y: 250, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for Automobiles and Auto Components
    addTo: illo,
    stroke: 60,
    color: '#e1f1da',
    translate: {x: 0, y: -100, z: 100},
});

var auto = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Automobiles and", "Auto Components"],
    translate: {x: 0, y: -55, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: -250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge automobiles
    addTo: illo,
    path: [{x: 0, y: -100, z: 100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for aviation
    addTo: illo,
    stroke: 60,
    color: '#b5dda4',
    translate: {x: 250, y: -250, z: 0},
});

var aviation = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Aviation",
    translate: {x: 250, y: -205, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: -250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: -250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 250, y: -250, z: 0}, {x: 0, y: -100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for advertising
    addTo: illo,
    stroke: 60,
    color: '#ffe699',
    translate: {x: 100, y: 100, z: 0},
});

var advertising = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Advertising, Marketing", "and Sales"],
    translate: {x: 100, y: 145, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 50, y: 250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 100, y: 100, z: 0}, {x: -150, y: 250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for banking
    addTo: illo,
    stroke: 60,
    color: '#b7e1d4',
    translate: {x: -100, y: 100, z: 0},
});

var bank = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Banking Accounting and", "Financial Services"],
    translate: {x: -100, y: 145, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -100, y: 100, z: 0}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -100, y: 100, z: 0}, {x: 300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -100, y: 100, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -100, y: 100, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -100, y: 100, z: 0}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for cement
    addTo: illo,
    stroke: 60,
    color: '#e9e7e2',
    translate: {x: 150, y: 250, z: 100},
});

var cement = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Cement",
    translate: {x: 150, y: 295, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 150, y: 250, z: 100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for consumer
    addTo: illo,
    stroke: 60,
    color: '#990300',
    translate: {x: 150, y: -250, z: 100},
});

var cons = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Consumer Durables",
    translate: {x: 150, y: -205, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: -150, y: 250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 150, y: -250, z: 100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for ecommerce
    addTo: illo,
    stroke: 60,
    color: '#fff9e6',
    translate: {x: 50, y: 250, z: 200},
});

var ecommerce = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "E-Commerce",
    translate: {x: 50, y: 295, z: 200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: 50, y: 250, z: 200}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for edu
    addTo: illo,
    stroke: 60,
    color: '#b0b4cf',
    translate: {x: 50, y: -250, z: 200},
});

var edu = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Education and Training",
    translate: {x: 50, y: -205, z: 200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 50, y: -250, z: 200}, {x: -150, y: 250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for engg
    addTo: illo,
    stroke: 60,
    color: '#ffe6e6',
    translate: {x: -250, y: 250, z: 0},
});

var engg = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Engineering",
    translate: {x: -250, y: 295, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: -250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: -250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: -250, y: 250, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for goods
    addTo: illo,
    stroke: 60,
    color: '#ff9b99',
    translate: {x: -250, y: -250, z: 0},
});

var cons_goods = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Fast Moving consumer Goods",
    translate: {x: -250, y: -205, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: -250, y: -250, z: 0}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for gems
    addTo: illo,
    stroke: 60,
    color: '#2c6d58',
    translate: {x: -150, y: 250, z: 100},
});

var gems = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Gems and Jewellery",
    translate: {x: -150, y: 295, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: -150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: -150, y: 250, z: 100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for healthcare
    addTo: illo,
    stroke: 60,
    color: '61689e',
    translate: {x: -150, y: -250, z: 100},
});

var healthcare = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Healthcare",
    translate: {x: -150, y: -205, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: -50, y: 250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: 50, y: -250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: -150, y: -250, z: 100}, {x: -250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for infra
    addTo: illo,
    stroke: 60,
    color: '#bcb6a9',
    translate: {x: -50, y: 250, z: 200},
});

var infra = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Infrastructure",
    translate: {x: -50, y: 295, z: 200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 150, y: 250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: -150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 0, y: -250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: -50, y: 250, z: 200}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for insurance
    addTo: illo,
    stroke: 60,
    color: '#30344f',
    translate: {x: -50, y: -250, z: 200},
});

var insurance = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Insurance",
    translate: {x: -50, y: -205, z: 200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -50, y: -250, z: 200}, {x: -150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -50, y: -250, z: 200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -50, y: -250, z: 200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -50, y: -250, z: 200}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for it
    addTo: illo,
    stroke: 60,
    color: '#ffd24d',
    translate: {x: 100, y: -100, z: 0},
});

var it = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "IT",
    translate: {x: 100, y: -55, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: -150, y: 250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: 100, y: -100, z: 0}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for manufacturing
    addTo: illo,
    stroke: 60,
    color: '#ff6663',
    translate: {x: 0, y: 0, z: -300},
});

var manufacturing = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Manufacturing",
    translate: {x: 0, y: 45, z: -300},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 0, y: 0, z: -300}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for media
    addTo: illo,
    stroke: 60,
    color: '#5cbc9e',
    translate: {x: -150, y: 250, z: -100},
});

var media = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Media and", "Entertainment"],
    translate: {x: -150, y: 295, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: -250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: 300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -150, y: 250, z: -100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for metals
    addTo: illo,
    stroke: 60,
    color: '#77c157',
    translate: {x: -150, y: -250, z: -100},
});

var metals = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Metals and", "Mining"],
    translate: {x: -150, y: -205, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge metals
    addTo: illo,
    path: [{x: -150, y: -250, z: -100}, {x: 0, y: -100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for oil
    addTo: illo,
    stroke: 60,
    color: '#498230',
    translate: {x: 0, y: 100, z: 100},
});

var oil = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Oil and Gas",
    translate: {x: 0, y: 145, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: -50, y: 250, z: 200}	],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: 0, y: 100, z: 100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for pharma
    addTo: illo,
    stroke: 60,
    color: '#330100',
    translate: {x: -50, y: 250, z: -200},
});

var pharma = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Pharmaceuticals",
    translate: {x: -50, y: 295, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: -150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: -50, y: 250, z: -200}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for ports
    addTo: illo,
    stroke: 60,
    color: '#9b927d',
    translate: {x: -50, y: -250, z: -200},
});

var ports = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Ports",
    translate: {x: -50, y: -205, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: 150, y: 250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: -150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -50, y: -250, z: -200}, {x: 0, y: -100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for power
    addTo: illo,
    stroke: 60,
    color: '#827864',
    translate: {x: -100, y: -100, z: 0},
});

var power = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Power",
    translate: {x: -100, y: -55, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: -100, y: -100, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for railways
    addTo: illo,
    stroke: 60,
    color: '#d3cec5',
    translate: {x: 0, y: 250, z: -250},
});

var railways = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Railways",
    translate: {x: 0, y: 295, z: -250},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 50, y: 250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: 0, y: 250, z: -250}, {x: 0, y: -100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for estate
    addTo: illo,
    stroke: 60,
    color: '#ffc100',
    translate: {x: 0, y: 100, z: -100},
});

var estate = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Real Estate",
    translate: {x: 0, y: 145, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 150, y: 250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 50, y: 250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 0, y: 100, z: -100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for energy
    addTo: illo,
    stroke: 60,
    color: '#3a352c',
    translate: {x: 0, y: -250, z: -250},
});

var energy = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Renewable", "Energy"],
    translate: {x: 0, y: -205, z: -250},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 50, y: -250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 0, y: -250, z: -250}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for hr
    addTo: illo,
    stroke: 60,
    color: '#cc9900',
    translate: {x: 150, y: 250, z: -100},
});

var hr = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Recruitment", "Staffing and HR"],
    translate: {x: 150, y: 295, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: 150, y: 250, z: -100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: 150, y: 250, z: -100}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: 150, y: 250, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: 150, y: 250, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for retail
    addTo: illo,
    stroke: 60,
    color: '#806000',
    translate: {x: 150, y: -250, z: -100},
});

var retail = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Retail",
    translate: {x: 150, y: -205, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for roads
    addTo: illo,
    stroke: 60,
    color: '#ac7339',
    translate: {x: 50, y: 250, z: -200},
});

var road = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Roads",
    translate: {x: 50, y: 295, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 150, y: 250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: 300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 150, y: -250, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for research
    addTo: illo,
    stroke: 60,
    color: '#dfe1ec',
    translate: {x: 0, y: -100, z: -100},
});

var research = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Research in", "Science and Technology"],
    translate: {x: 0, y: -55, z: -100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 0, y: -250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 50, y: -250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: -100, z: -100}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for services
    addTo: illo,
    stroke: 60,
    color: '#2d5986',
    translate: {x: 0, y: 0, z: 0},
});

var services = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Services",
    translate: {x: 0, y: 45, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge services
    addTo: illo,
    path: [{x: 0, y: 0, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge services
    addTo: illo,
    path: [{x: 0, y: 0, z: 0}, {x: 150, y: 250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for steel
    addTo: illo,
    stroke: 60,
    color: '#cfedfc',
    translate: {x: 50, y: -250, z: -200},
});

var steel = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Steel",
    translate: {x: 50, y: -205, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: 0, y: 100, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 50, y: -250, z: -200}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for telecommunications
    addTo: illo,
    stroke: 60,
    color: '#4d3900',
    translate: {x: 300, y: 0, z: 0},
});

var telecommunications = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Telecommunications",
    translate: {x: 200, y: 45, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: -250, y: 250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 0, y: -100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: 300, y: 0, z: 0}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for textiles
    addTo: illo,
    stroke: 60,
    color: '#d9e6f2',
    translate: {x: -300, y: 0, z: 0},
});

var textiles = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Textiles",
    translate: {x: -200, y: 45, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 0, y: 0, z: -300}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: -300, y: 0, z: 0}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({//for tourism
    addTo: illo,
    stroke: 60,
    color: '#538cc6',
    translate: {x: 0, y: 0, z: 300},
});

var tourism = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Tourism and", "Hospitality"],
    translate: {x: 0, y: 45, z: 300},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 150, y: -250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 300, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -150, y: 250, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -100, y: -100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 0, y: 100, z: -100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -50, y: -250, z: -200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -150, y: -250, z: 100}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -50, y: 250, z: 200}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 250, y: -250, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 0, y: 250, z: -250}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 0, y: 0, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: -100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 0, y: 0, z: 300}, {x: 100, y: 100, z: 0}],
    stroke: 1.5,
    color: '#999999',
});

illo.updateRenderGraph();

function animate() {
    // rotate illo each frame
    illo.rotate.y += isSpinning ? 0.01 : 0;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
}
// start animation
animate();