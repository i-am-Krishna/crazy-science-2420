export const getData =(key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch(e){
        return undefined;
    }
}
export const setData =(key,value)=>{
    if(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
}