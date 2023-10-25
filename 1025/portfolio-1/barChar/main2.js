let myGraph=document.getElementById('myGraph2');
// let trace1 = {};
// trace1.type ="bar";
// trace1.name = "Taipei_Zoo";
// trace1.x =[];
// trace1.y =[];
// for(let i=0;i<animals_Taipei_Zoo.length;i++){
//     trace1.x[i] =animals_Taipei_Zoo[i]['name'];
//     trace1.y[i] =animals_Taipei_Zoo[i]['count'];
// }
// let trace2 = {};
// trace2.type ="bar";
// trace2.name = "Taoyuan_Zoo";
// trace2.x =[];
// trace2.y =[];
// for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
//     trace2.x[i] =animals_Taoyuan_Zoo[i]['name'];
//     trace2.y[i] =animals_Taoyuan_Zoo[i]['count'];
// }

let trace1 = {};
trace1.type ="bar";
trace1.name = "lion";
trace1.x =[];
trace1.y =[];
trace1.text = [];
trace1.text=trace1.y;
trace1.textfont={
    family:"Raleway, sans-serif",
    size:20
};
trace1.marker= {
    color: 'rgb(142,124,195)'
}
let trace2 = {};
trace2.type ="bar";
trace2.name = "tiger";
trace2.x =[];
trace2.y =[];
trace2.text = [];
trace2.text=trace2.y;
trace2.textfont={
    family:"Raleway, sans-serif",
    size:20
};
trace2.marker= {
    color: 'rgb(142,20,30)'
}
let trace3 = {};
trace3.type ="bar";
trace3.name = "monkey";
trace3.x =[];
trace3.y =[];
trace3.text = [];
trace3.text=trace3.y;
trace3.textfont={
    family:"Raleway, sans-serif",
    size:20
};
trace3.marker= {
    color: 'rgb(12,12,195)'
}

trace1.x[0] ='Taipei_Zoo';
trace1.y[0] =animals_Taipei_Zoo[0]['count'];
trace2.x[0] ='Taipei_Zoo';
trace2.y[0] =animals_Taipei_Zoo[1]['count'];
trace3.x[0] ='Taipei_Zoo';
trace3.y[0] =animals_Taipei_Zoo[2]['count'];

trace1.x[1] ='Taoyuan_Zoo';
trace1.y[1] =animals_Taoyuan_Zoo[0]['count'];
trace2.x[1] ='Taoyuan_Zoo';
trace2.y[1] =animals_Taoyuan_Zoo[1]['count'];
trace3.x[1] ='Taoyuan_Zoo';
trace3.y[1] =animals_Taoyuan_Zoo[2]['count'];

let data2 =[];
data2.push(trace1);
data2.push(trace2);
data2.push(trace3);

let layout2 =
{
    title:"zoo",
    margin:{t:50},
    barmode:"stack"

};
Plotly.newPlot(myGraph2, data2, layout2);
