// JSON TYPESCRIPT

type enmessages = typeof import("./messages/en.json")
type arMessages = typeof import("./messages/ar.json")

declare interface IntMessages extends enmessages, arMessages { }

