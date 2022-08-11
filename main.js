/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const notes = [
    {
        id: 1,
        text: "hello",
        author: "Me",
        date: "06/01/2022",
        topics: ["greeting", "one word", "first meeting" ]
    },
    {
        id: 2,
        text: "goodbye",
        author: "you",
        date: "06/02/2022",
        topics: ["salutation", "one word", "last meeting", "direct" ]
    }
]
notes.push({id: 3, text: "rainy", author: "Isaac", date: "06/03/2022", topics: ["weather", "one word", "first meeting", "direct" ]}, 
        {id:4, text: "Sci-Fi is fun!", author: "Asimov", date: "06/04/2022", topics: ["literature", "many words", "last meeting", "direct"]})
// console.log(notes)
/*for (const note of notes) {
    console.log(note.text)
}*/
/*console.log("***All Note Topics***")
for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic)
    }

    } */

   // number of topics divide by number of notes.length
//     let sumTopics = 0
//     for (const note of notes){
//         sumTopics += note.topics.length
//  }

//    console.log("*** Average Topics Per Note ***")
// //     /*   NO NEED FOR THIS!!! ====>> for (const note of notes) {
// //                                     for (const topic of note.topics) {
// //                                         console.log(sumTopics / notes.length)
// //                                     }
// //    } */
//    console.log(sumTopics / notes.length)

// const filteredNotes = []
// const criteria = "first meeting"

// for (const note of notes) {
//         if (note.topics.includes(criteria)) {
//         filteredNotes.push(note)
//         }
    
// }
// console.log(filteredNotes)

// console.log("***  Note Articles  ***")

// for (const note of notes) {
//     console.log(`<article>${note.text}</article`)
// }

console.log("***  Note Articles  ***")

let allHTML = ""

for (const note of notes) {
    console.log(allHTML = `<article>`) 
    console.log(note.text)
    for (const topic of note.topics) {
        console.log(`<section>${topic}</section>`)
    }
    console.log(allHTML = '</article>')
}
