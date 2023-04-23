import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'обращения' // начальный выбранный элемент
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(name) {
    // обновить состояние выбранного элемента
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <div>
        {/* создать список элементов */}
        <ul>
          <li
            className={this.state.activeItem === 'обращения' ? 'active' : ''}
            onClick={() => this.handleItemClick('обращения')}
          >
            Обращения
          </li>
          <li
            className={this.state.activeItem === 'статистика' ? 'active' : ''}
            onClick={() => this.handleItemClick('статистика')}
          >
            Статистика
          </li>
          <li
            className={this.state.activeItem === 'проекты' ? 'active' : ''}
            onClick={() => this.handleItemClick('проекты')}
          >
            Проекты
          </li>
          <li
            className={this.state.activeItem === 'пользователи' ? 'active' : ''}
            onClick={() => this.handleItemClick('пользователи')}
          >
            Пользователи
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;