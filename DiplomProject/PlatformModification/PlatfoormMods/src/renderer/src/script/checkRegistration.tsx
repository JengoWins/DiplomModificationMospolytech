
export function CheckLengthLogin(loginLength:number){
  
  let color = '#ffffffff';
  let textContent = '';
  
  if(loginLength < 5 ){ 
    color = '#ed8936';
    textContent = "Значение меньше 5 символов";
  }
  return {colors: color, info: textContent}
}

export function CheckConfirmPass(password:string, confirm:string){
    
  let color = '#e53e3e';
  let textContent = '';

  if (password === confirm) {
      textContent = '✓ Пароли совпадают';
      color = '#38a169';
  } else {
      textContent = '✗ Пароли не совпадают';
      color = '#e53e3e';
  }

  return {colors: color, info: textContent}
}

export function CheckTextAreaLength(descriptLenght: number){
  let color = '#ffffffff';
  let textContent = '';

  if (descriptLenght > 450) {
      color = '#ed8936';
      textContent = "Вы превысили лимит записи";
  }
  return {colors: color, info: textContent}
}

export function CheckDateBirthd(date: string){
  let color = '#ffffffff';
  let textContent = '';

  let dateUser:Date = new Date(date);
  let dateNow:Date = new Date();

  let years:number = dateNow.getFullYear()-dateUser.getFullYear();
  
  if (years<=14) {
      color = '#ed8936';
      textContent = "Допускается люди старше 14 лет"
  }
  else
    textContent = ""
  return {colors: color, info: textContent}
}


export function strictEmailValidation(email:string) {
    const expression: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result: boolean = expression.test(email);
    let color = '#ffffffff';
    let textContent = '';
    console.log(email)
    if(result){
      color = "#38a169";
      textContent = "Корректная почта";
    }else{
      color = '#e53e3e';
      textContent = "Некорректная почта";
    }
    return {colors: color, info: textContent}
}

export function CheckStructurePass(password:string){
    let strength = 0;
    let color = '#e53e3e';
    let text = 'Слабый';

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
        
    switch(strength) {
        case 0:
        case 1:
            color = '#e53e3e';
            text = 'Слабый';
            break;
        case 2:
            color = '#ed8936';
            text = 'Средний';
            break;
        case 3:
            color = '#ecc94b';
            text = 'Хороший';
            break;
        case 4:
            color = '#38a169';
            text = 'Надежный';
            break;
        }
    return {level: strength,colors: color,value: text}
}

export default {CheckConfirmPass, CheckTextAreaLength, strictEmailValidation, CheckStructurePass, CheckDateBirthd, CheckLengthLogin}
