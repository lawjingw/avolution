import { useEffect, useState } from "react";
import Modal from "../../ui/Modal";
import Order from "./Order";
import { useFetcher } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const handleSubmit = (e, handleClick) => {
    e.preventDefault();
    if (query) {
      fetcher.submit(e.currentTarget, { method: "post" });
      handleClick();
    }
  };

  useEffect(() => {
    if (fetcher.data) setQuery("");
  }, [fetcher.data]);

  return (
    <div className="rounded-3xl bg-white px-5 py-6 shadow-lg">
      <Modal>
        {isSubmitting ? (
          <div className="flex items-center justify-center bg-white">
            <div className="loader"></div>
          </div>
        ) : (
          <Modal.Open
            opens="order"
            renderItem={(handleClick) => (
              <form
                onSubmit={(e) => handleSubmit(e, handleClick)}
                className="relative"
              >
                <input
                  type="text"
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.currentTarget.value)}
                  placeholder="Search order #"
                  maxLength="13"
                  className="rounded-md border border-solid px-4 py-2 transition-shadow focus:shadow-input focus:outline-none"
                />
                <input type="text" name="intent" defaultValue="query" hidden />
                <button type="submit" className="absolute bottom-3 right-1">
                  <HiOutlineSearch className="stroke-stone-400 text-lg" />
                </button>
              </form>
            )}
          />
        )}
        {fetcher.data && (
          <Modal.Window name="order">
            <Order order={fetcher.data} />
          </Modal.Window>
        )}
      </Modal>
    </div>
  );
}

export default SearchOrder;
