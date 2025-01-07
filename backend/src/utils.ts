export const randomString = (length: number) => {
    const options = 'abcdef12345'
    let finalRes =''

    for(let i=0 ; i<options.length; i++){
        const randomNum = Math.floor(Math.random() * length)
        finalRes += options[randomNum]
    }
    return finalRes
}