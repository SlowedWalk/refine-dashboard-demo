export const getNameInitials = (name: string,) => {
  const initials = name.split(' ')
    .map(word => word.charAt(0)
      .toUpperCase())
    .join('');
  const filtered = initials.replace(/[^A-Z]/g, '');
  return filtered.slice(0, 2);
}