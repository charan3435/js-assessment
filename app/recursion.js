recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let files = [];
    if (dirName !== undefined) {
      if (data.dirName === dirName) {
        files = data.files;
        data.subDirs.forEach((subDir) => {
          files = files.concat(listFiles(subDir, undefined));
        });
      } else {
        data.subDirs.forEach((subDir) => {
          files = files.concat(listFiles(subDir, dirName));
        });
      }
    } else {
      files = data.files;
      data.subDirs.forEach((subDir) => {
        files = files.concat(listFiles(subDir, dirName));
      });
    }
    return files;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    const temp = [1, 1];
    let i = 2;
    while (i <= n) {
      temp.push(temp[i - 2] + temp[i - 1]);
      i += 1;
    }
    return temp[n - 1];
  },  
};
