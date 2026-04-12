import Icon from "./ui/Icon";

export default function Loader({ text }: { readonly text: string }) {
  return (
    <div className=" min-w-screen min-h-screen place-content-center justify-center flex flex-col ">
      <Icon name="LoaderPinwheel" />
      <p className=" align-center  text-muted bg-transparent backdrop-blur-lg">
        Loading {text} ...
      </p>
    </div>
  );
}
