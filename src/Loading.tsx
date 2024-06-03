import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div>
      <ClipLoader
        color='#36d7b7'
        loading={true}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
}

export default Loading;
