# Between Us 🌷

A private photo gallery app for the people who matter most. Create a personalized collection of photos and captions, then share it with a single link — no account needed to view.

<img width="700" alt="betweenus_homepage" src="https://github.com/user-attachments/assets/d9209158-c8f9-4b7c-ac1f-9baee7ee3c97" />

## Features

- Upload photos into a clean grid layout
- Add captions to each image
- View photos in an interactive lightbox
- Generate a unique shareable link for each gallery
- Anyone with the link can view — no login required

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS
- **Database & Storage:** Supabase
- **Deployment:** Vercel

## Live Demo

👉 [betweenus-gallery.vercel.app](https://betweenus-gallery.vercel.app)

<img width="700" alt="betweenus_gridview" src="https://github.com/user-attachments/assets/24ae8933-2bc2-4a3f-a4a5-a4bbf1ff4a7b" />

<img width="700" alt="betweenus_editmode" src="https://github.com/user-attachments/assets/36a3f511-a941-4794-869b-28afe6be2ec6" />

<img width="700" alt="betweenus_viewmode" src="https://github.com/user-attachments/assets/aa001da2-2241-4b7a-b248-5bd1983e1c20" />

<img width="700" alt="betweenus_share" src="https://github.com/user-attachments/assets/36debff3-281c-4b7b-a5ef-983197e25897" />

> **Note:** BetweenUs runs on Supabase's free tier, which pauses after periods of inactivity.
> If images aren't loading, the project may be waking up — try again in a few minutes!

## Mobile

Between Us is viewable on mobile devices.

<img width="300" alt="betweenus_mobile(1) " src="https://github.com/user-attachments/assets/8b5561fd-db18-4846-bcad-414630f2bc24" />

<img width="300" alt="betweenus_mobile(2) " src="https://github.com/user-attachments/assets/b6be5125-7de2-4f84-981a-5b0f12d1af30" />

## 🏃 Run Locally

```bash
git clone https://github.com/yourusername/betweenus
cd betweenus
npm install
npm run dev
```

Add a `.env` file with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
