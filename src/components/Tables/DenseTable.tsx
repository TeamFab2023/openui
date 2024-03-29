import React from 'react'
import Layout from '../Layouts/Layout'

const DenseTable = () => {
  return (
   <Layout>
    <h3 className='text-2xl font-bold leading-6 text-gray-900 mt-2 '>Dense Table</h3><br /><div className="min-w-full bg-white shadow-md rounded-lg overflow-x-scroll">
          <table className="min-w-full leading-normal">
              <thead>
                  <tr>
                      <th className="px-5 py-2 border-t border-b-2 border-gray-300 bg-white-100 text-left text-lg font-semibold text-gray-600">
                          Dessert (100g serving)
                      </th>
                      <th className="px-5 py-2 border-t border-b-2 border-gray-300 bg-white-100 text-left text-lg font-semibold text-gray-600">
                          Calories
                      </th>
                      <th className="px-5 py-2 border-t border-b-2 border-gray-300 bg-white-100 text-left text-lg font-semibold text-gray-600">
                          Fat (g)
                      </th>
                      <th className="px-5 py-2 border-t border-b-2 border-gray-300 bg-white-100 text-left text-lg font-semibold text-gray-600">
                          Carbs (g)
                      </th>
                      <th className="px-5 py-2 border-t border-b-2 border-gray-300 bg-white b-100 text-left text-lg font-semibold text-gray-600">
                          Protein (g)
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          Frozen yoghurt
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          159
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          6
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          24
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          4
                      </td>
                  </tr>
                  <tr>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          Ice cream sandwich
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          237
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          9
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          37
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          4.3
                      </td>
                  </tr>
                  <tr>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          Eclair
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          262
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          16
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          24
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          6
                      </td>
                  </tr>
                  <tr>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          Cupcake
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          305
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          3.7
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          67
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          4.3
                      </td>
                  </tr>
                  <tr>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          Gingerbread
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          356
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          16
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          49
                      </td>
                      <td className="px-5 py-2 border-b border-gray-300 bg-white text-lg text-gray-500">
                          3.9
                      </td>
                  </tr>
              </tbody>
          </table>
      </div><br />
      </Layout>

  )
}

export default DenseTable;