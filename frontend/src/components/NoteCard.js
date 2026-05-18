export default function NoteCard({
  note,
  onDelete,
  onEdit,
}) {

  return (

    <div className="note-card">

      <div className="note-card-top">

        <div className="note-badge">
          NOTE
        </div>

      </div>

      <h3 className="note-title">
        {note.title}
      </h3>

      <p className="note-content">
        {note.content}
      </p>

      <div className="note-footer">

        <div className="note-date">
          {new Date(note.createdAt).toLocaleDateString()}
        </div>

        <div className="card-actions">

          <button
            className="btn btn-edit"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onDelete(note._id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );
}
