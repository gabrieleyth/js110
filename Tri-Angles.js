/*
ok Right: One angle is a right angle (exactly 90 degrees).
ok Acute: All three angles are less than 90 degrees.
ok Obtuse: One angle is greater than 90 degrees.
ok To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0
*/

function triangle(a, b, c) {
  if (a+b+c !== 180 || Math.min(a, b, c) <= 0) return "invalid";
  if (a===90 || b===90 || c===90) return "right";
  if (Math.max(a, b, c) < 90) return "acute";
  if (Math.max(a, b, c) > 90) return "obtuse";
  // if everywhere so that it evaluates to all conditions at the same time and takes the first match
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"