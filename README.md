# 🌌 Astro Journal App

A mobile journaling app that blends daily horoscopes with personal journaling.  
Users can view their horoscope, switch between zodiac signs, and maintain daily journal entries — all stored locally for offline access.

---


https://github.com/user-attachments/assets/c049558b-08ab-4aa6-8490-6a9cb3449994


https://github.com/user-attachments/assets/0c312d16-2145-4182-8373-07040af8994b


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
git clone https://github.com/matrix-sagar/astro-culture.git
cd astro-journal-app

npm install
# or
yarn install

npx run start
```

🛠 Future Enhancements

-  🔔 Push notifications: “Remind me to journal”

-  📊 Journal analytics: Mood tracking & trends

-  ☁️ Cloud sync for multi-device usage

-  🎨 Dark mode & theme customization

-  🌍 Multi-language support

-  ✋🏻 Palm Reading with optical recognition leveraging MLKit on Android and Core ML on IOS 
