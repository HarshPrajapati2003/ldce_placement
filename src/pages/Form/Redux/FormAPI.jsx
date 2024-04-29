export function saveStudentData(Data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:5000/student/', {
        method: 'POST',
        body: JSON.stringify(Data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error.message);
      }
    } catch (error) {
      reject(error);
    }
  });
}
