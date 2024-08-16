#!/bin/bash

# Récupère le dernier tag
last_tag=$(git describe --tags --abbrev=0)

# Vérifier le dernier tag
echo "Dernier tag : $last_tag"

# Génère le changelog depuis le dernier tag
git log $last_tag..HEAD --pretty=format:"- %s (%h)" > CHANGELOG_RAW

# Vérifier si des commits ont été trouvés
if [ ! -s CHANGELOG_RAW ]; then
  echo "Aucun commit trouvé depuis le dernier tag."
  exit 1
fi

# Remplacer les types de commit par leur icône correspondante
sed -i '' "s/^fix/🔧 fix/g; s/^feat/✨ feat/g; s/^chore/🔖 update/g; s/^refactor/♻️ refactor/g; s/^docs/📝 docs/g; s/^style/💄 style/g; s/^test/✅ test/g" CHANGELOG_RAW

# Renommer le fichier final
mv CHANGELOG_RAW CHANGELOG

echo "Changelog généré dans le fichier CHANGELOG"
