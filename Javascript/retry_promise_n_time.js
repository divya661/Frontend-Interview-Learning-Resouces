// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

const retryWithDelay = (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry Failed"
) =>
  new Promise((resolve, reject) => {
    operation()
      .then(resolve)
      .catch((reason) => {
        if (retries > 0) {
          wait(delay)
            .then(
              retryWithDelay.bind(null, operation, retries - 1, delay, finalErr)
            )
            .then(resolve)
            .catch(reject);
        } else {
          reject(finalErr);
        }
      });
  });

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

const test = async () => {
  await retryWithDelay(getTestFunc(), 7);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

test().catch(console.error);
// 'success'
// 'retry failed'
