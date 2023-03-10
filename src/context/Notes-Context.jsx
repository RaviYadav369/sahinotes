import React, {useState, createContext } from "react";

export const NoteContext = createContext();

const NoteProvider =({children}) =>{
    const [note, setnote] = useState(
        [{
            name: "First Year: Denatal Anatomy - Bones Complete  (4 topics)",
            id: 1,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "51K views",
            pages: "52",
            author:"Om Khandade",
            authorImg:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            like:"25",
            resourses:"https://marketplace.canva.com/EAFGT481924/1/0/1003w/canva-grey-blue-and-orange-modern-business-digital-book-cover-qiSljydI_NI.jpg",
            upload: "2 days ago",
        },
        {
            name: "CIIPS: Triz benchmarking (Lecture 8)",
            id: 2,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "29K views",
            pages: "5",
            author:"Mario Kalassen",
            authorImg:"https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            like:"40",
            resourses:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjtYQuBVkB_T6osKSadUi6fo2iscbCFa197gdgRI&s",
            upload: "6 days ago",
        },
        {
            name: "JEE: Organic Chemistry - Halogens in 5 minutes",
            id: 3,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "51K views",
            author:"M. Brauen",
            authorImg:"https://images.unsplash.com/photo-1618088129969-bcb0c051985e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            like:"70",
            resourses:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
            pages: "30",
            upload: "5 days ago",
        },
        {
            name: "First Year: Denatal Anatomy - Bones Complete  (4 topics)",
            id: 4,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "5K views",
            author:"Jurica Kalotic",
            authorImg:"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            like:"35",
            resourses:"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
            pages: "40",
            upload: "2 days ago"
        },]
    )

    return (
        <NoteContext.Provider value={note}>
        {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider