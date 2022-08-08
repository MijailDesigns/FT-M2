import React from 'react';



export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  else if(!input.password){
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }

  return errors;
};

export default function  Form() {

  const [errors, setErrors] = React.useState({
    username: '',
    password: '',
  });

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  //para validar que no estamos enviando el form con errores o vacio
  function validateSubmit(e) {
    e.preventDefault(); // evita que se envie por defecto
    if (errors.username || errors.password) {
      console.log('Hay campos por completar');
    }else{
      console.log('Form enviado');
    }
  }

  return (
      <div>
        <form onSubmit={(e) => validateSubmit(e)}>
          <div>
            <label>Username:</label>
            <input 
              className={errors.username && 'danger'}
              type="text"
              name="username" 
              value={input.username} 
              placeholder="username" 
              onChange={handleInputChange}
            />
            {errors.username && (
              <p className="danger">{errors.username}</p>
            )}
            
          </div>

          <div>
            <label>Password:</label>
            <input 
              className={errors.password && 'danger'}
              name="password" 
              value={input.password} 
              placeholder="password" 
              type="password" 
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="danger">{errors.password}</p>
            )}
          </div>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
  )
}
