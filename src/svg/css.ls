module.exports = """
svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100;
  box-sizing: border-box;
  padding: 0;
}

path {
  stroke-width: 0.5%;
  fill-rule: nonzero;
}

path.DBS {
  fill: lime;
  stroke: blue;
}

path.DBS:first-of-type {
  fill: silver;
}

path.DBS:hover {
  stroke-dasharray: 1%;
  animation: dash 1s linear infinite;
}

path.part {
  fill: white;
  fill-opacity: 0%;
  stroke: black;
}

path.part:hover {
  fill: yellow;
  fill-opacity: 50%;
  stroke-dasharray: 1%;
  animation: dash 1s linear infinite;
}

path.route {
  stroke: red;
  fill: none;
}

circle.route {
  r: 0.5%;
  fill-opacity: 5%;
  fill: red;
  stroke: navy;
  stroke-width: 0.3%;
}

circle.route:hover {
  fill-opacity: 75%;
  stroke: lime;
}

@keyframes dash {
  from {
    stroke-dashoffset: 0%;
  }
  to {
    stroke-dashoffset: -2%;
  }
}
"""
