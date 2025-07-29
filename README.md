# 🚀 BFHL API Project

A RESTful POST API developed using Node.js & Express.js to process input data and categorize elements into numbers, alphabets, and special characters, as per the **Chitkara Full Stack Assessment**.

---

## 📚 Objective

Build and host a POST API at the `/bfhl` route that accepts an array of strings and returns:

- ✅ Operation status
- 🆔 User ID (in format `lowercase_fullname_ddmmyyyy`)
- 📧 Email ID
- 🎓 College Roll Number
- 🔢 Even Numbers
- 🔢 Odd Numbers
- 🔠 Uppercase Alphabets
- 💠 Special Characters
- ➕ Sum of all numbers (as string)
- 🔤 Concatenated alphabets in reverse order with alternating caps

---

## 🛠 Tech Stack

| Component     | Details         |
|---------------|-----------------|
| Language       | Node.js |
| Framework      | Express.js      |
| Hosting        | Vercel |
| Source Control | GitHub (Public Repo) |

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/bfhl-api.git
cd bfhl-api
npm install
node index.js