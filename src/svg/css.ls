module.exports = """
svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100;
  box-sizing: border-box;
  padding: 1ex;
}

path {
  stroke-width: 0.16%;
  fill-rule: nonzero;
}

path.part {
  fill: white;
  stroke: black;
}

path.part:hover {
  fill: yellow;
  stroke-dasharray: 1%;
  animation: dash 1s linear infinite;
}

@keyframes dash
  from
    stroke-dashoffset: 0%;
  to
    stroke-dashoffset: -2%;

"""
