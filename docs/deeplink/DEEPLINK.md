# PARA TESTAR O DEEPLINK

- ❯ npx uri-scheme open "parking://" --android
- ❯ npx uri-scheme open "parking://" --ios

# Abrir home passando o codigo do ticket

- npx uri-scheme open "parking://deeplink/:ticketCode" --android
- ex: npx uri-scheme open "parking://deeplink/0876dc80-c3b5-4896-ae2f-f73e5aa7742f" --android
