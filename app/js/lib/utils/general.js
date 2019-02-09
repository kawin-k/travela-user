import {
  snakeCase as lodashSnakeCase,
  camelCase,
  isArray,
  isPlainObject,
  toNumber,
} from 'lodash'

const _snakeCase = (word) => {
  if (!(/\d/.test(word))) return lodashSnakeCase(word)

  const convertedWordArr = lodashSnakeCase(word).split('')
  let resultWord = convertedWordArr.filter((char, index) => {
    return !(char === '_' && toNumber(convertedWordArr[index + 1]))
  })
  return resultWord.join('')
}

export const convertToCamelCase = (data) => {
  if (isArray(data)) {
    return data.map(convertToCamelCase)
  } else if (isPlainObject(data)) {
    return Object.keys(data).reduce((acc, curr) => (
      {
        ...acc,
        [camelCase(curr)]: convertToCamelCase(data[curr])
      }
    ), {})
  }
  return data
}

export const convertToSnakeCase = (data) => {
  if (isArray(data)) {
    return data.map(convertToSnakeCase)
  } else if (isPlainObject(data)) {
    return Object.keys(data).reduce((acc, curr) => (
      {
        ...acc,
        [_snakeCase(curr)]: convertToSnakeCase(data[curr])
      }
    ), {})
  }
  return data
}