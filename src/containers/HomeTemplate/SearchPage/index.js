import './search.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faEdit,
    // faStepBackward,
    // faFastBackward,
    // faStepForward,
    // faFastForward,
    faSearch,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import DataServices from 'services/index.js';
import { faShoppingCart } from '../../../../node_modules/@fortawesome/free-solid-svg-icons/index';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: "",
            genre: "",
            sortDir: "asc",
        };
    }

    componentDidMount() {
        this.findAllItems()
    }

    sortData = () => {
        setTimeout(() => {
            this.state.sortDir === "asc"
                ? this.setState({ sortDir: "desc" })
                : this.setState({ sortDir: "asc" });
            this.findAllItems();
        }, 500);
    };

    findAllItems() {
        DataServices.getItems()
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

    gerneChange = (event) => {
        this.setState({
            [event.target.genreName]: event.target.value,
        })
        this.genreData()
    };

    cancelSearch = () => {
        DataServices.getItems()
            .then(res => {
                console.log(res.data)
                this.setState({ products: res.data });
            })
            .catch(err => console.log(err));
    };

    searchData = () => {
        DataServices.getItemByName(this.state.search)
            .then(res => {
                console.log(this.state.search)
                this.setState({ products: res.data });
            })
            .catch(err => console.log(err));
    }

    // sortData = () => {
    //   setTimeout(() => {
    //     this.state.sortDir === "asc"
    //       ? this.setState({ sortDir: "desc" })
    //       : this.setState({ sortDir: "asc" });
    //     this.findAllItems();
    //   }, 500);
    // };

    genreData = () => {
        DataServices.getItemByGerne(this.state.genre)
            .then(res => {
                console.log(this.state.genre)
                this.setState({ products: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { products, search } = this.state;
        var genre = [...new Set(products.map(product => product.genre))]
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Need A Team Name Gaming </a>
                    </div>
                </header>
                <main>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <div style={{ float: "left" }}>
                                <FontAwesomeIcon icon={faList} /> Product List
                            </div>
                            <div style={{ float: "right" }}>
                                <InputGroup size="sm">

                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="Secondary">Genre</Button>

                                        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                genreName="genre"
                                                value={genre}
                                                onClick={this.genreChange}
                                            >{genre}</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <FormControl
                                        placeholder="Search"
                                        name="search"
                                        value={search}
                                        className={"info-border bg-dark text-white"}
                                        onChange={this.searchChange}
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            size="sm"
                                            variant="outline-info"
                                            type="button"
                                            onClick={this.searchData}
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </Button>
                                        <Button
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
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>In Stock</th>
                                        <th onClick={this.sortData}>
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
                                        <th>Genre</th>
                                        <th>Actions</th>
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
                                                <td>{product.id}</td>
                                                <td>
                                                    <Image
                                                        src={product.img}
                                                        roundedCircle
                                                        width="25"
                                                        height="25"
                                                    />{" "}
                                                    {product.title}
                                                </td>
                                                <td>{product.inStock}</td>
                                                <td>{product.price}</td>
                                                <td>{product.genre}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Link

                                                            to={"product/" + product.id}
                                                            className="btn btn-sm btn-outline-primary"
                                                        >
                                                            <FontAwesomeIcon icon={faEdit} /><p>View</p>
                                                        </Link>{" "}
                                                        <Button
                                                            size="sm"
                                                            variant="outline-success"
                                                            onClick={() => (product.id)}
                                                        >
                                                            <FontAwesomeIcon icon={faShoppingCart} />
                                                            <p>Add to cart</p>
                                                        </Button>
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