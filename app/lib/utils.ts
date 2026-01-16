export function formatDate(dateString: string) {
  // format date nicely
  // example: from this 👉 2025-05-20 to this 👉 May 20, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}


export function handleError(err: any, setError: (msg: string) => void) {
   if (err.errors?.[0]?.code === "form_password_incorrect") {
        setError("Password is incorrect. Please try again.");
      } else if (err.errors?.[0]?.code === "form_identifier_exists") {
        setError("That email address is already in use. Please try another.");
      } else if (err.errors?.[0]?.code === "form_password_length_too_short") {
        setError("Password is must be at least 8 characters long.");
      } else {
        setError("An error occurred. Please try again.");
      }
}
