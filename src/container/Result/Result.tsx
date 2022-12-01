interface resultType {
  relationFound: [];
}

const Result = ({ relationFound }: resultType) => {

  return (
    <div>
      {relationFound && relationFound.length > 0 ? (
        <div className="result-container">
          <h4>Results are as follows:</h4>
          <div className=" mt-3 result-box">
            {relationFound.map((item: any, i: number) => {
              return (
                <>
                <div key={i} className="d-flex justify-content-center flex-wrap align-items-center result-row">
                  {item.Values.map((arr: any, a: number) => {
                    return (
                      <div className="person" key={a}>
                        <div className="box">{arr}</div>
                        <span> &nbsp;&#x2192;&nbsp;</span>
                      </div>
                    );
                  })}
                </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h4>No relation Found</h4>
        </div>
      )}
    </div>
  );
};

export default Result;
