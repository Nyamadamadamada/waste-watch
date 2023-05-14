import { aaa } from "@/libs/combert";

type Props = {
  wasteDate: WasteDetail;
};
console.log(JSON.stringify(aaa));

const WasteDetail = ({ wasteDate }: Props) => {
  return (
    <div className="">
      <div className="my-8 leading-loose">
        <div className="mb-4">
          <p className="highlight_pink">生活系ごみ</p>
          <div dangerouslySetInnerHTML={{ __html: wasteDate.dailyText }} />
        </div>
        <div>
          <p className="highlight_blue">事業系ごみ</p>
          <div dangerouslySetInnerHTML={{ __html: wasteDate.businessText }} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <table className="w-full  text-left">
          <tbody>
            <tr className="border-b">
              <th scope="row" className="p-4 font-medium  whitespace-nowrap">
                ゴミの総排出量
              </th>
              <td className="p-4">
                全国
                <span className="text-xl pl-2 pr-1">
                  {wasteDate.rank_total}
                </span>
                位
              </td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="p-4 font-medium  whitespace-nowrap">
                一人あたりの1日のごみ排出量
              </th>
              <td className="p-4">
                全国
                <span className="text-xl pl-2 pr-1">{wasteDate.rank_day}</span>
                位
              </td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="p-4 font-medium  whitespace-nowrap">
                リサイクル率
              </th>
              <td className="p-4">
                全国
                <span className="text-xl pl-2 pr-1">
                  {wasteDate.rank_recycling}
                </span>
                位
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WasteDetail;
