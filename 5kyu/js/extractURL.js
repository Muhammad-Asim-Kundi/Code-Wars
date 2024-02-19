// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

/** Code */

function domainName(url) {
    // Remove protocol (http:// or https://) and www if present
    let domain = url.replace(/(https?:\/\/)?(www\.)?/, '');

    // Extract domain name using a regular expression
    const match = domain.match(/^([a-zA-Z0-9-]+)\./);

    // Check if there is a match and return the domain name, otherwise return null
    return match ? match[1] : null;
}

//** Another method */

function extractDomainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };


/** Practice  */

function GetDomainName(url){
    url = url.replace("https://", '')
    url = url.replace("http://", '')
    url = url.replace("www.", '')
    return url.split('.')[0]
}