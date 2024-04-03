/**
 * Checks if the given task is valid by ensuring it is truthy and has a non-empty trimmed string length.
 * Returns a boolean indicating if the task is valid.
*/
const isValidTask = task => task?.trim().length > 0;

export default isValidTask;