# 📝 Contribution Guide

Thank you for contributing to Animalert translations! 🧡🐾
Our goal is to make the app accessible to as many people as possible while maintaining high linguistic quality.

## 🌍 Who Can Contribute?

Anyone can contribute, as long as they speak **at least French or English** (our reference languages).
Translations must **always be from French or English** into other languages to preserve the nuances, wordplays, and tone of the project.

## 📂 File Format

- All translations are in **TypeScript (.ts) format**.
- Each file contains objects with **keys in English** and **translated values**.
- Files are organized by language in the `translations/` folder:
```
translations/
├── en.ts # English translation
├── fr.ts # French translation
├── es.ts # Spanish translations (example)
└── ... # More languages coming soon
```


## ✍️ Translation Guidelines

- ✔ **Keep the keys unchanged**; only translate the values.
- ✔ **Keep the keys in the same order**; thank you for understanding.
- ✔ **Keep the functions parameters unchanged**; only translate the values.
- ✔ **Maintain spaces and punctuation**: if a source string ends with a space ("foo "), **the space must be preserved**. If you think it’s a mistake, open an issue.
- ✔ **Use the same tone and register** as the French version.
- ✔ **Preserve wordplays and nuances** as much as possible. If an adaptation is needed, add a comment in the file to explain the change.
- ✔ **Feel free to use inclusive writing** 🧡

## 🔄 How to Contribute?

### ➕ Adding a New Language

1. **Open an issue** to propose adding a new language.
2. If an issue already exists, **announce your willingness to help** to avoid duplicate work.
3. Once a partial or complete translation is done, **submit a Pull Request (PR)**.

### 🔄 Updating an Existing Translation

1. Submit a PR with the proposed modifications.
2. Add a comment if you had to adapt a phrase to explain your choice.

💡 All translations are merged after validation but will only be integrated into the app after verification by the Animalert team.

## ✅ Validation Process

- PRs are **reviewed as soon as possible** by the Animalert team or contributors.
- For languages we do not master, we require **at least 3 approved reviews** before merging.
- Once a PR is submitted, we try to find someone in our network for a quick extra check.

## 🔍 Best Practices

- 🔹 Check **TypeScript syntax** before submitting.
- 🔹 Highlight **important changes** with a comment in the file.
- 🔹 Ensure **consistency** with existing translations.

## 📢 Where to Ask Questions?

You can ask questions:
- 📌 **In our GitHub discussion**
- 📝 **In an issue**
- 💬 **On our [Discord](https://discord.gg/tNNkazbb7G)**

Thank you for your valuable help! ❤️🐾
