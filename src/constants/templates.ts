export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "plan de projet",
    label: "Plan de Projet",
    imageUrl: "/business-letter.svg",
    initialContent: `<h1>Plan de Projet</h1>
<h2>Objectifs</h2>
<ul>
<li><strong>Objectif principal :</strong> Décrire en une phrase concise le but global du projet.</li>
<li><strong>Objectifs spécifiques :</strong><ul>
<li>Objectif 1 : [Détail spécifique].</li>
<li>Objectif 2 : [Détail spécifique].</li>
<li>Objectif 3 : [Détail spécifique].</li>
</ul>
</li>
</ul>
<h2 id="-tapes-cl-s">Étapes Clés</h2>
<ol>
<li><p><strong>Phase de lancement :</strong></p>
<ul>
<li>Définir les besoins.</li>
<li>Valider les parties prenantes.</li>
<li>Élaborer un cahier des charges.</li>
</ul>
</li>
<li><p><strong>Phase de planification :</strong></p>
<ul>
<li>Identifier les tâches principales.</li>
<li>Créer un calendrier détaillé.</li>
<li>Allouer les ressources nécessaires.</li>
</ul>
</li>
<li><p><strong>Phase d’exécution :</strong></p>
<ul>
<li>Déployer les ressources et démarrer les activités.</li>
<li>Superviser l’avancement.</li>
<li>Assurer une communication régulière entre les parties prenantes.</li>
</ul>
</li>
<li><p><strong>Phase de clôture :</strong></p>
<ul>
<li>Évaluer les résultats par rapport aux objectifs.</li>
<li>Documenter les leçons apprises.</li>
<li>Clôturer le projet officiellement.</li>
</ul>
</li>
</ol>
<p></p>
<div data-type="space" contenteditable="false" style="pointer-events: none;"></div>
<h2 id="-ch-ancier">Échéancier</h2>
<table>
<thead>
<tr>
<th>Étape</th>
<th>Date de début</th>
<th>Date de fin</th>
<th>Responsable</th>
</tr>
</thead>
<tbody>
<tr>
<td>Phase de lancement</td>
<td>[Date]</td>
<td>[Date]</td>
<td>[Nom/Équipe]</td>
</tr>
<tr>
<td>Phase de planification</td>
<td>[Date]</td>
<td>[Date]</td>
<td>[Nom/Équipe]</td>
</tr>
<tr>
<td>Phase d’exécution</td>
<td>[Date]</td>
<td>[Date]</td>
<td>[Nom/Équipe]</td>
</tr>
<tr>
<td>Phase de clôture</td>
<td>[Date]</td>
<td>[Date]</td>
<td>[Nom/Équipe]</td>
</tr>
</tbody>
</table>
<h2 id="ressources-n-cessaires">Ressources Nécessaires</h2>
<ul>
<li><strong>Humaines :</strong><ul>
<li>[Liste des personnes ou équipes impliquées].</li>
</ul>
</li>
<li><strong>Matérielles :</strong><ul>
<li>[Liste des outils, équipements, logiciels, etc.].</li>
</ul>
</li>
<li><strong>Financières :</strong><ul>
<li>Budget estimé : [Montant].</li>
</ul>
</li>
</ul>
<h2 id="risques-et-solutions">Risques et Solutions</h2>
<table>
<thead>
<tr>
<th>Risque potentiel</th>
<th>Impact</th>
<th>Probabilité</th>
<th>Solution proposée</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Risque 1]</td>
<td>Élevé/Moyen/Faible</td>
<td>Élevée/Moyenne/Faible</td>
<td>[Plan de mitigation].</td>
</tr>
<tr>
<td>[Risque 2]</td>
<td>Élevé/Moyen/Faible</td>
<td>Élevée/Moyenne/Faible</td>
<td>[Plan de mitigation].</td>
</tr>
<tr>
<td>[Risque 3]</td>
<td>Élevé/Moyen/Faible</td>
<td>Élevée/Moyenne/Faible</td>
<td>[Plan de mitigation].</td>
</tr>
</tbody>
</table>
<h2 id="conclusion">Conclusion</h2>
<ul>
<li>Résumer les attentes principales.</li>
<li>Mentionner les prochaines étapes immédiates.</li>
<li>Indiquer les informations de contact pour toute question ou suivi.</li>
</ul>
    `,
  },
  {
    id: "compte rendu reunion",
    label: "Compte Rendu de Réunion",
    imageUrl: "/cover-letter.svg",
    initialContent: `<h1 id="compte-rendu-de-r-union">Compte-rendu de Réunion</h1>
<h2 id="date-et-heure">Date et Heure</h2>
<ul>
<li><strong>Date :</strong> [Insérer la date]</li>
<li><strong>Heure :</strong> [Insérer l’heure]</li>
</ul>
<h2 id="participants">Participants</h2>
<ul>
<li>[Nom 1] – [Rôle ou fonction]</li>
<li>[Nom 2] – [Rôle ou fonction]</li>
<li>[Nom 3] – [Rôle ou fonction]</li>
<li>[Autres participants, si applicable]</li>
</ul>
<h2 id="ordre-du-jour">Ordre du Jour</h2>
<ol>
<li>[Point 1 : Sujet abordé]</li>
<li>[Point 2 : Sujet abordé]</li>
<li>[Point 3 : Sujet abordé]</li>
</ol>
<h2 id="discussions">Discussions</h2>
<h3 id="point-1-sujet-">Point 1 : [Sujet]</h3>
<ul>
<li>[Résumé des discussions ou décisions prises]</li>
<li>[Problèmes ou questions soulevées]</li>
</ul>
<h3 id="point-2-sujet-">Point 2 : [Sujet]</h3>
<ul>
<li>[Résumé des discussions ou décisions prises]</li>
<li>[Problèmes ou questions soulevées]</li>
</ul>
<h3 id="point-3-sujet-">Point 3 : [Sujet]</h3>
<ul>
<li>[Résumé des discussions ou décisions prises]</li>
<li>[Problèmes ou questions soulevées]</li>
</ul>
<h2 id="actions-entreprendre">Actions à Entreprendre</h2>
<table>
<thead>
<tr>
<th>Action</th>
<th>Responsable</th>
<th>Échéance</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Action 1]</td>
<td>[Nom/Équipe]</td>
<td>[Date]</td>
</tr>
<tr>
<td>[Action 2]</td>
<td>[Nom/Équipe]</td>
<td>[Date]</td>
</tr>
<tr>
<td>[Action 3]</td>
<td>[Nom/Équipe]</td>
<td>[Date]</td>
</tr>
</tbody>
</table>
<h2 id="prochaine-r-union">Prochaine Réunion</h2>
<ul>
<li><strong>Date proposée :</strong> [Insérer la date]</li>
<li><strong>Sujet principal :</strong> [Indiquer le sujet ou les objectifs de la prochaine réunion]</li>
</ul>
<h2 id="remarques-suppl-mentaires">Remarques Supplémentaires</h2>
<ul>
<li>[Ajouter tout commentaire ou information pertinente supplémentaire].</li>
</ul>

    `,
  },
  {
    id: "rapport projet",
    label: "Rapport de Projet",
    imageUrl: "/letter.svg",
    initialContent: `<h1 id="rapport-d-activit-mensuel">Rapport d’Activité Mensuel</h1>
<h2 id="r-sum-">Résumé</h2>
<ul>
<li><strong>Période couverte :</strong> [Insérer la période, ex. janvier 2024]</li>
<li><strong>Résumé général :</strong><ul>
<li>[Brève description des principales activités réalisées].</li>
<li>[Mise en avant des faits marquants].</li>
</ul>
</li>
</ul>
<h2 id="r-sultats-cl-s">Résultats Clés</h2>
<ul>
<li><strong>Objectifs atteints :</strong><ul>
<li>[Objectif 1 et résultats associés].</li>
<li>[Objectif 2 et résultats associés].</li>
<li>[Objectif 3 et résultats associés].</li>
</ul>
</li>
<li><strong>Indicateurs de performance (KPI) :</strong>
| Indicateur            | Résultat      | Objectif fixé |
|-----------------------|---------------|---------------|
| [KPI 1]              | [Résultat]    | [Objectif]    |
| [KPI 2]              | [Résultat]    | [Objectif]    |
| [KPI 3]              | [Résultat]    | [Objectif]    |</li>
</ul>
<h2 id="d-fis-rencontr-s">Défis Rencontrés</h2>
<ul>
<li><p><strong>Défi 1 :</strong></p>
<ul>
<li>Description : [Description du défi].</li>
<li>Impact : [Impact sur les résultats ou les projets].</li>
<li>Solution apportée : [Solution mise en place ou envisagée].</li>
</ul>
</li>
<li><p><strong>Défi 2 :</strong></p>
<ul>
<li>Description : [Description du défi].</li>
<li>Impact : [Impact sur les résultats ou les projets].</li>
<li>Solution apportée : [Solution mise en place ou envisagée].</li>
</ul>
</li>
</ul>
<h2 id="projets-en-cours">Projets en Cours</h2>
<table>
<thead>
<tr>
<th>Projet</th>
<th>Avancement</th>
<th>Responsable</th>
<th>Prochaines étapes</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Nom du projet 1]</td>
<td>[Statut]</td>
<td>[Nom/Équipe]</td>
<td>[Étapes à venir]</td>
</tr>
<tr>
<td>[Nom du projet 2]</td>
<td>[Statut]</td>
<td>[Nom/Équipe]</td>
<td>[Étapes à venir]</td>
</tr>
<tr>
<td>[Nom du projet 3]</td>
<td>[Statut]</td>
<td>[Nom/Équipe]</td>
<td>[Étapes à venir]</td>
</tr>
</tbody>
</table>
<h2 id="prochaines-tapes">Prochaines Étapes</h2>
<ul>
<li><strong>Priorités pour le mois suivant :</strong><ul>
<li>[Tâche ou objectif 1].</li>
<li>[Tâche ou objectif 2].</li>
<li>[Tâche ou objectif 3].</li>
</ul>
</li>
<li><strong>Ressources nécessaires :</strong><ul>
<li>[Description des besoins spécifiques].</li>
</ul>
</li>
</ul>
<h2 id="remarques-suppl-mentaires">Remarques Supplémentaires</h2>
<ul>
<li>[Ajout de tout autre commentaire ou information pertinente].</li>
</ul>

    `,
  },
  {
    id: "lettre motivation",
    label: "Lettre de Motivation",
    imageUrl: "/project-proposal.svg",
    initialContent: `<h1 id="lettre-de-motivation">Lettre de Motivation</h1>
<h2 id="en-t-te">En-tête</h2>
<p>[Prénom Nom]<br>[Adresse complète]<br>[Numéro de téléphone]<br>[Adresse e-mail]<br>[Date]</p>
<p>[Nom de l&#39;entreprise ou de l&#39;organisation]<br>[Adresse complète]<br>[Nom du recruteur (si connu)]</p>
<h2 id="introduction">Introduction</h2>
<p>[Préciser le poste pour lequel vous postulez, comment vous avez découvert l’offre, et une phrase d’accroche qui montre votre enthousiasme.]</p>
<p>Exemple :<br>C&#39;est avec un grand enthousiasme que je postule pour le poste de [titre du poste] au sein de [nom de l&#39;entreprise], dont les valeurs et les projets correspondent parfaitement à mes aspirations professionnelles.</p>
<h2 id="exp-rience-et-comp-tences">Expérience et Compétences</h2>
<p>[Mettez en avant votre parcours professionnel ou académique pertinent pour le poste, ainsi que vos compétences clés.]</p>
<ul>
<li><p><strong>Expérience professionnelle :</strong></p>
<ul>
<li>[Poste occupé], [Nom de l&#39;entreprise], [Dates] : [Description des missions principales et des résultats obtenus].</li>
<li>[Poste occupé], [Nom de l&#39;entreprise], [Dates] : [Description des missions principales et des résultats obtenus].</li>
</ul>
</li>
<li><p><strong>Compétences clés :</strong></p>
<ul>
<li>[Compétence 1] : [Explication ou exemple de mise en œuvre].</li>
<li>[Compétence 2] : [Explication ou exemple de mise en œuvre].</li>
<li>[Compétence 3] : [Explication ou exemple de mise en œuvre].</li>
</ul>
</li>
</ul>
<h2 id="motivations">Motivations</h2>
<p>[Expliquez pourquoi vous souhaitez rejoindre cette entreprise et ce que vous pouvez apporter au poste. Mettez en avant vos valeurs communes ou votre vision.]</p>
<p>Exemple :<br>Rejoindre [nom de l&#39;entreprise] représente pour moi une opportunité unique de contribuer à [objectif ou mission de l&#39;entreprise]. Grâce à ma passion pour [domaine ou compétence], je suis convaincu(e) de pouvoir apporter une réelle valeur ajoutée à votre équipe.</p>
<h2 id="conclusion-avec-appel-l-action">Conclusion avec Appel à l’action</h2>
<p>[Terminez sur une note positive et proactive, en invitant le recruteur à vous contacter pour un entretien.]</p>
<p>Exemple :<br>Je serais ravi(e) de pouvoir échanger avec vous au sujet de mes compétences et de ma vision pour ce poste. Je reste à votre disposition pour un entretien à votre convenance. Dans l’attente de votre retour, je vous remercie pour l’attention portée à ma candidature.</p>
<p><strong>Formule de politesse :</strong>
Je vous prie d&#39;agréer, [Madame/Monsieur], l&#39;expression de mes salutations distinguées.</p>
<p>[Signature manuscrite ou électronique]</p>

    `,
  },
];
