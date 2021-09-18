export default function saveUser(key: string, value: string): void {
    if(typeof window !== 'undefined')
        localStorage.setItem(key, value);
}
