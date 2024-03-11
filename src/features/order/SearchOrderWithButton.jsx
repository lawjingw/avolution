import { useEffect, useState } from "react";
import Order from "./Order";
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function SearchOrderWithButton() {
  const [query, setQuery] = useState("");
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  console.log(isSubmitting);
  console.log(fetcher.data);

  useEffect(() => {
    fetcher.data?.ok && setQuery("");
  }, [fetcher.data]);

  if (fetcher.data?.ok === "success")
    return <Order order={fetcher.data.order} />;

  return (
    <div className="bg-white px-5 py-6 shadow-lg md:rounded-3xl">
      {fetcher.data?.ok === "fail" && (
        <div className="mb-4 rounded-full bg-orange-200 bg-opacity-50">
          <p className="px-3 py-2 text-sm text-amber-600">
            Order has not been found
          </p>
        </div>
      )}
      {isSubmitting ? (
        <div className="flex items-center justify-center bg-white">
          <div className="loader"></div>
        </div>
      ) : (
        <fetcher.Form className="relative" method="post">
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
          <div className="mt-4 flex flex-col">
            <Button isDisabled={!query}>Search</Button>
          </div>
        </fetcher.Form>
      )}
    </div>
  );
}

export default SearchOrderWithButton;
