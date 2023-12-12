// Этот код тупо для компа
// document.addEventListener('mousemove', e => {
//    Object.assign(document.documentElement, {
//       style: `
// 		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
// 		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
// 		`,
//    });
// });

// Остальной код и для компа и для телефонов с акселерометром
const handleMouseMove = e => {
   const moveX = (e.clientX - window.innerWidth / 2) * -0.005;
   const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

   applyParallax(moveX, moveY);
};

const handleDeviceOrientation = e => {
   const moveX = e.gamma * -0.1;
   const moveY = e.beta * 0.1;

   applyParallax(moveX, moveY);
};

const applyParallax = (moveX, moveY) => {
   document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
   document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
};

document.addEventListener('mousemove', handleMouseMove);

if (window.DeviceOrientationEvent) {
   window.addEventListener('deviceorientation', handleDeviceOrientation);
} else {
   console.log('Your device has no accelerometer');
}
