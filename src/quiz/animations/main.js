const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function animateAliceSequentially() {
  try {
    // Wait for alice1 to finish animating
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    // Wait for alice2 to finish animating
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    // Wait for alice3 to finish animating
    await alice3.animate(aliceTumbling, aliceTiming).finished;
  } catch (err) {
    // Handle any errors that might occur during the animations
    console.log(`Error when animating: ${err.message}`);
  }
}

animateAliceSequentially();

// Promise chain
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => {
//       return alice2
//               .animate(aliceTumbling, aliceTiming)
//               .finished;
//   })
//   .then(() => {
//     return alice3
//             .animate(aliceTumbling, aliceTiming)
//             .finished;
//   })
//   .catch((err) => alert(`Error when promising ... ${err.message}`));
