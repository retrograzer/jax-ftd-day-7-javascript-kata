/*
  TODO: Implement empty function bodies according to their requirements
*/

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */

function reduce (arr, func, init) {
  let result = []
   for (let elem of arr) {
     result = func(result, elem)
   }
  return result
}

function averageGrowthModel (growthModels) {
  let cur = createGrowthModel(20, 15)
  growthModels = [cur]
  growthModels.reduce((acc, next) => { acc + next }, 0)
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
