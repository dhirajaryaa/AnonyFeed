# AnonyFeed 📝🔒  
**Anonymous Feedback & AI-Powered Message Suggestions**  

AnonyFeed is a **MERN-based** anonymous feedback app where users can generate a **unique link** to collect feedback. Anyone with the link can send **anonymous messages**, and AI provides **message improvement suggestions** before submission. Secure, simple, and efficient!

---

## 🚀 Features

### **1️⃣ Feedback Link Generation**
- Users can **generate a unique link** (e.g., `anonyfeed.com/user123`).
- Share the link via social media, email, or QR code.

### **2️⃣ Anonymous Feedback Submission**
- **No authentication required** – anyone can send feedback!
- AI **suggests message improvements** before submission.
- Choose between **original message** or **AI-enhanced message**.

### **3️⃣ Feedback Management Dashboard**
- Link owners can **view all received messages**.
- AI-powered **sentiment analysis** (positive/neutral/negative).
- **Reply anonymously** (optional).

### **4️⃣ AI-Powered Features**
- **AI suggests improvements** to feedback before sending.
- AI **analyzes received messages** to summarize key points.
- AI-generated **reply suggestions** for quick responses.

### **5️⃣ Security & Spam Protection**
- **Zod validation** to filter invalid input.
- **Rate limiting** to prevent spam attacks.
- **CAPTCHA (optional)** to block bots.

---

## 🛠 Tech Stack

### **Frontend:**
✅ React + Vite + TailwindCSS (ShadCN UI)  
✅ Zustand/Redux (for state management)  
✅ React Query (for data fetching)  

### **Backend:**
✅ Node.js + Express.js  
✅ MongoDB (Mongoose)  
✅ Firebase/Appwrite (for optional authentication)  
✅ Zod (input validation)  

### **AI Services:**
✅ OpenAI API (for message suggestions)  
✅ Hugging Face (for sentiment analysis)  

### **Deployment:**
✅ **Frontend:** Vercel  
✅ **Backend:** Railway/Render  
✅ **Database:** MongoDB Atlas  

---

## 🎨 UI Design (Color Scheme Based on ShadCN UI)

| Color Type   | Tailwind Class  | Hex Code |
|-------------|---------------|----------|
| **Primary** | `blue-500` | `#3B82F6` |
| **Background** | `gray-950` | `#09090B` |
| **Card Background** | `gray-900` | `#18181B` |
| **Text** | `gray-50` | `#F9FAFB` |
| **Success** | `green-500` | `#22C55E` |
| **Error** | `red-500` | `#EF4444` |
| **Warning** | `yellow-500` | `#FACC15` |

---

## 📌 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/anonyfeed-plus.git
cd anonyfeed-plus
```

### **2️⃣ Install Dependencies**
```bash
pnpm install  # OR npm install
```

### **3️⃣ Start Development Server**
#### **Frontend**
```bash
pnpm dev  # Starts Vite React app
```

#### **Backend**
```bash
pnpm start  # Starts Express server
```

---

## 🌍 Deployment

### **Frontend Deployment (Vercel)**
```bash
vercel deploy
```

### **Backend Deployment (Railway/Render)**
```bash
git push railway main  # Push to Railway for auto-deploy
```

---

## 🤝 Contributing
Pull requests are welcome! Feel free to **fork** the repo and submit changes. 🚀

---

## 📜 License
MIT License - Free for personal & commercial use.

---

### **📧 Contact**
💬 Have feedback? [Send an anonymous message!](https://anonyfeed.com/yourusername)
