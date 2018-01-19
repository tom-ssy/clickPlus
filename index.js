/**
 * Created by Administrator on 2018/1/18 0018.
 */
let aa = [1,2,3];
aa.map((val)=>{
    return val+1
})

class PraiseButton {
    constructor() {
        this.value=0
    }
    plusOne(){
        if(this.value>=10){
            this.value=0;
            return "red";
        }else{
            this.value++;
            return "yellow";
        }
    }
}
class Thumb extends PraiseButton{
    constructor() {
        super();
    }
    render(){
        var thumb=document.createElement('div');
        thumb.style.backgroundColor="red";
        var text= document.createTextNode("赞");
        var span=document.createElement('span');
        thumb.appendChild(text);
        thumb.appendChild(span);
        span.innerText=this.value;
        thumb.addEventListener('click',()=> {
            var color=this.plusOne();
            thumb.style.backgroundColor=color;
            span.innerText=this.value;
        },false);
        document.body.appendChild(thumb)

    }
}
export default Thumb;
// module.exports=Thumb;

