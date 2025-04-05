/**
 * Generates a full URL for an image stored in the public assets folder.
 * 
 * @param {string} path - Relative path to the image inside the /assets directory.
 * @returns {string} - Fully qualified URL that can be used in <img src=""> or CSS.
 */
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
