function calculateDemeritPoints(speed) {
    let speedLimit = 70;
    let kmPerPoint = 5;
    let maxpoints = 12;

    if (speed < speedLimit) {
        return ("Ok");
    // No demerit points if speed is within limit
    }

    // Calculate how many km/s the speed is over the limit.
    let speedExceeded = speed - speedLimit;

    // Calculate demerit points
    let demeritPoints = Math.floor(speedExceeded / kmPerPoint);{

    // Output demerit points
    return (`Points: ${demeritPoints}`);
    }
    // Check if license should be suspended
    if (demeritPoints > maxpoints) {
        return ("License suspended");
    }
}

