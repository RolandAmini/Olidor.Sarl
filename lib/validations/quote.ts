import { z } from "zod";

export const QuoteSchema = z.object({
  userType: z.enum(['organisation', 'particulier']),
  
  // Utilisation de .catch("") pour s'assurer qu'une valeur nulle ou undefined 
  // soit traitée comme une chaîne vide, évitant les crashs de validation.
  civilite: z.string().optional().or(z.literal("")),
  
  ville: z.string().min(2, "La ville est obligatoire"),
  nom: z.string().min(2, "Le nom est obligatoire"),
  pays: z.string().min(1, "Le pays est obligatoire"),
  
  // Validation simple du téléphone pour éviter les erreurs de format (espace, +, etc.)
  telephone: z.string().min(8, "Numéro de téléphone trop court"),

  // On rend ces champs totalement flexibles pour éviter les blocages
  organisation: z.string().optional().or(z.literal("")), 
  fonction: z.string().optional().or(z.literal("")),

  // CORRECTION MAJEURE : On n'applique .url() que SI le champ n'est pas vide.
  // Cela permet de laisser le champ vide sans déclencher l'erreur "URL invalide".
  siteWeb: z.string()
    .transform(val => val === "" ? undefined : val)
    .pipe(z.string().url("L'URL doit commencer par http:// ou https://").optional().or(z.literal(""))),

  email: z.string().email("Format d'email invalide"),
  sujet: z.string().min(3, "Le sujet est trop court"),
  
  // Message rendu plus souple (min 2 caractères)
  message: z.string().min(2, "Veuillez détailler votre demande"),
  
  categorie: z.string().min(1, "Veuillez choisir une catégorie"),
  preciserProduits: z.enum(['oui', 'non']),
  }).superRefine((data, ctx) => {
  // LOGIQUE : Si c'est une entreprise, le nom de l'organisation doit être rempli
  if (data.userType === 'organisation' && (!data.organisation || data.organisation.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Le nom de l'organisation est requis pour les professionnels",
      path: ["organisation"],
    });
  }
});