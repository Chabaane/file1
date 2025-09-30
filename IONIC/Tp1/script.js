const categoriesConfig = {
    alimentation: { emoji: "🍏", label: "Alimentation", class: "category-alimentation" },
    transport: { emoji: "🚌", label: "Transport", class: "category-transport" },
    loisirs: { emoji: "🎮", label: "Loisirs", class: "category-loisirs" },
    sante: { emoji: "⚕", label: "Santé", class: "category-sante" },
    education: { emoji: "📚", label: "Éducation", class: "category-education" },
    autres: { emoji: "✨", label: "Autres", class: "category-autres" }
  };
  
  const btnAjouter = document.getElementById("btn-ajouter");
  const btnReset = document.getElementById("btn-reset");
  const listeDepenses = document.getElementById("liste-depenses");
  const totalElement = document.getElementById("total");
  
  let total = 0;
  
  btnAjouter.addEventListener("click", () => {
    const intitule = document.getElementById("intitule").value;
    const montant = parseFloat(document.getElementById("montant").value);
    const categorie = document.getElementById("categorie").value;
  
    if (!intitule || isNaN(montant) || !categorie) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  
    const config = categoriesConfig[categorie];
  
    // Créer un élément de dépense
    const item = document.createElement("div");
    item.classList.add("expense-item");
    item.innerHTML = `
      <div class="expense-left">
        <span class="category-badge ${config.class}">${config.emoji} ${config.label}</span>
        <span>${intitule} : ${montant}€</span>
      </div>
      <span class="delete-btn">✖</span>
    `;
  
    // Ajouter à la liste
    listeDepenses.appendChild(item);
  
    // Mettre à jour le total
    total += montant;
    totalElement.textContent = `Total des dépenses : ${total}€`;
  
    // Supprimer une dépense
    item.querySelector(".delete-btn").addEventListener("click", () => {
      listeDepenses.removeChild(item);
      total -= montant;
      totalElement.textContent = `Total des dépenses : ${total}€`;
    });
  
    // Réinitialiser les champs
    document.getElementById("intitule").value = "";
    document.getElementById("montant").value = "";
    document.getElementById("categorie").value = "";
  });
  
  btnReset.addEventListener("click", () => {
    document.getElementById("intitule").value = "";
    document.getElementById("montant").value = "";
    document.getElementById("categorie").value = "";
  });
  