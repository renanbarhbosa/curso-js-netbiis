const arr = [1,2,3,4,5];

const maiorQueTres = arr.find((elem) => elem > 3);
console.log(maiorQueTres);

const indiceMaiorQueTres = arr.findIndex((elem) => elem > 3);
console.log(indiceMaiorQueTres);

const temMaiorQueTres = arr.some((elem) => elem > 3);
console.log(temMaiorQueTres);

const temMaiorQueCinco = arr.some((elem) => elem > 5);
console.log(temMaiorQueCinco);

const todosMaioresQueZero = arr.every((elem) => elem > 0);
console.log(todosMaioresQueZero);

const todosMenoresQueZero = arr.every((elem) => elem < 0);
console.log(todosMenoresQueZero);
