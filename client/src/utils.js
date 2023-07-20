/**
 * This function checks if the given code block matches the solution
 * @param {string} codeBlock - The code block to check
 * @param {string} solution - The solution to compare against
 * @returns {boolean} - true if the cleaned code block matches the solution, false otherwise
 */
export const checkSolution = (codeBlock, solution) => {
  // Clean the code block by removing comments and white space
  const code = cleanCode(codeBlock);
  // Check if the cleaned code block matches the solution
  if (code === solution) {
    return true;
  }
};

/**
 * This function cleans a given code block by removing comments and white space
 * @param {string} codeBlock - The code block to clean
 * @returns {string} - The cleaned code block
 */
function cleanCode(codeBlock) {
  // Split the code block into lines
  const lines = codeBlock.split("\n");
  // Filter out lines that contain comments
  const cleanLines = lines.filter((line) => !line.includes("//"));
  // Join the remaining lines and remove white space
  const cleanCode = cleanLines.join("").replace(/ /g, "");
  return cleanCode;
}
