import { Vector2d } from 'atari-monk-math-utils-lib'

describe('Vector2d class', () => {
  it('should create vectors with correct values', () => {
    const vector = new Vector2d(3, 4)
    expect(vector.x).toBe(3)
    expect(vector.y).toBe(4)
  })

  it('should calculate magnitude correctly', () => {
    const vector = new Vector2d(3, 4)
    expect(vector.getMagnitude()).toBe(5)
  })

  it('should normalize vectors correctly', () => {
    const vector = new Vector2d(3, 4)
    vector.normalize()
    expect(vector.x).toBeCloseTo(0.6)
    expect(vector.y).toBeCloseTo(0.8)
  })

  it('should check if two vectors are equal', () => {
    const vectorA = new Vector2d(3, 4)
    const vectorB = new Vector2d(3, 4)
    const vectorC = new Vector2d(1, 2)
    expect(vectorA.isEqual(vectorB)).toBe(true)
    expect(vectorA.isEqual(vectorC)).toBe(false)
  })

  it('should add vectors correctly', () => {
    const vectorA = new Vector2d(3, 4)
    const vectorB = new Vector2d(1, 2)
    const result = Vector2d.add(vectorA, vectorB)
    expect(result.x).toBe(4)
    expect(result.y).toBe(6)
  })

  it('should subtract vectors correctly', () => {
    const vectorA = new Vector2d(3, 4)
    const vectorB = new Vector2d(1, 2)
    const result = Vector2d.subtract(vectorA, vectorB)
    expect(result.x).toBe(2)
    expect(result.y).toBe(2)
  })

  it('should calculate dot product correctly', () => {
    const vectorA = new Vector2d(3, 4)
    const vectorB = new Vector2d(1, 2)
    const result = Vector2d.dotProduct(vectorA, vectorB)
    expect(result).toBe(11)
  })

  it('should calculate cross product correctly', () => {
    const vectorA = new Vector2d(3, 4)
    const vectorB = new Vector2d(1, 2)
    const result = Vector2d.crossProduct(vectorA, vectorB)
    expect(result).toBe(2)
  })
})
