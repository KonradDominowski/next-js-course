# Caching fetcha

Gdy wykonamy fetch na statyczny adres URL, NextJS zapisze dane, aby nie wykonywać tego samego fetcha ponownie. Aby nie cachować danych, trzeba dodać do fetcha następujący kod:

```tsx
const res = await fetch(url, { cache: "no-store" });
```

# Layout

Plik `layout.tsx` będzie renderowany dla wszystkich dzieci, dlatego warto w nim zamieścić ta komponenty jak **nawigacja** czy **stopka**.
