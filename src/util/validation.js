export function isEmpty(string) {
  return string.trim() === "";
}

export function invalidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { email: "Please enter a valid email." };
  }
}

export function invalidCardNumber(cardNumber) {
  const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|5078\d{12})$/;
  if (!cardRegex.test(cardNumber)) {
    return {
      card_number: "Please enter a valid card number.",
    };
  }
}

export function belowMinLength(identifier, fieldName, string, min) {
  if (string.trim().length < min) {
    return {
      [identifier]: `${fieldName} must be at least ${min} characters long.`,
    };
  }
}

export function hasEmptyFields(object) {
  return Object.fromEntries(
    Object.entries(object)
      .filter(
        ([key, value]) => typeof value === "string" && value.trim() === ""
      )
      .map(([key]) => [key, "Field required."])
  );
}
