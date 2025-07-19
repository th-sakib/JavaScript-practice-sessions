// 🔁 Rename or Move File
fs.rename(oldPath, newPath, callback)
// Renames a file or moves it to a new location.
// Works for both file and folder.

// 📋 Copy File
fs.copyFile(src, dest, callback)
// Copies a file from src to dest.
// Does not work for folders.

// 📦 Copy Folder (Recursively)
fs.cp(src, dest, { recursive: true }, callback)
// Recursively copies all files/folders from src to dest.
// Requires recursive: true for directories.

// ❌ Delete File
fs.unlink(path, callback)
// Deletes a specific file.

// 🗑️ Delete Empty Directory
fs.rmdir(path, callback)
// Deletes an empty directory only.

// 🔥 Delete Directory Recursively
fs.rm(path, { recursive: true }, callback)
// Deletes a directory and all its contents (files & subfolders).
// Requires recursive: true.

// 🏗️ Create Directory
fs.mkdir(path, callback)
// Creates a new directory.

// 📊 File/Folder Stats
fs.stat(path, callback)
// Retrieves information (stats) about a file or directory.
// Useful for checking if it’s a file or folder, size, created date, etc.

// 👀 Watch File or Directory
fs.watch(path, (eventType, filename) => { })
// Watches a file/directory for changes.
// Callback receives:
// - eventType: "rename" or "change"
// - filename: name of the changed file
// Works best using the callback-based API, not Promises.