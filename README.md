# Kopi Banyuatis

Landing page untuk brand kopi lokal Bali, **Kopi Banyuatis**, yang menampilkan profil brand, produk, testimoni, dan ajakan pemesanan melalui WhatsApp.

## Fitur Utama

- Hero section dengan CTA langsung ke WhatsApp.
- Informasi brand dan nilai produk kopi.
- Daftar produk (Arabika dan Robusta) lengkap dengan detail rasa.
- Testimoni pelanggan untuk meningkatkan kepercayaan.
- Tampilan responsif dengan desain modern.

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [react-icons](https://react-icons.github.io/react-icons/)

## Menjalankan Project Secara Lokal

### 1. Install dependency

```bash
npm install
```

### 2. Jalankan server development

```bash
npm run dev
```

### 3. Buka di browser

Kunjungi [http://localhost:3000](http://localhost:3000).

## Script yang Tersedia

- `npm run dev` - Menjalankan mode development.
- `npm run build` - Build aplikasi untuk production.
- `npm run start` - Menjalankan hasil build production.
- `npm run lint` - Menjalankan pengecekan ESLint.

## Struktur Folder Singkat

```text
kopi-banyuatis/
|- app/
|  |- layout.tsx
|  |- page.tsx
|  |- globals.css
|- components/
|  |- Hero.tsx
|  |- About.tsx
|  |- Features.tsx
|  |- Products.tsx
|  |- Testimonials.tsx
|  |- CTA.tsx
|  |- Footer.tsx
|- public/
|- package.json
```

## Catatan

- Nomor WhatsApp saat ini masih hardcoded di beberapa komponen (`Hero` dan `Products`).
- Disarankan dipindahkan ke environment variable agar lebih mudah dikelola.
