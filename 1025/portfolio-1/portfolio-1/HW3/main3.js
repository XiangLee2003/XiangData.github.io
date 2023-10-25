let myGraph3=document.getElementById('myGraph3');
let electricity_2019 = {};
electricity_2019.type ="pie";
electricity_2019.title = "2019";
electricity_2019.labels = [];
electricity_2019.values =[];
electricity_2019.domain = {
    row:0,
    column:0
};
for(let x=0; x<generate_electricity_2019.length; x++){
    electricity_2019.labels[x] = generate_electricity_2019[x]['type'];
    electricity_2019.values[x] = generate_electricity_2019[x]['count'];
}

let electricity_2020 = {};
electricity_2020.type ="pie";
electricity_2020.title = "2020";
electricity_2020.labels = [];
electricity_2020.values =[];
for(let x=0; x<generate_electricity_2020.length; x++){
    electricity_2020.labels[x] = generate_electricity_2020[x]['type'];
    electricity_2020.values[x] = generate_electricity_2020[x]['count'];
}
electricity_2020.domain = {
    row:0,
    column:1
};

let electricity_2021 = {};
electricity_2021.type ="pie";
electricity_2021.title = "2021";
electricity_2021.labels = [];
electricity_2021.values =[];
for(let x=0; x<generate_electricity_2021.length; x++){
    electricity_2021.labels[x] = generate_electricity_2021[x]['type'];
    electricity_2021.values[x] = generate_electricity_2021[x]['count'];
}
electricity_2021.domain = {
    row:1,
    column:0
};
electricity_2021.sort = false;
// electricity_2021.marker= {
//     colors:  [
//         'rgb(12, 20, 125)',
//         'rgb(255, 20 , 42)',
//         'rgb(12, 20, 10)',
//         'rgb(45, 47, 125)',
//         'rgb(120, 24, 45)'
//     ]
// }
let electricity_2022 = {};
electricity_2022.type ="pie";
electricity_2022.title = "2022";
electricity_2022.labels = [];
electricity_2022.values =[];
for(let x=0; x<generate_electricity_2022.length; x++){
    electricity_2022.labels[x] = generate_electricity_2022[x]['type'];
    electricity_2022.values[x] = generate_electricity_2022[x]['count'];
}
electricity_2022.domain = {
    row:1,
    column:1
};

electricity_2019.hole = 0.5;
electricity_2020.hole = 0.5;
electricity_2021.hole = 0.5;
electricity_2022.hole = 0.5;

let data3 =[];
data3.push(electricity_2019);
data3.push(electricity_2020);
data3.push(electricity_2021);
data3.push(electricity_2022);

let layout3 = {
    title:"2019-2022台電發購電量",
    margin:{
        t:60,
        l:60
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph3, data3, layout3);
