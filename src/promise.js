function simulateAsyncTask(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected due to an error.");
            }
        }, 2000);
    });
}

simulateAsyncTask(true)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

    
simulateAsyncTask(false)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });