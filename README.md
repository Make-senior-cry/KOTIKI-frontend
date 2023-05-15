# Frontend социальной сети KOTIKI

KOTIKI - это революционная социальная сеть, предоставляющая пользователям широкие возможности, в которой каждый может почувствовать себя котиком. На платформе пользователи могут:

- Создать аккаунт
- Создать пост с текстом и/или фото
- Начать чат с другим пользователем
- Оставить реакцию на пост
- Подписаться на другого пользователя

## Список зависимостей проекта

Список зависимостей проекта хранится в файле package.json. Зависимости рантайма перечислены в поле dependencies, зависимости для разработки - в поле devDependencies, опциональные (платформо-специфические) зависимости расположены в optionalDependencies.

### Зависимости рантайма

- "axios" - библиотека для управиления HTTP-запросами
- "classnames" - библиотека для создания комплексных названий классов элементов
- "mobx" - библиотека для управления состоянием приложения
- "mobx-react-lite" - библиотека для связи mobx и react
- "react" - библиотека для создания динамического пользовательского интерфейса
- "react-dom" - библиотека для отрисовки react-интерфейсов в DOM
- "react-router-dom" - библиотека для реализации межстраничного роутинга в react

### Зависимости разработки

- "@types/react" - набор типов для библиотеки react
- "@types/react-dom" - набор типов для библиотеки react-dom
- "@vitejs/plugin-react-swc" - плагин системы сборки vite для взаимодействия с react
- "eslint" - линтер для проверки стиля js/jsx файлов
- "eslint-config-airbnb" - набор правил airbnb для eslint
- "eslint-plugin-import" - плагин для проверки импортирования файлов для eslint
- "eslint-plugin-jsx-a11y" - плагин для проверки доступности шаблонов для eslint
- "eslint-plugin-react" - плагин для проверки стиля написания react-компонентов для eslint
- "eslint-plugin-react-hooks" - плагин для проверки стиля написания react-хуков для eslint
- "husky": "^8.0.3" - инструмент для добавления программных действий при событиях git
- "vite": "^4.1.0" - система сборки
- "vite-plugin-eslint": - плагин системы сборки vite для взаимодействия с eslint

## Запуск проекта

1. Клонирование репозитория

```bash
git clone https://github.com/Make-senior-cry/KOTIKI-frontend.git
cd KOTIKI-frontend
```

2. Установка зависимостей проекта

```bash
npm i
```

3. Запуск проекта в режиме разработки

```bash
npm run dev
```

4. Сборка артефактов проекта

```bash
npm run build
```

5. Сборка документации проекта

```bash
npm run build-storybook
```

6. Запуск документации

```bash
npm run storybook
```

7. Проверка стиля кода в проекте

```bash
npm run lint
```

8. Запуск собранных артефактов на локальной машине

```bash
npm run preview
```

### CI-CD

В проекте настроен CI-CD с помощью github actions, файлы настройки расположены в .guthub/workflows

#### Lint

Пайплайн проверяет стиль кода проекта, запускается при при открытии PR и добавлении коммитов в ветку открытого PR

#### Deploy

Пайплайн вызывает Lint, затем собирает артефакты проекта и публикует их на хостинге vercel. Запускается при успешном коммите в ветку main. После этого новая версия проекта доступна по адресу [kotiki-nine.vercel.app](kotiki-nine.vercel.app)

## Как ведется разработка?

1. Создаем ветку "task/<task-name/task-id>" через `git checkout -b` от ветки main
2. Вносим изменения
3. Делаем pull request

### Правила создания UI-компонентов

Нужны, чтобы все UI-компоненты проекта были написаны в одном стиле и их было легко использовать

- UI-компоненты не должны иметь никакой логики, кроме той, что связанна непосредственно с представлением
- UI-компоненты реализуются как функциональные React-компоненты в папке /src/ui/<component-name>.jsx
- UI-компоненты стилизуются классами Bootstrap 5
- Четко следовать макету в фигме не нужно, там лишь общее представление вида компонента. Нужно сверстать похожий UI, используя максимум классов Bootstrap и минимум дополнительного CSS
- Дополнительный CSS пишется в [css-модуле](https://habr.com/ru/post/335244/) в папке компонента (в таком случае нужно сделать отдельную папку для компонента в src/ui).
- UI-компонент должен принимать необходимые обработчики событий (например, onClick для кнопки) и изменяющиеся данные (например, placeholder для поля ввода)
- UI-компонент должен быть адаптивным настолько, насколько это возможно реализовать

#### Пример кода UI-компонента кнопки

```jsx
// src/ui/Button.jsx
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
```

#### Как писать UI-компонент на реакте, если я не знаю реакта?

Сначала можно написать компонент в виде html-шаблона и добавить как файл <component-name>.html в папку src/showcase в репозиторий, этого достаточно для создания PR.

После можно почитать [этот гайд](https://www.freecodecamp.org/news/react-tutorial-build-a-project/) до заголовка "How to Manage State in React with the useState Hook" и переписать шаблон в виде react-компонента
