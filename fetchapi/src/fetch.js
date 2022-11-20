const getFetch = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const postFetch = async (url, body, token) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}

const loginFetch = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}

export { getFetch, postFetch, loginFetch}





