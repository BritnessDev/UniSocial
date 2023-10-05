// Function that will take a string and return the first 20 characters of it
export const truncateString = (str: string, len: number) => (str.length > len ? str.substring(0, len) : str)

// Function that will take a string or number and return a sanitized version of it (removing special characters)
export const sanitizeString = (val: string | number) => {
  if (typeof val === 'string') {
    return val.toString().replace(/[^a-zA-Z0-9 ]/g, '')
  }

  return val
}
