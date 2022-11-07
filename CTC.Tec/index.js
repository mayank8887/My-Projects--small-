let dates = ["03-Dec-2020","09-Sep-2020","08-Jun-2020"];
let  months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
let monthss= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let months_break=[];

for(let i=0;i<dates.length;i++){
   
    let new_date = dates[i].split("-");
    months_break.push(new_date)
};


for(let a=0;a<months_break.length;a++){
    for(let b=0;b<monthss.length;b++){
        if(months_break[a][1]==monthss[b]){
            months_break[a][1]=months[b];
        }
    }
};

for(let c=0;c<months_break.length;c++){
    let ans=months_break[c].toString();
    console.log(ans.split(",").join("-").toString())
    
};