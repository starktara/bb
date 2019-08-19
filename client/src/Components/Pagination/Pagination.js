import React, { Component, Fragment } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 12, pageNeighbours = 0 } = props;
    
    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 15;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    // console.log('pageLimit', this.pageLimit);
    // console.log('totalRecords', this.totalRecords);
    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
    // this.fetchPageNumbers = this.fetchPageNumbers.bind(this);

    this.state = {
      currentPage: 1
    };
  }

  componentDidMount(){
      this.gotoPage(1);
  }

  fetchPageNumbers() {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    // const currentPage = 7;
    const pageNeighbours = this.pageNeighbours;
    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalBlocks < totalPages) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
        
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - pages.length + 1;

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, RIGHT_PAGE];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  }

  gotoPage = (page) => {
        const {onPageChanged = f => f} = this.props;

        const currentPage = Math.max(0, Math.min(page, this.totalPages));

        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.pageLimit,
            totalRecords: this.totalRecords,
        }

        this.setState({
            currentPage
        }, () => onPageChanged(paginationData))
  }

  handleClick = page => event => {
    event.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = event => {
    event.preventDefault();
    this.gotoPage(this.state.currentPage - 1);
  }

  handleMoveRight = event => {
    event.preventDefault();
    this.gotoPage(this.state.currentPage + 1);
  }

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();
    const pageNeighbours = this.pageNeighbours;
    const totalPages = this.totalPages

    const leftButtonClass = (currentPage - pageNeighbours) > 2 ? "" : "disabled";
    const rightButtonClass = (currentPage + pageNeighbours) < totalPages - 1 ? "" : "disabled";

    return (
            <ul className="pagination">
				<li className={leftButtonClass}><a href="#!" onClick={this.handleMoveLeft}><i className="material-icons">chevron_left</i></a></li>                
                {pages.map((page, index) => {
                    if(page === LEFT_PAGE) return (
                        <li key={index} className="dot"><a href="#!">....</a></li>
                    );
                    if(page === RIGHT_PAGE) return (
                        <li key={index} className="dot"><a href="#!">....</a></li>
                    );
                    return (
                        <li key={index} className={currentPage === page ? "active" : ""}><a href="#!" onClick={this.handleClick(page)}>{page}</a></li>
                    );
                })}
				<li className={rightButtonClass}><a href="#!" onClick={this.handleMoveRight}><i className="material-icons">chevron_right</i></a></li>
            </ul>
        
    );
  }
}

export default Pagination;
