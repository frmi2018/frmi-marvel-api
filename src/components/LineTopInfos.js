const LineTopInfos = ({ skip, count }) => {
  return (
    <div className="col-middle">
      {skip + 100 <= count
        ? [
            skip === 0 ? (
              <span>Page 1 / {(count / 100).toFixed(0)}</span>
            ) : (
              <span>
                Page {skip / 100 + 1} / {(count / 100).toFixed(0)}
              </span>
            ),
            <div>{`${skip + 1}-${skip + 100}`}</div>,
          ]
        : [
            <span>
              Page {skip / 100 + 1} / {(count / 100 + 1).toFixed(0)}
            </span>,
            <div>{`${skip + 1}-${count}`}</div>,
          ]}
    </div>
  );
};
export default LineTopInfos;
