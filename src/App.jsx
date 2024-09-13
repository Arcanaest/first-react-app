import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import redrisingImage from "./assets/redrising2.jpg";
import structureImage from "./assets/structure.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Пирс Браун "Алое Восстание"</h1>
        <h3>
          <i>
            «Мера человека — это то, что он делает, когда у него есть власть».
          </i>
        </h3>
        <img
          className="cover"
          src={redrisingImage}
          alt="Обложка книги 'Алое Восстание'"
        />

        <p>
          Цикл Брауна посвящен борьбе низшей касты, алых, с золотыми,
          присвоившими себе все блага и достижения человеческой цивилизации. Это
          мир будущего, где люди успешно колонизировали Солнечную систему и
          расселились практически по всем планетам. Главный герой, 16-летний{" "}
          <strong>Дэрроу</strong>, — шахтер на Марсе. Он происходит из касты{" "}
          <strong className="red">алых</strong>, которые работают в недрах
          планеты и добывают ценный гелий-3, необходимый для терраформирования{" "}
          <em>(создания пригодных для жизни условий)</em>.
          <br />
          Алые уверены, что они способствуют будущему освоению планеты и
          приближают скорое переселение человечества на Марс. Однако в
          реальности оказывается, что люди вот уже как <b>пять веков</b> живут и
          процветают на Красной планете, а шахтеров все это время эксплуатируют
          как рабов и не дают подняться на поверхность, где свои города
          построила высшая каста — <strong className="gold">золотые</strong>.
          После трагических событий Дэрроу решает присоединиться к группе
          повстанцев и начинает борьбу за равноправие.
        </p>

        <h2>Структура общества</h2>

        <div className="container">
          <img
            className="structure"
            src={structureImage}
            alt="Структура общества"
          />
          <ul>
            <li className="gold">Золотые: Правители общества</li>
            <li>Серебряные: финансисты и бизнесмены</li>
            <li>Белые: духовенство и судьи</li>
            <li>Медные: администраторы, юристы и бюрократы</li>
            <li>Синие: Бригада звездолетов и пилоты на мостике</li>
            <li>Желтые: врачи и исследователи</li>
            <li>Зеленые: Программисты и технические специалисты</li>
            <li>Фиолетовые: творческие люди</li>
            <li>Оранжевые: Механики и инженеры</li>
            <li>Серые: регулярные солдаты и полиция</li>
            <li>Коричневые: Слуги, повара, дворники</li>
            <li>Черные: элитные солдаты и телохранители</li>
            <li>Розовые: рабы удовольствий и социальные функционеры</li>
            <li className="red">Красные: чернорабочие и шахтеры</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;