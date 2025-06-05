
export default function YupToLogin(err) {
  
  const errObj = {}
  err.inner.forEach((error) => {
    console.log(error)
    errObj[error.path] = error.message
    
  }) 
  return errObj
}
