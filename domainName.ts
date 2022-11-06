function domainName(url: string): string {
  if(url.indexOf('//') > -1) {
    url = url.split('//')[1]
  }
  return url
    .split('/')[0]
    .replace(/www.|.com|.org|.ru/gi, '')
    .split('.')[0];
}