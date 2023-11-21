
const displayData = (data)=>{
    result.value += data
}
const calculaterClear =()=>{
    result.value=""
}
const calculateResult=()=>{
    if(result.value!=""){
        try{result.value= eval(result.value)}
        catch{
            result.value = "Error!!!"
        }
    }
}
const removeLast = ()=>{
    result.value = result.value.slice(0,-1)
}