# Logic & Query Test Answers

## Nama: Garin Caesar Syanugiri

## BATCH 19 Enigma Jakarta

---

# 1. Logic Test

### Problem: Grouping Anagrams

```javascript
function sortWord(word) {
  let chars = word.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
    }
  }
  return chars.join("");
}

function groupAnagrams(words) {
  let anagramGroups = {};

  for (let i = 0; i < words.length; i++) {
    let sortedWord = sortWord(words[i]);

    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(words[i]);
  }

  let result = [];
  for (let key in anagramGroups) {
    result.push(anagramGroups[key]);
  }

  return result;
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
```

# 2. Query Test

### Problem: Parent-Child Relationship Query

```sql
CREATE TABLE parent (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   parent_id INT
);

INSERT INTO parent (name, parent_id) VALUES
('Ilham', NULL),
('Irwan', 2),
('Arka', 3);

SELECT
    child.id,
    child.name,
    parent.name AS parent_name
FROM parent AS child
LEFT JOIN parent AS parent
ON child.parent_id = parent.id;
```
