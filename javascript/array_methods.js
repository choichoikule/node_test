/**
 * data/users.json 파일을 열어보면 랜덤 생성된 유저의 정보가 객체로 배열에 담겨있습니다.
 * 다음 두가지 사항을 만족하는 함수를 구현해 주세요.
 *
 * 1. jobArea 가 같은 유저를 찾아낸다.
 * 2. 필터된 유저에 대해 다음과 같은 language: JavaScript 객체의 속성을 유저 객체에 추가
 * ex) jobArea = "IT" => [{ name: "gwan", jobArea: "IT", language: "JavaScript"}, {name: "jun", jobArea: "IT", language: "JavaScript"}]
 *
 * 필수조건: map, filter array method 사용
 *
 * @param {array[object]} users 유저의 정보가 객체로 담긴 배열
 * @param {string} jobArea
 * @returns {array[object]} users 유저의 정보가 객체로 담긴 배열
 */

const usersHandler = (users, jobArea) => {
  return users
    .filter((userInfo) => userInfo.jobArea == jobArea)
    .map((filteredUserInfo) => ({
      ...filteredUserInfo,
      language: 'JavaScript',
    }));
};

//

/**
 * 문자열을 받아서, 단어가 카운트 된 객체를 리턴하는 함수를 구현해 주세요.
 * ex) "dog cat dog" => { dog: 2, cat: 1 }
 *
 * 필수조건: reduce array method 사용
 *
 * @param {string} words 문자열
 * @returns {object} 단어가 카운팅 된 객체
 */
const wordCount = (words) => {
  if (!words) return {}; //early return 이라고함
  let counted = words.split(' ').reduce(function (countObj, word) {
    const isDuplicated = countObj.hasOwnProperty(word);
    isDuplicated ? countObj[word]++ : (countObj[word] = 1);
    return countObj;
  }, {});

  return counted;
};

module.exports = { usersHandler, wordCount };
