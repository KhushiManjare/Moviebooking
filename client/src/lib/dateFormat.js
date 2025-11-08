// src/lib/dateFormat.js

export const dateFormat = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};
