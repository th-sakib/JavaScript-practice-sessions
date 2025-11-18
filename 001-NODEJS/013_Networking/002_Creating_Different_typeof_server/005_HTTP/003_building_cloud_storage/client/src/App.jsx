import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [directoryContents, setDirectoryContents] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newName, setNewName] = useState("");

  const url = "http://localhost:4000/";

  // fetching the data // get request
  const getDirectoryContents = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setDirectoryContents(data);
  };

  useEffect(() => {
    getDirectoryContents();
  }, []);

  // upload functionality
  async function handleUpload(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      getDirectoryContents();
    });

    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = Math.round((e.loaded / e.total) * 100);
      setProgress(totalProgress);
    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("filename", file.name);
    xhr.send(file);
  }

  async function handleDelete(file) {
    const res = await fetch(url, { method: "DELETE", body: file });
    if (res.status === 200) {
      getDirectoryContents();
    }
  }

  async function handleRenameButton(oldName) {
    setNewName(oldName);
  }

  async function handleRenameSave(oldName) {
    const res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ oldName, newName }),
    });
    if (res.status === 200) {
      getDirectoryContents();
      console.log("rename successful");
    }
  }

  return (
    <>
      <h1>Cloud Storage: </h1>
      {/* input field: upload */}
      <input type="file" name="upload" id="upload" onChange={handleUpload} />
      <p>Progress: {progress}</p>
      <div>
        <input
          type="text"
          name="rename"
          id="rename"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <section>
        {directoryContents.length !== 0 &&
          directoryContents.map((content, idx) => (
            <div style={{ margin: "4px 0" }} key={idx}>
              <section>
                <b>{content}</b>
              </section>
              <a className="custom-link" href={`${url + content}?mode=open`}>
                Open
              </a>
              <a
                className="custom-link"
                href={`${url + content}?mode=download`}
              >
                download
              </a>
              <button
                className="custom-link"
                onClick={() => handleDelete(content)}
              >
                Delete
              </button>
              <button
                className="custom-link"
                onClick={() => handleRenameButton(content)}
              >
                Rename
              </button>
              <button type="submit" onClick={() => handleRenameSave(content)}>
                save
              </button>
            </div>
          ))}
      </section>
    </>
  );
}

export default App;
