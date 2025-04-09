export function readableTimeFormat(timestamp: string | number | Date): string {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);
  const timeDifference = currentTime.getTime() - pastTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours >= 24) {
    // If more than or equal to 24 hours have passed, display the date
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return pastTime.toLocaleDateString(undefined, options);
  } else if (hours >= 1) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes >= 1) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
}
