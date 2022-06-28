function babySharkLyrics(){
    let l=""
    Array.from(["Baby","Mommy","Daddy","Grandma","Grandpa","Let's go hunt"]).map((s)=> {
      l +=(s+((s.length < 12) ? " shark," : "," ) + " doo".repeat(6) + "\n").repeat(3)
      l +=(s.length < 12) ? s + " shark!\n" : s + "!\n"
    })
    return l += "Run away,…"
  }