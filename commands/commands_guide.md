## Commands guide :

for any of the below commands make sure to run `npm install` after cloning the repository to download all packages !

### 1. translationSummary (/trSum [locale]) :

**description** : The command is meant to be ran in a PR to check the coverage of the new translation contribution compared to the reference language (`fr`).

**testing locally** :

1. replace the translation import path :

change this line :
```diff
-const newLang = await import(`../../translations/${newLangID}.ts`);
+const newLang = await import(`../translations/${newLangID}.ts`);
```

2. run the command with an existing translation :
```
npx tsx ./commands/translationSummary.ts en
```
you can run it from the root directory :)
