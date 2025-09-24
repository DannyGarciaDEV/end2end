# README — Next.js + Cypress (Friendly Guide)

This project is a **Next.js** app with **Cypress** set up for end-to-end (E2E) testing. 
---



## 🚀 How to Run the App

1. clone this repo

```bash
git clone https://github.com/DannyGarciaDEV/end2end.git
```


2. cd into my-app

```bash 
cd my-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the Next.js development server:

```bash
npm run dev
```

5. Open the app in your browser:

```
http://localhost:3000
```

---

## 🧪 How to Use Cypress for E2E Testing

### 1. Open Cypress

Make sure your Next.js app is running (`npm run dev`). Then run:

```bash
npm run cypress:open
```

This opens the Cypress Test Runner. Choose **E2E Testing**, pick a browser, and select a test file to run.

### 2. Example Test

Here’s a simple test file (`cypress/e2e/example.cy.js`): I left some comments on that file too!

```javascript
describe('About Page', () => {
  it('renders the About content', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('have.text', 'About Page');
    cy.get('p').should('contain.text', 'This is another React component in Next.js.');
  });
});
```

This test visits the **page.tsx** and checks that the heading and paragraph render correctly.

### 3. Run Tests in Headless Mode

If you just want results in the terminal (useful for CI/CD):

```bash
npx cypress run
```

---

## 📂 Project Scripts (from `package.json`)

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "cypress:open": "cypress open"
}
```

---

## ✅ Quick Summary

* `npm run dev` → Start Next.js app
* `npm run cypress:open` → Open Cypress Test Runner
* Add test files in `cypress/e2e/` (see example above)
* Run tests → Cypress checks your pages automatically

That’s it! 🎉 You now have **Next.js + Cypress** ready for end-to-end testing.
# end2end
