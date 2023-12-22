//pyramid//
let y=""
for (let i = 1;i<=5;i++){
    for(let k = 5;k>i;k--){
        y+=" "
    }
    for(j=1;j<=(2*i)-1;j++){
        y+="*"
    }
    y+="\n"
}console.log(y)