import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";

export default function Dashboard() {

  const API = "http://192.168.192.129:5000/api";

  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState(null);

  async function fetchNotes(){

    try{

      const res = await axios.get(`${API}/notes`);

      setNotes(res.data);

    }catch(err){

      console.log(err);

    }

  }

  useEffect(()=>{

    fetchNotes();

  },[]);

  async function addNote(){

    if(!title || !content){
      return;
    }

    try{

      await axios.post(`${API}/notes`,{
        title,
        content,
      });

      setTitle("");
      setContent("");

      fetchNotes();

    }catch(err){

      console.log(err);

    }

  }

  async function deleteNote(id){

    try{

      await axios.delete(`${API}/notes/${id}`);

      fetchNotes();

    }catch(err){

      console.log(err);

    }

  }

  function editNote(note){

    setTitle(note.title);
    setContent(note.content);
    setEditingId(note._id);

  }

  async function updateNote(){

    try{

      await axios.put(`${API}/notes/${editingId}`,{
        title,
        content,
      });

      setEditingId(null);

      setTitle("");
      setContent("");

      fetchNotes();

    }catch(err){

      console.log(err);

    }

  }

  return (

    <div className="app">

      <Sidebar />

      <div className="main">

        <div className="topbar">

          <div>
            <div className="page-title">
              My Notes
            </div>

            <div className="page-subtitle">
              Manage your DevOps learning journey
            </div>
          </div>

        </div>

        <div className="create-box">

          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Write your note..."
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />

          {
            editingId ? (

              <button
                className="btn btn-primary"
                onClick={updateNote}
              >
                Update Note
              </button>

            ) : (

              <button
                className="btn btn-primary"
                onClick={addNote}
              >
                Add Note
              </button>

            )
          }

        </div>

        <div className="notes-grid">

          {
            notes.map((note)=>(

              <NoteCard
                key={note._id}
                note={note}
                onDelete={deleteNote}
                onEdit={editNote}
              />

            ))
          }

        </div>

      </div>

    </div>

  );
}
