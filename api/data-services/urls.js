import { v4 as uuidv4 } from 'uuid'

const urls = []

module.exports.getAll = () => {
  return urls
}

module.exports.createUrl = (url) => {
  const newUrl = {
    origin: url,
    id: uuidv4(),
  }
  urls.push(newUrl)

  return newUrl
}

module.exports.getById = (id) => {
  return urls.find(url => url.id === id)
}
