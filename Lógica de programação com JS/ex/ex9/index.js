function som (n1){
    if(typeof n1 != 'number') return n1;
    if(n1 % 3 === 0 && n1 % 5 === 0) return 'FizzBuzz';
    if(n1 % 3 === 0) return 'Fizz';
    if(n1 % 5 === 0) return 'Buzz';
    return n1

}

for(let i = 0; i < 100; i++){
    console.log(i, som(i))
}