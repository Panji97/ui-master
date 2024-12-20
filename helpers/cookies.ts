/**
 * ------------------------------------------------------------------------------------
 * Set cookie
 * ------------------------------------------------------------------------------------
 */
export const setCookie = (name: string, value: string, days: number) => {
    if (typeof document !== 'undefined') {
        // Cek apakah 'document' tersedia
        let expires = ''
        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = `; expires=${date.toUTCString()}`
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`
    }
}

/**
 * ------------------------------------------------------------------------------------
 * Get cookie
 * ------------------------------------------------------------------------------------
 */
export const getCookie = (name: string) => {
    if (typeof document !== 'undefined') {
        // Cek apakah 'document' tersedia
        const nameEQ = `${name}=`
        const ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

/**
 * ------------------------------------------------------------------------------------
 * Erase cookie
 * ------------------------------------------------------------------------------------
 */
export const eraseCookie = (name: string) => {
    if (typeof document !== 'undefined') {
        // Cek apakah 'document' tersedia
        document.cookie = `${name}=; Max-Age=-99999999; path=/`
    }
}
