module.exports = function main(numStr) {
    var str = numStr;
    let box_num = [];
    let box_item = [];
    let items =[
        ['._.','|.|','|_|'],
        ['...','..|','..|'],
        ['._.','._|','|_.'],
        ['._.','._|','._|'],
        ['...','|_|','..|'],
        ['._.','|_.','._|'],
        ['._.','|_.','|_|'],
        ['._.','..|','..|'],
        ['._.','|_|','|_|'],
        ['._.','|_|','..|'],
    ];
    for(i=0;i<str.length;i++){
        box_num.push(parseInt(str[i]))
    }
     box_num.map((value,index)=>{
        box_item.push(items[value])
    })
     var result = ``;
    for(let i = 0;i<3;i++){
        for(let j = 0;j<box_item.length;j++){
            if(j===box_item.length-1){
                result += `${box_item[j][i]}`
            }else{
                result += `${box_item[j][i]} `
            }
        }
            result +=`\n`;
    }
    return result
}; 