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
    stroke: 35,
    color: '#b3cce6',
    translate: {x: 0, y:0},
});

var agriculture = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Agriculture",
    translate: {x: 0, y: 45},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({
    addTo: illo,
    path: [{x: 0, y: 0}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({
    addTo: illo,
    path: [{x: 0, y: 0}, {x: 180, y: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({
    addTo: illo,
    path: [{x: 0, y: 0}, {x: 140, y: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({
    addTo: illo,
    path: [{x: 0, y: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({
    addTo: illo,
    path: [{x: 0, y: 0}, {x: 0, y: 60}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for Automobiles and Auto Components
    addTo: illo,
    stroke: 35,
    color: '#e1f1da',
    translate: {x: 0, y: 60},
});

var auto = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Automobiles and", "Auto Components"],
    translate: {x: 0, y: 105},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 180, y: -240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 180, y: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 160, y: 220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: -160, y: 100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge 
    addTo: illo,
    path: [{x: 0, y: 60}, {x: 0, y: -100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for aviation
    addTo: illo,
    stroke: 35,
    color: '#b5dda4',
    translate: {x: 80, y: 0},
});

var aviation = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Aviation",
    translate: {x: 80, y: 45},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 0, y: -140, z: 240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 180, y: -240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 180, y: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 380, y: 380, z: 380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge aviation
    addTo: illo,
    path: [{x: 80, y: 0}, {x: 0, y: 60}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for advertising
    addTo: illo,
    stroke: 35,
    color: '#ffe699',
    translate: {x: 0, y:-100},
});

var advertising = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Advertising, Marketing", "and Sales"],
    translate: {x: 0, y: -55},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: -80, y: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: -340, y: 340, z: 340}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: 0, y: -160, z: 100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge advertising
    addTo: illo,
    path: [{x: 0, y: -100}, {x: -240, y: 160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for banking
    addTo: illo,
    stroke: 35,
    color: '#b7e1d4',
    translate: {x: -120, y: 0},
});

var bank = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Banking Accounting and", "Financial Services"],
    translate: {x: -120, y: 45},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -120, y: 0}, {x: -80, y: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -120, y: 0}, {x: -340, y: 340, z: 340}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -120, y: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -120, y: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge banking
    addTo: illo,
    path: [{x: -120, y: 0}, {x: 0, y: -100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for cement
    addTo: illo,
    stroke: 35,
    color: '#e9e7e2',
    translate: {x: 0, y: 0, z: 140},
});

var cement = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Cement",
    translate: {x: 0, y: 45, z: 140},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 160, y: 220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge cement
    addTo: illo,
    path: [{x: 0, y: 0, z: 140}, {x: 0, y: -100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for consumer
    addTo: illo,
    stroke: 35,
    color: '#990300',
    translate: {x: 0, y: 0, z: -160},
});

var cons = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Consumer Durables",
    translate: {x: 0, y: 45, z: -160},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 0, y: -100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: -80, y: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 0, y: -160, z: -260}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 180, y: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 160, y: 220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: -160, y: 100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: 0, y: -200, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge consumer
    addTo: illo,
    path: [{x: 0, y: 0, z: -160}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for ecommerce
    addTo: illo,
    stroke: 35,
    color: '#fff9e6',
    translate: {x: -80, y: -180, z: 0},
});

var ecommerce = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "E-Commerce",
    translate: {x: -80, y: -135, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: -340, y: 340, z: 340}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 0, y: 80, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 180, y: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 380, y: 380, z: -380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ecommerce
    addTo: illo,
    path: [{x: -80, y: -180, z: 0}, {x: 0, y: -100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for edu
    addTo: illo,
    stroke: 35,
    color: '#b0b4cf',
    translate: {x: 0, y: 100, z: 200},
});

var edu = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Education and Training",
    translate: {x: 0, y: 145, z: 200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: 160, y: 220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: -120, y: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge edu
    addTo: illo,
    path: [{x: 0, y: 100, z: 200}, {x: -240, y: 0, z: 160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for engg
    addTo: illo,
    stroke: 35,
    color: '#ffe6e6',
    translate: {x: 0, y: 120, z: -220},
});

var engg = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Engineering",
    translate: {x: 0, y: 165, z: -120},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 180, y: -240, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: -280, y: 0, z: -20}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge engg
    addTo: illo,
    path: [{x: 0, y: 120, z: -220}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for goods
    addTo: illo,
    stroke: 35,
    color: '#ff9b99',
    translate: {x: 0, y: -140, z: 240},
});

var cons_goods = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Fast Moving consumer Goods",
    translate: {x: 0, y: -95, z: 240},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: -80, y: -180, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 0, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 80, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge goods
    addTo: illo,
    path: [{x: 0, y: -140, z: 240}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for gems
    addTo: illo,
    stroke: 35,
    color: '#2c6d58',
    translate: {x: 0, y: -160, z: -260},
});

var gems = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Gems and Jewellery",
    translate: {x: 0, y: -115, z: -260},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 260, y: 0, z: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge gems
    addTo: illo,
    path: [{x: 0, y: -160, z: 260}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for healthcare
    addTo: illo,
    stroke: 35,
    color: '61689e',
    translate: {x: 60, y: 0, z: 140},
});

var healthcare = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Healthcare",
    translate: {x: 60, y: 45, z: 140},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 0, y: 80, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 140, y: 80, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 0, y: 100, z: 200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge healthcare
    addTo: illo,
    path: [{x: 60, y: 0, z: 140}, {x: 0, y: -140, z: 240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for infra
    addTo: illo,
    stroke: 35,
    color: '#bcb6a9',
    translate: {x: 80, y: 0, z: -160},
});

var infra = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Infrastructure",
    translate: {x: 80, y: 45, z: -160},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 0, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 260, y: 0, z: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 180, y: -240, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 1600, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 220, y: 0, z: 1400}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: -120, y: 0, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge infra
    addTo: illo,
    path: [{x: 80, y: 0, z: -160}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for insurance
    addTo: illo,
    stroke: 35,
    color: '#30344f',
    translate: {x: -100, y: 0, z: 180},
});

var insurance = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Insurance",
    translate: {x: -100, y: 45, z: 180},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -100, y: 0, z: 180}, {x: 60, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -100, y: 0, z: 180}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -100, y: 0, z: 180}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge insurance
    addTo: illo,
    path: [{x: -100, y: 0, z: 180}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for it
    addTo: illo,
    stroke: 35,
    color: '#ffd24d',
    translate: {x: -120, y: 0, z: -200},
});

var it = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "IT",
    translate: {x: -120, y: 45, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: -240, y: 0, z: 160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge it
    addTo: illo,
    path: [{x: -120, y: 0, z: -200}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for manufacturing
    addTo: illo,
    stroke: 35,
    color: '#ff6663',
    translate: {x: 220, y: 0, z: 140},
});

var manufacturing = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Manufacturing",
    translate: {x: 220, y: 45, z:140},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge manufacturing
    addTo: illo,
    path: [{x: 220, y: 45, z:140}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for media
    addTo: illo,
    stroke: 35,
    color: '#5cbc9e',
    translate: {x: -240, y: 0, z: 160},
});

var media = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Media and", "Entertainment"],
    translate: {x: -240, y: 45, z: 160},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: 0, y: -140, z: 240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: -340, y: 340, z: 340}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge media
    addTo: illo,
    path: [{x: -240, y: 0, z: 160}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for metals
    addTo: illo,
    stroke: 35,
    color: '#77c157',
    translate: {x: 260, y: 0, z: -180},
});

