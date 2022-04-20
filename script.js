function createCube(x, y, center) {
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

    if (!center) {
        result.style = "left:"+x+"px; top:"+y+"px;";
    }

    return result;
}

createCube(0,0,true);