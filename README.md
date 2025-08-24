# 🌌 Astro Journal App

A mobile journaling app that blends daily horoscopes with personal journaling.  
Users can view their horoscope, switch between zodiac signs, and maintain daily journal entries — all stored locally for offline access.

---

## ✨ Features
- 📅 **Home Screen**
  - Shows today’s date & horoscope for the selected zodiac sign  
  - Dropdown to switch zodiac signs (Aries, Taurus, etc.)  
  - Quick access button to write today’s journal  

- 📝 **Journal Screen**
  - Editable journal entry for the current date  
  - Auto-save (or explicit "Save") with **local persistence**  
  - View previously saved entries offline  

- 🔀 **Navigation**
  - Powered by **React Navigation**  
  - Two main screens: `Home` & `Journal`  

- ⚙️ **Tech**
  - **React Native** (Expo)  
  - **Redux Toolkit** (or Context API) for state management  
  - **AsyncStorage** for offline persistence  
  - **Axios / Fetch API** for horoscope API calls  

---

## 📂 Folder Structure
- src
-  /components 
-  /screens 
-  /hooks
-  /utils 
-  /store 
- App.tsx

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/astro-journal-app.git
cd astro-journal-app

npm install
# or
yarn install

npx expo start
```

🛠 Future Enhancements

-  🔔 Push notifications: “Remind me to journal”

-  📊 Journal analytics: Mood tracking & trends

-  ☁️ Cloud sync for multi-device usage

-  🎨 Dark mode & theme customization

-  🌍 Multi-language support
