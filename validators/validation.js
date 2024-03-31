function isValidTask(task) {
    return !!task && typeof task === 'string' ? task.trim().length > 0 : false;
}

export default  isValidTask;