## Frontend социальной сети KOTIKI

### Как ведется разработка?

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
const Button = ({ children, onClick }) => (<button onClick={onClick}>{children}</button>);

export default Button;
```

#### Как писать UI-компонент на реакте, если я не знаю реакта?

Сначала можно написать компонент в виде html-шаблона и добавить как файл <component-name>.html в папку src/showcase в репозиторий, этого достаточно для создания PR.

После можно почитать [этот гайд](https://www.freecodecamp.org/news/react-tutorial-build-a-project/) до заголовка "How to Manage State in React with the useState Hook" и переписать шаблон в виде react-компонента
