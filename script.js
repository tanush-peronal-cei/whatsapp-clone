const chatList = document.getElementById("chat-list")
const chatMessages = document.getElementById("chat-messages")
const messageInput = document.querySelector("#message-input input")
const sendButton = document.getElementById("send-button")
const contactName = document.getElementById("contact-name")
const profileHeader = document.getElementById("profile-header")

const contacts = [
  { name: "Tanush", lastMessage: "Complete the algorithm", img: "./assets/profile-picture/tanush.jpg" },
  { name: "Cooper", lastMessage: "Can we meet inside blackhole?", img: "./assets/profile-picture/cooper.jpg" },
  { name: "Thanos", lastMessage: "I wanna kill 50% of all population", img: "./assets/profile-picture/thanos.webp" },
]

contacts.forEach((contact) => {
  const chatItem = document.createElement("div")
  chatItem.className = "chat-item"
  chatItem.innerHTML = `
        <img src="${contact.img}" alt="${contact.name}" class="avatar">
        <div>
            <div>${contact.name}</div>
            <div class="last-message">${contact.lastMessage}</div>
        </div>
    `
  chatItem.addEventListener("click", () => selectContact(contact))
  chatList.appendChild(chatItem)
})

function selectContact(contact) {
  contactName.textContent = contact.name
  profileHeader.src = contact.img
  profileHeader.alt = contact.name
  chatMessages.innerHTML = ""
}

// Send message functionality
function sendMessage() {
  const message = messageInput.value.trim()
  if (message) {
    const messageElement = document.createElement("div")
    messageElement.className = "message sent"
    messageElement.textContent = message
    chatMessages.appendChild(messageElement)
    messageInput.value = ""
    chatMessages.scrollTop = chatMessages.scrollHeight
  }
}

sendButton.addEventListener("click", sendMessage)
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage()
  }
})

