import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
`

export const Item = styled.li`
  background-color: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
`
export const CheckBox = styled.input`
  margin: 20px;
  height: 20px;
`

export const Todolist = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
`
export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  font-weight: 400;
  font-size: 15px;
  outline: none;
  padding-left: 10px;
`
export const Button = styled.button`
  background-color: #8052ec;
  border-radius: 5px;
  color: white;
  border: none;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
  padding: 13px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
