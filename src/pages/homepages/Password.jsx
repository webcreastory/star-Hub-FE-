
import React, { useEffect } from 'react';
import axios from 'axios';


function Password() {
  useEffect(() => {
    const test = async () => {
      console.log('Sending GET request');
      try {
        const response = await axios.get(`http://3.37.123.243:8080/api/user/profile`);
        console.log('Response received:', response);
        
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 404) {
            alert(errorMessage);
          }
        }
      }
    };

    test();
  }, []);

  

  return (
    <div>
      asdasasdasdasdasdasdd
    </div>
  );
}

export default Password
// 비밀번호 변경하기