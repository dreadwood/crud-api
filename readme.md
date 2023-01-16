# CRUD API

Простой CRUD API, использует базу данных in-memory.

- [Assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)
- [Scoring](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/score.md)

## Разработка

Для разработки необходим [Node.JS 18](https://nodejs.org/en/). Сервер разрабатываеться на встроенных модуле `http`, на typescript с минимальным колличеством библиотек. Проект придерживаеться дефолтных код-гайдов для typescript [XO](https://github.com/xojs/xo). После внесения правок необходимо открыть pull request.
## Команды

- `start:prod` — запуск сервера
- `start:dev` — запуск в режиме разработки (автоматическая перезагрузка при изменении файлов в директории `src`)
- `eslint` — линтинг typescript файлов 
- `eslint:fix` — линтинг и исправления синтаксиса typescript файлов 

## Описание работы сервера

### Корректные endpoint

- __GET__ `api/users` — получение массива всех пользователей
- __GET__ `api/users/{userId}` — получение пользователя с `id === userId`
- __POST__ `api/users` — добавление нового пользователя
- __PUT__ `api/users/{userId}` — обновить данные существующего пользователя с `id === userId`
- __DELETE__ `api/users/{userId}` — удалить пользователя с `id === userId` 

Все остальные endpoint сервер считает __не корректными__ и возвращает ошибку `404`

### Формат пользователя

Сервер хранит данные о пользователе в виде объекта js:

```js
{
  id: 'uuid', // тип строка, формата uuid
  username: `string`, // тип строка
  age: 0, // тип число
  hobbies: ['string', 'string'] // тип массив строк, любой длинны
}
```

### Формат запроса на добавления или обновления пользователя

Сервер принимает JSON объект со следующими полями: `username`, `age`, `hobbies`, которые являются __обязательными__. Другие поля, в том числе `id`, не записываються и не вызыват ошибок.

### Формат `id`

Сервер для новых пользователей генерирует поле `id` формата [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier).

## Возможные проблемы

Если вы нашли ошибку в работе программы, прошу создать issue в репозитории и описать её подробно. 

