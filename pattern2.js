let x=5;
let string=''
for(let i=1;i<=x;i++){
    for(let j=1; j<=x;j++){
        if(i==1||i==5||j==1||j==5){
            string+='*'
        }else{
            string+=' '
        }
        

    }string+='\n'
}console.log(string)