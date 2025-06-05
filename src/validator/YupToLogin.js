
export default function YupToLogin(err) {
  console.log(err)
  const errObj = {}
  err.inner.forEach((error) => {
    console.log(error)
    errObj[error.path] = error.message
    
  }) 
  return errObj
}
