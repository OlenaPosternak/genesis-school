import { ButtonsSection, Button } from './Buttons.styled';
export const Buttons = ({ setPage, page, maxPage }) => {
  return (
    <ButtonsSection>
      {page !== 0 && (
        <Button onClick={() => setPage(page - 1)}>Previous page</Button>
      )}
      {page === maxPage - 1 ? (
        ''
      ) : (
        <Button onClick={() => setPage(page + 1)}>Next page</Button>
      )}
    </ButtonsSection>
  );
};
