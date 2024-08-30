export const usePersist = <T>(key: string, init: () => T) => {
    const initResult: T = init()
    let storedValue = null
    storedValue = JSON.parse(localStorage.getItem(key) + '')

    if (storedValue === null) {
        localStorage.setItem(key, JSON.stringify(initResult))
    }

    const refs: Ref<T> = useState<T>(key, () => ((storedValue !== null) ? storedValue : initResult) as T)

    watch(refs, newValue => localStorage.setItem(key, JSON.stringify(newValue)))
    return refs
}

export const removePersistState = (key: string): boolean => {
    const exist = localStorage.getItem(key)
    localStorage.removeItem(key)
    return (exist !== null)
}