var metals = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Metals and", "Mining"],
    translate: {x: 260, y: 45, z: -180},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 0, y: -220, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge metal
    addTo: illo,
    path: [{x: 260, y: 0, z: -180}, {x: 0, y: 60, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for oil
    addTo: illo,
    stroke: 35,
    color: '#498230',
    translate: {x: -280, y: 0, z: -200},
});

var oil = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Oil and Gas",
    translate: {x: -280, y: 45, z: -200},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge oil
    addTo: illo,
    path: [{x: -280, y: 45, z: -200}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for pharma
    addTo: illo,
    stroke: 35,
    color: '#330100',
    translate: {x: 140, y: 80, z: 0},
});

var pharma = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Pharmaceuticals",
    translate: {x: 140, y: 80, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 60, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge pharma
    addTo: illo,
    path: [{x: 140, y: 80, z: 0}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for ports
    addTo: illo,
    stroke: 35,
    color: '#9b927d',
    translate: {x: -160, y: 100, z: 0},
});

var ports = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Ports",
    translate: {x: -160, y: 145, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: 0, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: 260, y: 0, z: -180}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge ports
    addTo: illo,
    path: [{x: -160, y: 100, z: 0}, {x: 0, y: 60, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for power
    addTo: illo,
    stroke: 35,
    color: '#827864',
    translate: {x: 180, y: -120, z: 0},
});

