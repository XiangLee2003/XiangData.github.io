let myGraph=document.getElementById('myGraph3');
let trace1 = {};
trace1.type ="pie";
trace1.title = "2019";
trace1.labels = [];
trace1.values =[];
trace1.domain = {
    row:0,
    column:0
};
for(let x=0; x<generate_electricity_2019.length; x++){
    trace1.labels[x] = generate_electricity_2019[x]['type'];
    trace1.values[x] = generate_electricity_2019[x]['count'];
}

let trace2 = {};
trace2.type ="pie";
trace2.title = "2020";
trace2.labels = [];
trace2.values =[];
for(let x=0; x<generate_electricity_2020.length; x++){
    trace2.labels[x] = generate_electricity_2020[x]['type'];
    trace2.values[x] = generate_electricity_2020[x]['count'];
}
trace2.domain = {
    row:0,
    column:1
};

let trace3 = {};
trace3.type ="pie";
trace3.title = "2021";
trace3.labels = [];
trace3.values =[];
for(let x=0; x<generate_electricity_2021.length; x++){
    trace3.labels[x] = generate_electricity_2021[x]['type'];
    trace3.values[x] = generate_electricity_2021[x]['count'];
}
trace3.domain = {
    row:1,
    column:0
};
trace3.sort = false;
// trace3.marker= {
//     colors:  [
//         'rgb(12, 20, 125)',
//         'rgb(255, 20 , 42)',
//         'rgb(12, 20, 10)',
//         'rgb(45, 47, 125)',
//         'rgb(120, 24, 45)'
//     ]
// }
let trace4 = {};
trace4.type ="pie";
trace4.title = "2022";
trace4.labels = [];
trace4.values =[];
for(let x=0; x<generate_electricity_2022.length; x++){
    trace4.labels[x] = generate_electricity_2022[x]['type'];
    trace4.values[x] = generate_electricity_2022[x]['count'];
}
trace4.domain = {
    row:1,
    column:1
};

trace1.hole = 0.5;
trace2.hole = 0.5;
trace3.hole = 0.5;
trace4.hole = 0.5;

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);

let layout = {
    title:"2019-2022台電發購電量",
    margin:{
        t:50,
        l:50
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph, data, layout);
