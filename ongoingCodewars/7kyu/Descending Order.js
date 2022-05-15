function descendingOrder(n){
    return (n.length === 1) ? n : Number(n.toString().split("").sort((a,b) => b-a).join(""))
  }