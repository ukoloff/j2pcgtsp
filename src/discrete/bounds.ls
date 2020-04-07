module.exports = bounds

function bounds data
  data.bounds =
    min:
      x: Math.min data.start.x, ...data.points.map (.x)
      y: Math.min data.start.y, ...data.points.map (.y)
    max:
      x: Math.max data.start.x, ...data.points.map (.x)
      y: Math.max data.start.y, ...data.points.map (.y)
