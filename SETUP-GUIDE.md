# 🚀 How to Publish Your Profile to GitHub

Here are the exact 3 steps to activate your world-class GitHub Profile:

---

### Step 1: Create the Special Profile Repository on GitHub

1. Open your browser and go to: **[github.com/new](https://github.com/new)**
2. In the **Repository name** field, type your exact GitHub username: `oye-rahul`
   - *GitHub will display a green banner saying: "✨ You found a secret! oye-rahul/oye-rahul is a special repository that you can use to add a README.md to your GitHub profile."*
3. Make sure the repository is set to **Public**.
4. Leave "Add a README file" **unchecked** (we already have our custom one prepared).
5. Click **Create repository**.

---

### Step 2: Push These Files to Your New Repository

In your terminal or PowerShell inside this directory (`c:\Users\malvi\Documents\profile-github`), run:

```bash
git init
git add .
git commit -m "feat: world-class GitHub profile README & snake workflow"
git branch -M main
git remote add origin https://github.com/oye-rahul/oye-rahul.git
git push -u origin main
```

---

### Step 3: Enable the Contribution Snake Workflow

1. Go to your new repository on GitHub: `https://github.com/oye-rahul/oye-rahul`
2. Click on **Settings** (top navigation bar).
3. In the left sidebar, click **Actions** ➔ **General**.
4. Scroll down to **Workflow permissions**:
   - Select **"Read and write permissions"**
   - Click **Save**.
5. Click on the **Actions** tab at the top of the repository.
6. Under workflows on the left, click **Generate Contribution Snake**.
7. Click **Run workflow** ➔ **Run workflow**.

> ⏳ *Within 30 seconds, the GitHub Action will generate `github-contribution-grid-snake.svg` and push it to the `output` branch. The animated snake will now slither across your GitHub profile, updating every 24 hours automatically!*

---

### 🎨 How to Preview Locally
You can double-click `preview.html` in your file explorer to immediately see the styled profile inside your web browser!
