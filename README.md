# Package Tracking Viewer

A simple React project that displays a list of package deliveries.  
It was built as a learning project to practice React components, state management, data fetching, and responsive layout using Bootstrap.

---

## Features

- Fetches package data from an API (Mockaroo)
- Falls back to local JSON data if the API fails
- Displays each order in a clean card format:
  - Order ID
  - Customer name
  - Phone number
  - Sender
  - Delivery status (color-coded)
  - Estimated delivery time (ETA)
  - Pickup location
- Responsive layout using Bootstrap grid:
  - 1 column on mobile
  - 2 columns on tablet
  - 3 columns on desktop

---

## Tech Stack

- React  
- Bootstrap 5 (via CDN)  
- Fetch API for data requests  
- Local JSON fallback (packagedata.json)  
- Beginner-friendly code with clear structure

---

## Project Structure

```text
package-tracking-viewer/
├── src/
│   ├── api/
│   │   └── OrdersService.js
│   ├── components/
│   │   └── OrderCard.js
│   ├── pages/
│   │   └── OrdersPage.js
│   ├── data/
│   │   └── packagedata.json
│   ├── App.js
│   └── index.js
└── public/
    └── index.html

## How to Run Locally

1. Clone or download the project:
   ```bash
   git clone https://github.com/LinneaBackgard/package-tracker-viewer.git
   ```

2. Navigate to the project folder:
   ```bash
   cd package-tracker-viewer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## Example Code

```jsx
const [orders, setOrders] = useState(null);

useEffect(() => {
  async function load() {
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (e) {
      setError("Something went wrong");
    }
  }
  load();
}, []);
```

This example shows how data is fetched asynchronously and stored in state using React hooks.

---

## Responsive Layout

Bootstrap classes in `OrdersPage.js` make the layout responsive:

```jsx
<div className="col-12 col-md-6 col-lg-4">
  <OrderCard order={o} />
</div>
```

- Mobile: 1 column  
- Tablet: 2 columns  
- Desktop: 3 columns

---

## What I Learned

- How to fetch and display data in React using `useEffect`
- How to store and update data using `useState`
- How to build a responsive grid layout with Bootstrap
- How to organize a small React app with clear components
- How to use a local data fallback for reliability

---

## Future Improvements

- Add filtering by delivery status
- Add search by customer or order ID
- Add sorting by delivery date
- Optional: Add a map to display delivery locations

---

