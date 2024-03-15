import { Dispatch } from "react";
import { Button, Input } from "../../atoms";

type TInputMsg = {
  name: string;
  message: string;
};

type FormMessageProps = {
  inputText: TInputMsg;
  setInputText: Dispatch<React.SetStateAction<TInputMsg>>;
  isError: boolean;
  onSend: () => void;
};

export const FormMessage = ({
  inputText,
  setInputText,
  onSend,
  isError,
}: FormMessageProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="w-full flex flex-col gap-4"
    >
      <div className="w-full flex flex-col gap-2">
        <Input
          id="name"
          placeholder="Your Name."
          variant="primary"
          sizes="md"
          className="w-full text-sm"
          value={inputText.name}
          onChange={(e) =>
            setInputText((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        {isError && inputText.name.length < 1 ? (
          <p className="text-red-500 font-comfortaa text-xs">
            Please fill your name
          </p>
        ) : null}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input
          id="msg"
          placeholder="Message."
          variant="primary"
          sizes="md"
          className="w-full text-sm"
          value={inputText.message}
          onChange={(e) =>
            setInputText((prevState) => ({
              ...prevState,
              message: e.target.value,
            }))
          }
        />
        {isError && inputText.message.length < 1 ? (
          <p className="text-red-500 font-comfortaa text-xs">
            Please fill your message
          </p>
        ) : null}
      </div>
      <div className="w-full flex justify-end">
        <Button type="submit" variant="base" color="primary">
          Send Message
        </Button>
      </div>
    </form>
  );
};
