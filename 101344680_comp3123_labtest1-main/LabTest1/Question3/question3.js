/*
emove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delete
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to 
build directory path. It is acceptable, to have a remove.js script and separate add.js 
script.
*/
const fs = require("fs");

const createLogs = () => {
  const target = "./logs";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  process.chdir(target);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `This is the log file number ${i}`, (err) =>
      err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(`Creating file 'log${i}.txt'`)
    );
  }
};

const removeLogs = () => {
  const target = "./logs";
  if (fs.existsSync(target)) {
    process.chdir(target);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(`Error deleting file '${file}'`) : console.log(`Deleting file '${file}'`)
        );
      });
    });
  }
};

// console.log(createLogs());
console.log(removeLogs());