const form = document.getElementById('formAuthentication');
const adminId = document.getElementById('adminId');
const adminPassword = document.getElementById('password');
const boxId = document.querySelector('.box-id');
const boxPassword = document.querySelector('.box-password');

const handleValidation = e => {
  const adminPassword = e.target.password.value;

  const createValidationInfo = document.createElement('p');
  createValidationInfo.className = 'validation-info';
  const validationInfoList = document.querySelectorAll('.validation-info');

  if (!adminId.value) {
    e.preventDefault();
    if (validationInfoList.length <= 0) {
      createValidationInfo.innerText = '아이디를 입력해주세요.';
      boxId.append(createValidationInfo);
    }

    return false;
  }

  if (!adminPassword.value) {
    e.preventDefault();
    if (validationInfoList.length <= 0) {
      createValidationInfo.innerText = '비밀번호를 입력해주세요.';
      boxPassword.append(createValidationInfo);
    }
    return false;
  }
};

form.addEventListener('submit', handleValidation);

const handleRemoveInfo = () => {
  const validationInfo = document.querySelector('.validation-info');
  validationInfo.remove();
};

adminId.addEventListener('change', handleRemoveInfo);
adminPassword.addEventListener('change', handleRemoveInfo);
