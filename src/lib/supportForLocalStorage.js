/* eslint-disable no-prototype-builtins */
// Here is another, less exact, imitation of the localStorage object.It is simpler than the previous one, but it is compatible with old browsers, like Internet Explorer < 8(tested and working even in Internet Explorer 6).It also makes use of cookies.

export function supportForLocalStorage() {
  if (!window.localStorage) {
    window.localStorage = {
      getItem(sKey) {
        if (!sKey || !this.hasOwnProperty(sKey)) {
          return null
        }
        return unescape(
          document.cookie.replace(
            new RegExp(
              '(?:^|.*;\\s*)' +
                escape(sKey).replace(/[-.+*]/g, '\\$&') +
                '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
            ),
            '$1'
          )
        )
      },
      key(nKeyId) {
        return unescape(
          document.cookie
            .replace(/\s*=(?:.(?!;))*$/, '')
            .split(/\s*=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]
        )
      },
      setItem(sKey, sValue) {
        if (!sKey) {
          return
        }
        document.cookie =
          escape(sKey) +
          '=' +
          escape(sValue) +
          '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
        this.length = document.cookie.match(/=/g).length
      },
      length: 0,
      removeItem(sKey) {
        if (!sKey || !this.hasOwnProperty(sKey)) {
          return
        }
        document.cookie =
          escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        this.length--
      },
      hasOwnProperty(sKey) {
        return new RegExp(
          '(?:^|;\\s*)' + escape(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\='
        ).test(document.cookie)
      }
    }
    window.localStorage.length = (
      document.cookie.match(/=/g) || window.localStorage
    ).length
  }
}
