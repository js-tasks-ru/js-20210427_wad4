export default class NotificationMessage {
  static activeNotification;

  constructor(message = '', {duration = 0, type = 'success'} = {}) {
    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove();
    }

    this.message = message;
    this.duration = duration;
    this.type = type;
    this.durationInSeconds = (duration / 1000) + 's';

    this.render();
  }

  getTemplate() {
    return `<div class="notification ${this.type}" style="--value:${this.durationInSeconds}">
        <div class="timer">
            <div class="inner-wrapper">
                <div class="notification-header">Notification</div>
                <div class="notification-body">
                    ${this.message}
                </div>
            </div>
        </div>
    </div>`;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.getTemplate();
    this.element = element.firstElementChild;
    NotificationMessage.activeNotification = this.element;
  }

  show(parent = document.body) {
    parent.append(this.element);
    setTimeout(() => {this.remove()}, this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    NotificationMessage.activeNotification = null;
  }
}
