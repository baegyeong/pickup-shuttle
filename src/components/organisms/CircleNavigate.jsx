import CircleBtn from '../molecules/CircleBtn';
import Line from '../atoms/Line';

const CircleNavigate = () => {
  return (
    <div className="relative">
      <div className="flex place-content-around">
        <CircleBtn num="1">주문정보</CircleBtn>
        <CircleBtn num="2">요청사항</CircleBtn>
        <CircleBtn num="3">마감기한</CircleBtn>
      </div>
      <div className="absolute top-4 left-14">
        <Line />
      </div>
    </div>
  );
};

export default CircleNavigate;
