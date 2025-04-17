const percentage = 95;
const cutoff = 50;

const cutoffForCGrade = 70;
const cutoffForBGrade = 80;
const cutoffForAGrade = 90;

if (percentage < cutoff) {
  console.log("Failed");
} else if (percentage <= cutoffForCGrade) {
  console.log("D Grade");
} else if (percentage <= cutoffForBGrade) {
  console.log("C Grade");
} else if (percentage <= cutoffForAGrade) {
  console.log("B Grade");
} else {
  console.log("A Grade");
}

// 0-50 -> slow
// 50 -65 -> average
// 65 -80 -> fast
// 80 - 100 -> really fast
