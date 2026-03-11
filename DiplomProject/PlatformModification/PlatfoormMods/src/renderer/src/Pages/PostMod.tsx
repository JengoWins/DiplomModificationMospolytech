import Menu from '@renderer/components/Menu';

export function PostMod(): React.JSX.Element {
 
  const keepIndex = 4; // Номер стиля, который нужно оставить включенным (начиная с 0)

  document.querySelectorAll('style').forEach((style, index) => {
    if (index !== keepIndex) {
      style.disabled = true;
    } else {
      style.disabled = false; // Убедимся, что нужный стиль включен
    }
  });

  return (
    <>
    <Menu/>
    <main> 
        <div className="HeaderMod"><h2>Название</h2></div>
        <div className="MenuMod">
          <button className="ButOption">Общая информация</button>
          <button className="ButOption">А я забыл...</button>
          <button className="ButOption">Файлы</button>   
          <button className="ButOption">Скриншоты</button>     
        </div>
        <div className="mainContent">
            <div className="textDescript"><p>The One is a small/medium-sized mappack for the Oldunreal 227J patch, inspired by classic unreal community maps such as Nali Cove, One Day or Tashara’s Cove, utilizing 227J’s latest features. Welcome to the island of K’tharia. The Nali have established a peaceful haven here, free from oppression by the Skaarj. Unfortunately the island holds a dark secret, an ancient deity has awoken and it demands a sacrifice. Unfortunate victims are drawn to the underground, never to be seen again. Unfortunately for you, you are about to become it's latest victim…</p></div>

        </div>
    </main>
    </>
  );
}
