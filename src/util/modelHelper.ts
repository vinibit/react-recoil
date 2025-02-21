let id = 0;

const getNewId = (): number => {
    return id++;
}

export { getNewId }