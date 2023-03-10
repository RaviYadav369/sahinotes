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
            upload: "2 days ago",
        },
        {
            name: "CIIPS: Triz benchmarking (Lecture 8)",
            id: 2,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "29K views",
            pages: "5",
            upload: "6 days ago",
        },
        {
            name: "JEE: Organic Chemistry - Halogens in 5 minutes",
            id: 3,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "51K views",
            pages: "5",
            upload: "5 days ago",
        },
        {
            name: "First Year: Denatal Anatomy - Bones Complete  (4 topics)",
            id: 4,
            notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
            views: "51K views",
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