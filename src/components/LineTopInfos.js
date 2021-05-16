const LineTopInfos = ({ skip, count }) => {
  let page = (count / 100).toFixed(0);
  if (Number(page) === 0) {
    page = 1;
  }

  return (
    <div className="col-middle">
      {skip + 100 <= count
        ? [
            skip === 0 ? (
              <span>Page 1 / {page}</span>
            ) : (
              <span>
                Page {skip / 100 + 1} / {page}
              </span>
            ),
            <div>{`${skip + 1}-${skip + 100}`}</div>,
          ]
        : [
            <span>
              Page {skip / 100 + 1} / {page}
            </span>,
            <div>{`${skip + 1}-${count}`}</div>,
          ]}
    </div>
  );
};
export default LineTopInfos;
