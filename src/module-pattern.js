const module = (() => {

  const privateFunc = () => { };
  const privateVar = 15;

  const exported = {
    publicFunc: () => { 
      privateFunc();
      console.log(privateVar);
    },

    publicVar: 'module pattern',
  };
  
  return exported;
})(); 