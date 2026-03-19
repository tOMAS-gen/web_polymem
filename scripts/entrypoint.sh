#!/bin/sh
# Reemplaza placeholders de variables NEXT_PUBLIC_* en los archivos del build
# con los valores reales del environment en runtime.

set -e

echo "Configurando variables de entorno..."

NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://www.polymemaislaciones.com.ar}"

# Reemplazar en todos los archivos JS del build standalone
find /app/.next/static /app/.next/server -type f -name "*.js" 2>/dev/null | while read file; do
  sed -i "s|__NEXT_PUBLIC_SITE_URL__|${NEXT_PUBLIC_SITE_URL}|g" "$file"
done

echo "NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}"
echo "Iniciando servidor Next.js..."

exec node server.js
