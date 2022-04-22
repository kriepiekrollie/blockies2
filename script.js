cubes = [];
X = [];
Y = [];

function createCube(x, y) {
    result = document.createElement("div");
    left = document.createElement("div");
    right = document.createElement("div");
    topp = document.createElement("div");

    document.body.appendChild(result);
    result.appendChild(left);
    result.appendChild(right);
    result.appendChild(topp);

    result.className = "cube";
    left.className = "RomLeft";
    right.className = "RomRight";
    topp.className = "RomTop";

    result.style = "left:calc(50% + "+((x - y) * 121.24355653)+"px); top:calc(50% + "+(x + y) * 70+"px);";

    cubes.push(result)
    X.push(x);
    Y.push(y);

    return result;
}

createCube(0, 0);
dx = 1;
dy = 0;

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowUp":
            dx = 0;
            dy = -1;
            break;
        case "ArrowDown":
            dx = 0;
            dy = 1;
            break;
        case "ArrowLeft":
            dx = 1;
            dy = 0;
            break;
        case "ArrowRight":
            dx = -1;
            dy = 0;
            break;
    }
}

function update() {
    for (i = cubes.length - 1; i > 0; i++) {
        X[i] = X[i - 1];
        Y[i] = Y[i - 1];
        cubes[i].style = "left:calc(50% + "+((X[i] - Y[i]) * 121.24355653)+"px); top:calc(50% + "+(X[i] + Y[i]) * 70+"px);";
    }
    X[0] += dx;
    Y[0] += dy;
    cubes[0].style =  "left:calc(50% + "+((X[0] - Y[0]) * 121.24355653)+"px); top:calc(50% + "+(X[0] + Y[0]) * 70+"px);";
}

setInterval(update, 100);