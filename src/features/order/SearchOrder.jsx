import { useContext, useEffect, useState } from "react";
import Modal from "../../ui/Modal";
import Order from "./Order";
import { useFetcher } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import toast from "react-hot-toast";
import { ModalContext } from "../../ui/ModalContext";

function SearchOrder() {
  const { open } = useContext(ModalContext);
  const [query, setQuery] = useState("");
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    fetcher.data?.ok && setQuery("");
    fetcher.data?.ok === "fail" && toast(`Order #${query} has not found.`);
  }, [fetcher.data]);

  return (
    <div className="bg-white px-5 py-6 shadow-lg md:rounded-3xl">
      {isSubmitting ? (
        <div className="flex items-center justify-center bg-white">
          <div className="loader"></div>
        </div>
      ) : (
        <fetcher.Form
          onSubmit={() => open("order")}
          className="relative"
          method="post"
        >
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search order #"
            maxLength="13"
            className="w-full rounded-md border border-solid px-4 py-2 transition-shadow focus:shadow-input focus:outline-none"
          />
          <input type="text" name="intent" defaultValue="query" hidden />

          <button
            type="submit"
            disabled={!query}
            className="absolute bottom-3 right-3"
          >
            <HiOutlineSearch className="stroke-stone-400 text-lg" />
          </button>
        </fetcher.Form>
      )}

      {!isSubmitting && fetcher.data?.ok === "success" && (
        <Modal.Window name="order">
          <Order order={fetcher.data.order} />
        </Modal.Window>
      )}
    </div>
  );
}

export default SearchOrder;
