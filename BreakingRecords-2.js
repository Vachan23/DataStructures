function breakingRecords(scores) {
    let most = scores[0],
    least =  scores[0],
    countmax = 0,
    countmin = 0;
    for (const element of scores){
        if (element<least){
            least = element;
            countmin++;
        }
        if (element>most){
            most = element;
            countmax++;
        }
    }
    return [countmax, countmin]

}