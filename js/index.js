//3d scroll

let Zspacing = -700;
let lastPos = Zspacing / 5;
let Frames = document.getElementsByClassName('frame');
let frames = Array.from(Frames);
let zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;

  lastPos = top;
  zVals = zVals.slice(0, frames.length);
  frames.forEach(function (nawElement, i) {
    zVals.push((i * Zspacing) + Zspacing);
    zVals[i] += delta * -5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(Zspacing) ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  });
}

window.scrollTo(0, 1)