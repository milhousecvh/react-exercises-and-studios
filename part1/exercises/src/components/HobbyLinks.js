export default function HobbyLinks() {
    let hobbyTitle = "Hobbies I Enjoy"
    let hobbyLinks = ["https://www.alltrails.com/", "https://en.wikipedia.org/wiki/Woodblock_printing"];

    return (
        <div>
            <h3>{hobbyTitle}</h3>
        <a href = {hobbyLinks[0]}>All Trails Hiking Trail Finder</a>
        <a href = {hobbyLinks[1]}>Wikipedia on Woodblock Printmaking</a>
        </div>
    )
}