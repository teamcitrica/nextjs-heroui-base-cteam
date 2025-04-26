// To get a CSS variable value on typescript or javascript file
export function getCSSVariable(variableName: string) {
  // Get the value from the :root or any other element
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

export function getParamFromPath(path: string, paramName: string) {
  // Extraer la parte de la query (todo lo que sigue después del '?')
  const queryIndex = path.indexOf('?');
  
  if (queryIndex === -1) {
    return ""; // No hay parámetros en la URL
  }
  
  const queryString = path.substring(queryIndex + 1);
  const params = queryString.split('&');
  
  // Buscar el parámetro específico
  for (const param of params) {
    const [key, value] = param.split('=');
    if (key === paramName) {
      return decodeURIComponent(value || '');
    }
  }
  
  return ""; // Parámetro no encontrado
}