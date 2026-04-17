# SRTtrail.dev | Local Business Web Discovery Tool

An interactive, client-facing web application designed to help local businesses scope out their digital needs. Built by SRTtrail.dev, this tool replaces boring, static forms with an engaging 4-step wizard that dynamically visualizes the client's project focus areas.

### 🌟 Features

- Interactive 4-Step Wizard: Guides local business owners through their contact info, business goals, feature priorities, and launch timeline without overwhelming technical jargon.

- Top 5 Priorities Logic: A custom checklist that limits users to selecting their top 5 core features, forcing them to prioritize what matters most.

- Dynamic Scope Visualization: Renders a responsive radar chart (Chart.js) to visualize the project's major focus areas.

- Auto-Save Progress: Utilizes browser localStorage to save user input on every keystroke. Clients can close the tab and return later without losing their progress.

- Early Lead Capture Foundation: Built-in logic to fire a backend webhook the moment a user completes Step 1 (Contact Info), ensuring you capture the lead even if they abandon the rest of the form.

- Final Scope Submission: Users can submit their completed discovery scope directly from the results panel.

- Celebration UI: Lightweight confetti effect on successful completion.

### 🛠️ Tech Stack

This project is built to be ultra-lightweight and serverless. There are no build tools or complicated setups required.

- HTML5

- Vanilla JavaScript (ES6+)

- Modular CSS3 (BEM architecture in `stylesheet/block/`)

- Chart.js + canvas-confetti for visualization and celebration

- Cloudflare Worker + Resend (early lead email capture)

### 🚀 Getting Started

- Clone or Download this repository/folder.

- Open the index.html file directly in any modern web browser (Chrome, Safari, Firefox, Edge).

- That's it! The application runs entirely in the browser.

### ⚙️ Customization & Next Steps

- Update Branding Assets: Replace files in `assets/` such as the logo, avatar, and Open Graph image.

- Update Lead Endpoint (Optional): In `assets/js/app.js`, edit `LEAD_ENDPOINT` if your Worker URL changes.

- Backend Worker Source: The Worker implementation is in `cloudflare-worker/src/index.js` with `cloudflare-worker/wrangler.toml` for deployment.

### 👨‍💻 Author

SRTtrail.dev
Supporting Local Businesses with Digital Homes.
