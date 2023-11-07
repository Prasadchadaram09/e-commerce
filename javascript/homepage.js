
var col=[`url("../asset/image/pic 1.jpg")`,`url("../asset/image/pic/ 2.jpg")`,`url()`];
var num=-1;
function inc()
{
    num++;
    if(num>col.length-1)
    {
        num=0;
        document.body.style.backgroundImage=col[num];
    }
    else
    {
        document.body.style.backgroundImage=col[num];    
    }
}

function dec()
{
    num--;
    if(num<0)
    {
        num=col.length-1;
        document.body.style.backgroundImage=col[num];
    }
    else
    {
        document.body.style.backgroundImage=col[num];    
    }
}