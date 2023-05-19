const students = [
    {
      name: "John",
      age: 20,
      grades: [80, 90, 95],
      hobbies: ["Reading", "Sports"]
    },
    {
      name: "Jane",
      age: 19,
      grades: [85, 92, 88],
      hobbies: ["Music", "Painting"]
    },
    {
      name: "Alex",
      age: 21,
      grades: [95, 98, 97],
      hobbies: ["Gaming", "Cooking"]
    }
  ];
  
  // a. findTopStudents
  function findTopStudents(threshold) {
    return students.filter((student) => {
      const averageGrade =
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;
      return averageGrade > threshold;
    });
  }
  
  console.log(findTopStudents(90)); // Returns students with average grade above 90
  