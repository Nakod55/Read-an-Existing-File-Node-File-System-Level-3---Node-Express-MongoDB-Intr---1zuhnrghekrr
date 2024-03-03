const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  const content= await fs.readFile(`../${fileName}`, "utf-8");
  console.log(content);
  
};
reader(fileName);

module.exports =  reader ;
