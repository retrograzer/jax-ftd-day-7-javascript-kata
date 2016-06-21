/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

const growthModels = []
averageGrowthModel(growthModels)

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
    result = [arr[elem], arr[elem]]
  }

  return result
}

function averageGrowthModel (growthModels) {
  let result = []

  for (let elem of growthModels) {
    if (growthModels[elem].lengthToWingspan === 0 || growthModels[elem].leavesEatenToWeight) {
       return undefined
    }
    reduce(growthModels, (acc, next) => { (acc + next) / growthModels.length}, 0)
  }
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
