export const usePersist = <T>(key: string, init: () => T): Ref<T> => {
    const initResult: T = init()

    const isClient = process.client
    const storedValue = isClient ? JSON.parse(localStorage.getItem(key) || 'null') : null

    if (isClient && storedValue === null) {
        localStorage.setItem(key, JSON.stringify(initResult))
    }

    const refs: Ref<T> = useState<T>(key, () => (storedValue !== null) ? storedValue : initResult) as Ref<T>

    if (isClient) {
        watch(refs, (newValue: T) => {
            localStorage.setItem(key, JSON.stringify(newValue))
        }, { deep: true })
    }

    return refs
}

export const removePersistState = (key: string): boolean => {
    if (process.client) {
        const exist = localStorage.getItem(key)
        localStorage.removeItem(key)
        return (exist !== null)
    }
    return false
}