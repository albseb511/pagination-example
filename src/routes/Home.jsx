import React from "react";
import { connect } from "react-redux";
import { getData, changePage } from "../redux/action";

const Home = ({ data, page, perPage, fetchData, isLoading, error, changePage }) => {
  const handleClick = () => {
    fetchData();
  };
  const length = data.length
  const pages = length/perPage
  const pageList = []

  // pages
  for(let i = page-1; i>=0 && i<=page+3 && i<=pages &&page<=pages ; i++){
    if(i===page-1){
      if(i!==0)
        pageList.push(<div key={i} onClick={()=>changePage(page-1)}>Previous</div>)
      continue;
    }
    if(i===page+3 ){
      pageList.push(<div key={i} onClick={()=>changePage(page+1)} >Next</div>)
      continue;
    }
    pageList.push(<div key={i} style={{color:`${page===i?'green':'black'}`}} onClick={()=>changePage(i)}>{i}</div>) 
  }



  return (
    <div>
      {isLoading && "loading..."}
      {pages!==0 && pageList }
      {data &&
        data.filter((a,i)=>i>=perPage*(page-1)&&i<perPage*page).map((item,i) => (
          <div key={item.id}>
            <div>SNO: {item.id} </div>
            <div>TITLE: {item.title}</div>
            <div>STATUS: {item.completed.toString()}</div>
          </div>
        ))}
      <button onClick={handleClick}>GET DATA </button>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  page: state.page,
  perPage: state.perPage,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData()),
  changePage: (payload)=>dispatch(changePage(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
