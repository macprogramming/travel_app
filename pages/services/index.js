
export const registerNewUser = async () => {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const finalData = response.json();
    console.log(finalData);
    return finalData;
  } catch (err) {
    console.log(err)
  }
}