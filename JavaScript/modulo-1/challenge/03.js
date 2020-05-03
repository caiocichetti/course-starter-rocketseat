function haveSkill(skills) {
    return (skills.indexOf("Javascript") !== -1) ? true : false;
  }

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(haveSkill(skills));