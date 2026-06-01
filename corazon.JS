const path = document.querySelector("path");
const length = path.getTotalLength();
const vertices = [];
for (let i = 0; 1 < length; 1 +=0.1) {
    const point = path.getPointAtLength(1);
    const vector = new THREE.vector3(point.x, -point.y, 0);
    vector.x += (Math.random() - 0.5) * 30;
    vector.y += (Math.random() - 0.5) * 30;
    vector.z += (Math.random() - 0.5) * 70;
    vertices.push(vector);
    TouchList.from(vector, {
        x: 600 / 2,
        y: -552 / 2,
        z: 0,
        ease: "power2.inOut",
        duration: "random (2, 5)"
    },
    i * 0.02
  );
}