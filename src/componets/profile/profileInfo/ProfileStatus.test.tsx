import React from 'react';
import { create } from 'react-test-renderer';
import {ProfileStatus} from 'src/componets/profile/profileInfo/ProfileStatus';


describe('Компонент Profile Status', () => {
    test('статус должен отображаться корректно', () => {
        const mockUpdateUserStatus = jest.fn();
        const component = create(<ProfileStatus status={'test message'} updateUserStatus={mockUpdateUserStatus} />);

        const root = component.root;
        const span = root.findByType('span');

        expect(span.props.children).toBe('test message');
    });

    test('должен вызывать updateUser Status при потере фокуса', () => {
        const mockUpdateUserStatus = jest.fn();
        const component = create(<ProfileStatus status={'test message'} updateUserStatus={mockUpdateUserStatus} />);

        const root = component.root;
        const span = root.findByType('span');

        // Симулируем клик для входа в режим редактирования
        span.props.onClick();

        // Находим input и симулируем потерю фокуса
        const input = root.findByType('input');
        input.props.onBlur();

        expect(mockUpdateUserStatus).toHaveBeenCalledWith('test message');
    });
});
