export interface Message {
  message: string,
  id: number,
}

const messages: Message[] = [
  {
    message: 'try',
    id: 0
  },
  {
    message: 'test',
    id: 1
  },
  {
    message:"testing",
    id: 2

  },
  {
    message: "trail",
    id: 3
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
