/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /@*(([a-zA-Z1-9-]*).(com|ru|net|org|by|info)$)/i;
  return email.match(regex)[1];
}

module.exports = getEmailDomain;
