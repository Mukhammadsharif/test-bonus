export default function convertDate(date) {
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth() + 1
    const convertMonth = month < 10 ? `0${month}` : month

    return `${day}.${convertMonth}`
}
