export const getMessageCounts = (messages) => ({
    totalMessages: messages.length,
    unreadMessages: messages.reduce((count, message) => message.read ? count : count + 1, 0),
    selectedMessages: messages.reduce((count, message) => message.selected ? count + 1 : count, 0)
})