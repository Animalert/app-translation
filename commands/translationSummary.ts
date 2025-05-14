interface translationMap {
	[key: string | number]: any
}

const baseLangID = "fr";

async function getNewTranslation(newLangID: string) {
	try {
		const newLang = await import(`../../translations/${newLangID}.ts`);
		return (newLang);
	} catch (error) {
		return (null);
	}
}

function recursivelyCountAllKeysOfObject(object: translationMap): number {
	let totalKeys = 0;
	const newKeys = Object.keys(object);
	for (const key of newKeys) {
		totalKeys++;
		const typeofValue = typeof object[key];
		if (typeofValue == "object") {
			totalKeys += recursivelyCountAllKeysOfObject(object[key]);
		}
	}
	return (totalKeys);
}

function recursivelyCountAllKeysOfMap(map: Map<string, any>): number {
	let totalKeys = 0;
	const object = Object.fromEntries(map);
	const newKeys = Object.keys(object);
	for (const key of newKeys) {
		totalKeys++;
		const typeofValue = typeof object[key];
		if (typeofValue == "object") {
			totalKeys--;
			totalKeys += recursivelyCountAllKeysOfMap(object[key]);
		}
	}
	return (totalKeys);
}

function recursivelyFindAllKeys(baseObject: translationMap, newObject: translationMap): Map<string, any> {
	const keysValuesPairs = new Map<string, any>();
	const newKeys = Object.keys(baseObject);
	for (const key of newKeys) {
		const typeofValue = typeof baseObject[key];
		if (newObject && !newObject[key]) {
			keysValuesPairs.set(key, typeofValue);
			continue ;
		}
		if (typeof newObject[key] != typeofValue) {
			keysValuesPairs.set(key, `expected type is <${typeofValue}> but got <${typeof newObject[key]}>`);
			continue ;
		}
		if (typeofValue == "object") {
			const subKeyValuesPairs = recursivelyFindAllKeys(baseObject[key], newObject[key]);
			if (subKeyValuesPairs.size == 0)
				continue ;
			keysValuesPairs.set(`sub_${key}`, subKeyValuesPairs);
		}
	}
	return (keysValuesPairs);
}

async function compareKeys(baseTranslation: translationMap, newTranslation: translationMap) {
	const keysValuesPairs = recursivelyFindAllKeys(baseTranslation, newTranslation);
	return (keysValuesPairs);
}

function generateCommentTab({
	newLangID,
	baseTranslationKeyCount,
	newTranslationRealKeyCount,
	extraKeysCount
}: {
	newLangID: string;
	baseTranslationKeyCount: number;
	newTranslationRealKeyCount: number;
	extraKeysCount: number
}) {
	const coverageInPercentage = Math.floor((newTranslationRealKeyCount / baseTranslationKeyCount) * 1000) / 10;
	return (`
| Translation | Coverage | Keys | Extra keys |
|--|--|--|--|
| ${baseLangID} (base) | 100% | ${baseTranslationKeyCount} | 0 |
| ${newLangID} (new) | ${coverageInPercentage}% | ${newTranslationRealKeyCount} | ${extraKeysCount} |
`)
}

function generateCommentsAboutKeys({
	title,
	keysMap
}: {
	title: string;
	keysMap: Map<string, any>
}) {
	return (`
<details>
<summary><h2>${title}:</h2></summary>
\n\`\`\`json\n
${JSON.stringify(keysMap, (_key, value) => (value instanceof Map ? [...value] : value), 2)}
\n\`\`\`\n
</details>
	`)
}

async function main(newLangID: string) {
	const baseTranslation = (await getNewTranslation(baseLangID))[baseLangID];
	const newTranslation = (await getNewTranslation(newLangID))[newLangID];
	if (!newTranslation)
		return console.log(`Requested translation (${newLangID}) does not exists.`);
	const missingKeys = await compareKeys(baseTranslation, newTranslation);
	const extraKeys = await compareKeys(newTranslation, baseTranslation)
	const baseTranslationKeyCount = recursivelyCountAllKeysOfObject(baseTranslation);
	const newTranslationKeyCount = recursivelyCountAllKeysOfObject(newTranslation);

	const newTranslationMissingKeyCount = recursivelyCountAllKeysOfMap(missingKeys);
	const extraKeysCount = newTranslationKeyCount + newTranslationMissingKeyCount - baseTranslationKeyCount
	const newTranslationRealKeyCount = newTranslationKeyCount - extraKeysCount;

	const commentParts: string[] = [];

	commentParts.push(`Here is a summary of the requested translation (${newLangID}): `);
	commentParts.push(generateCommentTab({newLangID, baseTranslationKeyCount, newTranslationRealKeyCount, extraKeysCount}));
	commentParts.push(generateCommentsAboutKeys({title: "Missing keys", keysMap: missingKeys}));
	commentParts.push(generateCommentsAboutKeys({title: "Extra keys", keysMap: extraKeys}));

	const comment = commentParts.join("\n\n")
	console.log(comment);
}

const translation = process.argv[2];

main(translation);
