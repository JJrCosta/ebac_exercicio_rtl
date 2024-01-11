import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('input-comentario'), {
            target: {
                value: 'Primeiro comentário Teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        
        fireEvent.change(screen.getByTestId('input-comentario'), {
            target: {
                value: 'Segundo comentário Teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))

        expect(screen.getAllByTestId('qtd-comentarios')).toHaveLength(2)
    })
});