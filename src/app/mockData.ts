export const users = [
    { id: "1", name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "2", name: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "3", name: "Charlie Brown", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "4", name: "Diana Prince", avatar: "/placeholder.svg?height=40&width=40" },
]

export const messages = [
    { id: "1", senderId: "1", receiverId: "2", content: "Hey Bob, how are you?", timestamp: "2023-06-01T10:00:00Z" },
    {
        id: "2",
        senderId: "2",
        receiverId: "1",
        content: "Hi Alice! I'm doing great, thanks for asking. How about you?",
        timestamp: "2023-06-01T10:05:00Z",
    },
    {
        id: "3",
        senderId: "1",
        receiverId: "2",
        content: "I'm good too! Just working on a new project.",
        timestamp: "2023-06-01T10:10:00Z",
    },
    {
        id: "4",
        senderId: "3",
        receiverId: "1",
        content: "Alice, do you have time for a quick call?",
        timestamp: "2023-06-01T11:00:00Z",
    },
]
