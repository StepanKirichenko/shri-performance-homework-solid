import Event from "./Event";

export default function General() {
  return (
    <section class="section main__general">
      <h2 class="section__title section__title-header section__main-title">
        Главное
      </h2>
      <div class="hero-dashboard">
        <div class="hero-dashboard__primary">
          <h3 class="hero-dashboard__title">Привет, Геннадий!</h3>
          <p class="hero-dashboard__subtitle">
            Двери и окна закрыты, сигнализация включена.
          </p>
          <ul class="hero-dashboard__info">
            <li class="hero-dashboard__item">
              <div class="hero-dashboard__item-title">Дома</div>
              <div class="hero-dashboard__item-details">
                +23
                <span class="a11y-hidden">°</span>
              </div>
            </li>
            <li class="hero-dashboard__item">
              <div class="hero-dashboard__item-title">За окном</div>
              <div class="hero-dashboard__item-details">
                +19
                <span class="a11y-hidden">°</span>
                <div
                  class="hero-dashboard__icon hero-dashboard__icon_rain"
                  role="img"
                  aria-label="Дождь"
                ></div>
              </div>
            </li>
          </ul>
        </div>
        <ul class="hero-dashboard__schedule">
          <Event
            icon="temp"
            iconLabel="Температура"
            title="Philips Cooler"
            subtitle="Начнет охлаждать в 16:30"
          />
          <Event
            icon="light"
            iconLabel="Освещение"
            title="Xiaomi Yeelight LED Smart Bulb"
            subtitle="Включится в 17:00"
          />
          <Event
            icon="light"
            iconLabel="Освещение"
            title="Xiaomi Yeelight LED Smart Bulb"
            subtitle="Включится в 17:00"
          />
        </ul>
      </div>
    </section>
  );
}
