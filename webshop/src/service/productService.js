const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/'

function create(title, price, categoryID) {
  return fetch(`${API_URL}products.json`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ title, price, categoryID })
  })
    .then(res => res.json())
    .then(product => setProductId(product.name))
}

function update(id, product) {
  if (!id) {
    return null;
  }

  return fetch(`${API_URL}products/${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ id: product.id, title: product.title, price: product.price, categoryID: product.categoryID })
  })
    .then(res => res.json())
  /* .then(product => setProductId(product.name)) */
}

function updateImg(id, img) {
  return fetch(`${API_URL}products/${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ img })
  })
    .then(resp => resp.json())
}


function setProductId(id) {
  return fetch(`${API_URL}products/${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
    .then(resp => resp.json())
}

function manipulateProductObject(obj) {
  const newData = Object.entries(obj).map(item => {
    const dataWithId = {
      id: item[0],
      ...item[1]
    }
    return dataWithId
  })
  return newData
}

function read() {
  return fetch(`${API_URL}products.json`)
    .then(res => res.json())
}

function del(id, successCalback) {
  if (!id) {
    return null;
  }

  return fetch(`${API_URL}products/${id}.json`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(json => successCalback(json))
}

export function getProduct(id) {
  return fetch(`${API_URL}products/${id}.json`)
    .then(res => res.json())
}

function getCategories(id) {
  return fetch(`${API_URL}categories/${id}.json`, {
    method: "GET"
  })
    .then((res) => res.json())
}

export default {
  create: create,
  read: read,
  manipulateProductObject: manipulateProductObject,
  del: del,
  update: update,
  getProduct,
  updateImg,
  getCategories: getCategories
}