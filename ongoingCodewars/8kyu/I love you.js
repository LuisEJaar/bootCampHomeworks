function howMuchILoveYou(nbPetals) {
    let answers = ["I love you", "a little","a lot","passionately","madly","not at all"]
    return answers[(nbPetals % 6 == 0) ? 5 : (nbPetals % 6) - 1]
}