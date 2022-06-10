function DNAStrand(dna){
    const DNAswitch = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    }
  
    return dna.split("").map((pair) => DNAswitch[pair]).join("")
  }