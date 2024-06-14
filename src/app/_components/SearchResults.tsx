export default function SearchResults() {
    return (
        <div className="rounded-lgp-4 flex flex-col gap-4">
            <div className="text-bold">
              Showing NUMBER results out of TOTAL
            </div>
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>result name</td>
                </tr>
                <tr>
                  <td>Activity ID</td>
                  <td>result activity id</td>
                </tr>
                <tr>
                  <td>Emission Factors</td>
                  <td>result emission factors</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}