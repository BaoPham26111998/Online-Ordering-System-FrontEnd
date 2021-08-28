import './search.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Card,
  Table,
  Image,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faEdit,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ItemService from 'services/index.js';
import NavbarHome from 'components/NavbarHome';



class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchText: "",
      genre: "",
      sortDir: "asc",
    };
  }

 

  sortDataByPrice = () => {
    setTimeout(() => {
      this.state.sortDir === "asc"
        ? this.setState({ sortDir: "desc" })
        : this.setState({ sortDir: "asc" });
      this.findAllItems();
    }, 500);
  };

  componentDidMount() {
    this.findAllItems()
  }


  findAllItems() {
    ItemService.getItems()
      .then(res => {
        console.log(res.data)
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  searchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };



  cancelSearch = () => {
    ItemService.getItems()
      .then(res => {
        console.log(res.data)
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  searchData = () => {
    ItemService.getItemByName(this.state.searchText)
      .then(res => {
        console.log(this.state.searchText)
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  genreChange = (event) => {
    this.setState({
      [event.target.name]: event.target.attributes[0].value,
      
    })
    ItemService.getItemByGerne(event.target.attributes[0].value)
      .then(res => {
        console.log(event.target.attributes[0].value)
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };


  render() {
    // const { products, searchText,  sortDir } = this.state;
    const { products, searchText } = this.state;
    const genres = [...new Set(products.map(product => product.genre))]
    

    // const sortedPrice = products.sort( ( d, e) =>{
    //   const isReversedPrice = (sortDir === "asc") ? 1 : -1;
    //   return isReversedPrice * (d.price-e.price)
    // })
    
   

    return (
      <div className="grid-container">
        <NavbarHome user={this.props.user} setUse={this.props.setUser}/>

        <main>
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              <div style={{ float: "left", fontSize: "25px" ,fontWeight: "bold" }}>
                <FontAwesomeIcon icon={faList} /> Game List
              </div>
              <div style={{ float: "right" }}>
                <InputGroup size="sm">

                  <Dropdown as={ButtonGroup}>
                    <Button className = "gerne-button"
                            variant="Secondary">Genre</Button>

                    <Dropdown.Toggle split variant="Primmary" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                      {genres.map((genre, index) => {
                        return (
                          <Dropdown.Item
                            key={index}
                            value={genre}
                            name="genre"
                            onClick={(e) => this.genreChange(e)}
                          >
                            {genre}
                          </Dropdown.Item>
                        )
                      })
                      }
                    </Dropdown.Menu>
                  </Dropdown>

                  <FormControl
                    placeholder="Search"
                    name="searchText"
                    value={searchText}
                    className={"info-border bg-dark text-white"}
                    onChange={this.searchChange}
                  />
                  <InputGroup.Append>
                    <Button
                      className = "apply-search"
                      variant="outline-info"
                      type="button"
                      onClick={this.searchData}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                      className = "cancel-search"
                      size="sm"
                      variant="outline-danger"
                      type="button"
                      onClick={this.cancelSearch}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <th className = "search-th">Id</th>
                    <th className = "search-th">Title</th>
                    <th className = "search-th">In Stock</th>
                    <th className = "search-th" 
                        onClick={this.sortDataByPrice}>
                    Price{" "}
                    <div
                      className={
                        this.state.sortDir === "asc"
                          ? "arrow arrow-up"
                          : "arrow arrow-down"
                      }
                    >
                      {" "}
                    </div>
                  </th>
                    <th className = "search-th">Genre</th>
                    <th className = "search-th">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.length === 0 ? (
                    <tr align="center">
                      <td colSpan="7">No products Available.</td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product.id}>
                        <td className = "search-td">{product.id}</td>
                        <td className = "search-td">
                          <Image
                            src={product.img}
                            roundedCircle
                            width="25"
                            height="25"
                          />{" "}
                          {product.title}
                        </td>
                        <td className = "search-td">{product.inStock}</td>
                        <td className = "search-td">{product.price}</td>
                        <td className = "search-td">{product.genre}</td>
                        <td className = "search-td">
                          <ButtonGroup>
                            <Link
                              to={"product/" + product.id}
                              className="btn btn-sm btn-outline-primary"
                              
                            >
                              <FontAwesomeIcon icon={faEdit} /><p>View</p>
                            </Link>{" "}
                            
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    productObject: state.product,
  };
};


export default connect(mapStateToProps)(SearchPage);