var array = [6, 2, 3, 1, 7, 4, 8, 5]

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach((value,index,arr)=>{
        let s=index-1;
        while(s>=0 && array[s]>value){
            array[s+1]=array[s]
            s-=1;
        }
        array[s+1]=value
        console.log(arr);
    })
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');
    console.log(wrapper);

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}
DrawArray()