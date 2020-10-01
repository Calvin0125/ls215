let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function sum(array) {
  return array.reduce((memo, elem) => memo + elem);
}

function arrayAverage(array) {
  return sum(array) / array.length;
}

function getNumberGrade(scores) {
  let examAverage = arrayAverage(scores.exams);
  let exerciseTotal = sum(scores.exercises);
  return Math.round((examAverage * .65) + (exerciseTotal * .35));
}

function getLetterGrade(numberGrade) {
  if (numberGrade >= 93) {
    return 'A';
  } else if (numberGrade >= 85) {
    return 'B';
  } else if (numberGrade >= 77) {
    return 'C';
  } else if (numberGrade >= 69) {
    return 'D';
  } else if (numberGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function grade(student) {
  let numberGrade = getNumberGrade(student.scores);
  let letterGrade = getLetterGrade(numberGrade);
  return `${numberGrade} (${letterGrade})`;
}

function min(array) {
  return array.reduce((memo, elem) => {
    return memo < elem ? memo : elem;
  });
}

function max(array) {
  return array.reduce((memo, elem) => {
    return memo > elem ? memo : elem;
  });
}

function getExamStats(exams) {
  let average = Math.round(arrayAverage(exams) * 10) / 10;
  let minimum = min(exams);
  let maximum = max(exams);
  return { average, minimum, maximum };
}

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let exams = [];
  Object.keys(scores).forEach(student => {
    studentGrades.push(grade(scores[student]));
    exams.push(getExamStats(scores[student].scores.exams));
  });

  return { studentGrades, exams };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}*/