var power = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Power",
    translate: {x: 180, y: -75, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge power
    addTo: illo,
    path: [{x: 180, y: -75, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for railways
    addTo: illo,
    stroke: 35,
    color: '#d3cec5',
    translate: {x: -200, y: -140, z: 0},
});

var railways = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Railways",
    translate: {x: -200, y: -95, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 0, y: -160, z: 100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 380, y: 380, z: -380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge railways
    addTo: illo,
    path: [{x: -200, y: -140, z: 0}, {x: 0, y: 60, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for estate
    addTo: illo,
    stroke: 35,
    color: '#ffc100',
    translate: {x: 160, y: 220, z: 0},
});

var estate = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Real Estate",
    translate: {x: 160, y: 265, z:0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 0, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 0, y: -160, z: 100}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 380, y: 380, z: -380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge estate
    addTo: illo,
    path: [{x: 160, y: 220, z: 0}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for energy
    addTo: illo,
    stroke: 35,
    color: '#3a352c',
    translate: {x: 180, y: -240, z:0},
});

var energy = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Renewable", "Energy"],
    translate: {x: 180, y: -195, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge energy
    addTo: illo,
    path: [{x: 180, y: -195, z: 0}, {x: 0, y: 100, z: 200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for hr
    addTo: illo,
    stroke: 35,
    color: '#cc9900',
    translate: {x: -200, y: 260, z: 0},
});

var hr = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Recruitment", "Staffing and HR"],
    translate: {x: -200, y: 305, z: 0},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: -200, y: 305, z: 0}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: -200, y: 305, z: 0}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: -200, y: 305, z: 0}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge hr
    addTo: illo,
    path: [{x: -200, y: 305, z: 0}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for retail
    addTo: illo,
    stroke: 35,
    color: '#806000',
    translate: {x: 0, y: 140, z: 80},
});

var retail = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Retail",
    translate: {x: 0, y: 185, z: 80},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: -80, y: -180, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 360, y: -360, z: 360}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 380, y: 380, z: -380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge retail
    addTo: illo,
    path: [{x: 0, y: 140, z: 80}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for roads
    addTo: illo,
    stroke: 35,
    color: '#ac7339',
    translate: {x: 0, y: -160, z: 100},
});

var road = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Roads",
    translate: {x: 0, y: -115, z: 100},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 0, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 380, y: 380, z: -380}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge roads
    addTo: illo,
    path: [{x: 0, y: -160, z: 100}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for research
    addTo: illo,
    stroke: 35,
    color: '#dfe1ec',
    translate: {x: 0, y: 180, z: -120},
});

var research = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Research in", "Science and Technology"],
    translate: {x: 0, y: 225, z: -120},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 180, y: -240, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 0, y: 100, z: 200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge research
    addTo: illo,
    path: [{x: 0, y: 225, z: -120}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for services
    addTo: illo,
    stroke: 35,
    color: '#2d5986',
    translate: {x: 0, y: -200, z: -140},
});

var services = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Services",
    translate: {x: 0, y: -155, z: -140},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge services
    addTo: illo,
    path: [{x: 0, y: -200, z: -140}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge rservices
    addTo: illo,
    path: [{x: 0, y: -200, z: -140}, {x: -200, y: 260, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for steel
    addTo: illo,
    stroke: 35,
    color: '#cfedfc',
    translate: {x: 320, y: 320, z: 320},
});

var steel = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Steel",
    translate: {x: 320, y: 365, z: 320},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: -280, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge steel
    addTo: illo,
    path: [{x: 320, y: 320, z: 320}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for telecommunications
    addTo: illo,
    stroke: 35,
    color: '#4d3900',
    translate: {x: -340, y: 340, z: 340},
});

var telecommunications = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Telecommunications",
    translate: {x: -340, y: 385, z: 340},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 0, y: 120, z: -220}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 320, y: 320, z: 320}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 0, y: 180, z: -120}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: -120, y: 0, z: -200}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge telecommunications
    addTo: illo,
    path: [{x: -340, y: 340, z: 340}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for textiles
    addTo: illo,
    stroke: 35,
    color: '#2d5986',
    translate: {x: 360, y: -320, z: 360},
});

var textiles = new Zdog.Text({
    addTo: illo,
    font: font,
    value: "Textiles",
    translate: {x: 360, y: -275, z: 360},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: -80, y: -180, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: 220, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge textiles
    addTo: illo,
    path: [{x: 360, y: -275, z: 360}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({//for tourism
    addTo: illo,
    stroke: 35,
    color: '#538cc6',
    translate: {x: 380, y: 380, z: -380},
});

var tourism = new Zdog.Text({
    addTo: illo,
    font: font,
    value: ["Tourism and", "Hospitality"],
    translate: {x: 380, y: 425, z: -380},
    fontSize: 15,
    textAlign: 'center',
    textBaseline: 'middle',
    color: 'black',
    fill: true,
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 0, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 0, y: -140, z: 240}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: -340, y: 340, z: 340}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 0, y: 140, z: 80}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: -240, y: 0, z: 160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 180, y: -120, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 160, y: 220, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: -160, y: 100, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 60, y: 0, z: 140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 80, y: 0, z: -160}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 80, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: -200, y: -140, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 0, y: -200, z: -140}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: -120, y: 0, z: 0}],
    stroke: 2,
    color: '#666666',
});

new Zdog.Shape({ //edge tourism
    addTo: illo,
    path: [{x: 380, y: 380, z: -380}, {x: 0, y: -100, z: 0}],
    stroke: 2,
    color: '#666666',
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