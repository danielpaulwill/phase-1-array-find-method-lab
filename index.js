const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]

/*


  
  function superbowlWin(array) {
    array.find(function(element){
//        let noWin = undefined
        if (element.result === 'W') {
            console.log(element.year, "test");
            return element.year;
        }//   else return noWin

    })
    }


    function superbowlWin(array) {
        let a = array.find(ele => ele.result === "W")
        return a.year
      }

          
   */

function superbowlWin(array) {
    let a = array.find(element => element.result === "W");
    if (a != undefined) {
        return a.year
    }
}




    


/*
    function superbowlWin(array) {
        array.find(element => {
            return element
        })
    }
    */