/**
 * @param {Array} data - The array to iterate over
 * @param {Function} callback - The async callback to execute on each array item
 * @description An async function to iterate over each item of the given array,
 * this will allow us to make multiple calls to promises in a loop, and allow
 * them to finish before moving to the next bit of code.
 */
module.exports = async (data, callback) => {
  await Promise.all(
    data.map(async (item, index) => {
      await callback(item, index)
    })
  )
}
