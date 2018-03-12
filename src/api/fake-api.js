export const fakeCall = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
