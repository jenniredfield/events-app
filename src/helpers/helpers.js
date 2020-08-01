export function sanitiseString(str) {
    return str
            .replace(/&#8220;/g, '"')
            .replace(/&#8221;/g, '"')
            .replace(/&#8217;/g, "'")
}