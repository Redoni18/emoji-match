export function getTwemojiUrl(emoji: string) {
    const emojiCode = [...emoji].map((char) => char.codePointAt(0)!.toString(16))
    return `/twemoji/${emojiCode}.svg`
}