// Sign Up errors
module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email"))
    errors.email = "Email incorrect ou déjà pris";

  if (err.message.includes("password"))
    errors.password = "le mot de passe doit faire 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

// Sign In errors
module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};

// Upload errors
module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format d'image incorrect (jpg, png, jpeg)";

  if (err.message.includes("max size"))
    errors.maxSize = "La taille de l'image est supérieure à 500ko";

  return errors;
};
