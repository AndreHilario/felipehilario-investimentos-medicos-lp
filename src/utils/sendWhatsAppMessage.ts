export const generateWhatsappLink = (phone: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message.trim());
  const cleanPhone = phone.replace(/\D/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
