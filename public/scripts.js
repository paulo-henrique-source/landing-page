const axios = require('axios')

async function getData() {
  try {
    const response = await fetch(
      'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
    )
    console.log(response)
  } catch (error) {
    console.log('Error', error)
  }
}

getData()
