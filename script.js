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

    result.style = "left:calc(50% + "+x+"px); top:calc(50% + "+y+"px);";

    return result;
}

for (i = -3; i <= 3; i++)
    for (j = Math.abs(i) - 4; j <= 4 - Math.abs(i); j++)
        createCube((i - j) * 121.24355653, (i + j) * 70);