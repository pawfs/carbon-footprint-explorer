import { Bookmark } from "lucide-react";
import { EmissionFactorSearchResult } from "~/app/types";

export default function SearchResults({
  searchResults
}: {
  searchResults: EmissionFactorSearchResult | null
}
) {
  // If there is nothing to display, write no results found
  if (!searchResults || !searchResults.results || searchResults.results.length === 0) {
    return (
      <div className="rounded-lgp-4 flex flex-col gap-4">
        No results found.
      </div>);
  }
  // TODO: Add emission factor using the emission endpoint
  return (
    <div className="rounded-lgp-4 flex flex-col gap-4">
      <div className="text-bold">
        Showing {searchResults.results.length} results out of {searchResults.total_results}
      </div>

      {
        // Iterate over the search results and display them in a table
        searchResults.results.map((result) => (
          <div
            key={result.id}
            className="relative flex flex-col gap-4 rounded-lg border-2 border-black/20 p-4"
          >
            <button
              className="absolute right-2 text-gray-600 hover:text-blue-800 focus:outline-none"
              onClick={() => {
                // send a POST request to the /api/bookmark endpoint
                //console.log(result);
                void fetch("/api/bookmark", {
                  method: "POST",
                  body: JSON.stringify(result),
                });
              }}
            >
              <span>
                <Bookmark />
              </span>
            </button>
            <table className="min-w-full">
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Name
                  </td>
                  <td className="px-4 py-2 text-gray-800">{result.name}</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Description
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {result.description}
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Factor
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {result.factor}
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Activity ID
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {result.activity_id}
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    ID
                  </td>
                  <td className="px-4 py-2 text-gray-800">{result.id}</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Source
                  </td>
                  <td className="px-4 py-2 text-blue-600">
                    <a
                      href="{result.source_link}"
                      target="_blank"
                      className="underline"
                    >
                      {result.source}
                    </a>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Category
                  </td>
                  <td className="px-4 py-2 text-gray-800">{result.category}</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Sector
                  </td>
                  <td className="px-4 py-2 text-gray-800">{result.sector}</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Region Name
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {result.region_name}
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Year
                  </td>
                  <td className="px-4 py-2 text-gray-800">{result.year}</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-2 text-sm font-bold text-gray-600">
                    Year Released
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {result.year_released}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        ))}
    </div>
  )
}