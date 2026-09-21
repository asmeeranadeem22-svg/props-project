function Sum() {
    function calculateSum(){
        let sum = 0;
        let i;
        for(i=0;i<=1000;i++){
            sum= sum+i;
        }
        return sum;
    }
    const Total = calculateSum();
    console.log("sum render")
    return(
    <>
    <h1>This is Math Library</h1>
    <h1>Math Library:{Total}</h1>
    </>

    )
}

export default Sum;