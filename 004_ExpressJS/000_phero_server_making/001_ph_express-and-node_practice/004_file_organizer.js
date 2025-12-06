/*
 * We are creating some messy files
 * and organizing them in their category folder
 * e.g. ".jpg" going to image directory. ".js" going to code directory and so on.
 * */
import fs, { mkdirSync } from "node:fs";
import path from "node:path";

// naming the sourceDirectory && organizedDirectory
const sourceDir = path.join(import.meta.dirname, "output", "messy_files");
const orgranizedDir = path.join(
  import.meta.dirname,
  "output",
  "orgranized_files",
);

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  // creating those dummy messy files in the messy_file directory
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }

  testFiles.forEach((file) => {
    fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
  });
  console.log("Messy directories files are created!!!");

  // creating directories for each category of files
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(orgranizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      mkdirSync(categoryPath, { recursive: true });
    }
  });
}

const getCategory = (fileName) => {
  const ext = path.extname(fileName).toLowerCase();

  for (const [category, extNames] of Object.entries(categories)) {
    if (extNames.includes(ext)) {
      return category;
    }
  }
  return "others";
};

const organizeFiles = () => {
  // get the source directory files
  const files = fs.readdirSync(sourceDir);
  if (files.length === 0) {
    console.log("nothing to work on");
    return;
  }

  const trackStat = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    // building path for the source file path
    const sourcePath = path.join(sourceDir, file);
    const stats = fs.statSync(sourcePath);
    if (stats.isDirectory()) {
      console.log("Its a directory");
      return;
    }

    const category = getCategory(file);
    // building path for the destination file path
    const destDir = path.join(orgranizedDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);
    trackStat.total++;
    trackStat.byCategory[category] = (trackStat.byCategory || 0) + 1;
  });
  console.log(trackStat);
};

const getHelp = () => {
  console.log(`
    File Organizer. How to use?
    use commands:

    init - to initialize a messy file directory
    organize - to organize them

    example: 
      node 004_file_organizer.js init
      node 004_file_organizer.js organize
    `);
};

const command = process.argv[2];
switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    getHelp();
    break;
}
