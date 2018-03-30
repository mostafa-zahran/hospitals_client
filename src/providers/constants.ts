export const apiUrl = 'http://localhost:3000/api/';
export const accessKey = 'ec7212599785694a95135276e947d88d';

export class UserPrefs {
  constructor() {
  }

  public apiToken = '';
  public lang = 'en';
}

export function translate(attr_names, objects, lang) {
  return objects.map(function (object) {
    attr_names.forEach(attr_name => {
      object[attr_name] = object[lang + '_' + attr_name];
    });
    return object;
  });
}
