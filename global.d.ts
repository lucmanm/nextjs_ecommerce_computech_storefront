// JSON TYPESCRIPT

type enmessages = typeof import("./messages/en-us.json")
type arMessages = typeof import("./messages/ar-sa.json")

declare interface IntMessages extends enmessages, arMessages { }

