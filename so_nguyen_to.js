function so_nguyen_to (number) {
    for (let i = 2; i < Math.sqrt(number) ; i++) {
         if ( number % i === 0 ) {
             return false;
         }
    }
    return true;
}
let n = +prompt("Nhập số lượng số nguyên tố cần in ra");
if (n <= 20) {
    let count = 0;
    let  N = 2;
    while ( count < n) {
        if (so_nguyen_to(N)) {
            document.write(N + ' ');
            count++;
        }
        N = N + 1;
    }
} else {
    alert("Không vượt quá số 20")
}


