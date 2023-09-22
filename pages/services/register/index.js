
// import '../../api/register'
export const registerUser = async (formData) => {
  let { firstname, lastname ,email ,mobilenumber, password, confirmpassword, role, gender } = formData;
  console.log(formData)
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(
        { firstname, lastname ,email ,mobilenumber, password, confirmpassword, role, gender }
      )
    });

    const finalData = await response.json();
    console.log(finalData)
    return finalData;
  } catch (err) {
    console.log(err)
  }
}