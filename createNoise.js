let log='';
let ratio=0.02;
let numberOfTraces=100;
for(let i=0;i<numberOfTraces;i++){
    let arr=[];
    arr[0]='A';
    arr[1]=Math.random()>0.5?'BC':'CB';
    arr[2]='D';
    arr[3]=Math.random()>0.5?'E':'F';
    arr[4]='G';
    arr[5]=Math.random()>0.5?'IHI':'IJ';
    arr[6]='KM';
//        console.log(arr.join(''));
    log+=arr.join('')+" ";
}

document.getElementById('content').innerHTML=log;

let traces=log.split(' ');
for(let i=0;i<ratio*numberOfTraces;i++){
    let kind=Math.floor(Math.random() * (4 - 1)) + 1;   //噪声种类，[1,4)
    let tempArr=traces[i].split('');
    switch (kind){
        case 1:
            let index1=Math.floor(Math.random() * (traces[i].length -1- 1)) + 1;
            tempArr.splice(index1,1);
            traces[i]=tempArr.join('');
            break;
        case 2:
            let index2=Math.floor(Math.random()*traces[i].length);
            tempArr.splice(index2,0,tempArr[index2]);
            traces[i]=tempArr.join('');
            break;
        case 3:
            let index3=Math.floor(Math.random()*traces[i].length);
            let index4=Math.floor(Math.random()*traces[i].length);
            let a=tempArr[index3];
            let b=tempArr[index4];
            tempArr.splice(index3,1,b);
            tempArr.splice(index4,1,a);
            traces[i]=tempArr.join('');
            break;
    }
}

document.getElementById('noise').innerHTML=traces.join(' ');
