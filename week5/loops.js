// Khadeeja Saleem
// 5 April 2026

"use strict";

for (let crate = 1; crate <= 20; crate++) {

    if (crate % 5 === 0) {
        console.log("Crate " + crate + ": Handle with care");
    }
    else if (crate % 2 === 0) {
        console.log("Crate " + crate + ": Load crate");
    }
    else {
        console.log("Crate " + crate + ": Inspect crate");
    }
}

console.log("Total crates scanned: 20");
