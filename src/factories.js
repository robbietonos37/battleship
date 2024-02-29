const ship = (length) => {
    let hits = 0;
    const shipLength = length;

    const getsHit = () => {
        hits += 1;
    }

    const isSunk = () => {
        return hits >= shipLength;
    }

    return { shipLength, getsHit, isSunk }

}