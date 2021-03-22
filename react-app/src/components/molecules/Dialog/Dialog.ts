import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const Dialog = styled.div`
  width: 800px;
  height: 350px;
  background: ${props => props.theme.color_f};
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color_e};
`;

export const DialogHeader = styled.div`
  height: 10%;
  display: flex;
`;

export const DialogTitle = styled.div`
  margin: 60px 0 0 80px;
  font-size: 24px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const CloseButton = styled.button`
  margin-right: 15px;
  margin-top: 10px;
  margin-left: auto;
  font-size: 40px;
  background: ${props => props.theme.color_f};
  color: ${props => props.theme.color_e};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const DialogBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  gap: 1rem;
  margin: 20px 60px 60px auto;
`;

export default Overlay;
