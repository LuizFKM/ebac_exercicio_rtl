import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar dois comentarios', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('comentarios'), {
            target: {
                value: 'Primeiro comentario de testes'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Primeiro comentario de testes')).toBeInTheDocument();
        fireEvent.change(screen.getByTestId('comentarios'), {
            target: {
                value: 'Segundo comentário de testes'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Segundo comentário de testes')).toBeInTheDocument();




    })
});