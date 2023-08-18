export const Button: React.FC = () => {
  const array = ['1', '2', '3', '4', '5'];

  return (
    <div>
      {array.map(current => {
        return <h1>{current}</h1>;
      })}
    </div>
  );
};
