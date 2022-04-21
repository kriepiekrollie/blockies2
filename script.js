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
    for (j = -3; j <= 3; j++)
        createCube((i - j) * 100, (i + j) * 50);