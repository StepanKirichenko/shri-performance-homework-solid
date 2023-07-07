export default function Event(props) {
  return (
    <li class={"event" + (props.slim ? " event_slim" : "")}>
      <button class="event__button">
        <span
          class={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 class="event__title">{props.title}</h4>
        {props.subtitle && (
          <span class="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}
