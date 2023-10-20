import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Travdata from "./Travdata";
import { Button } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Product from './Product';

const Products = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("Europe Tours");
    const [selectedPriceRange, setSelectedPriceRange] = useState([3000, 5000]);
    const categories = [...new Set(Travdata.map((product) => product.category))];
    const [sortingMethod, setSortingMethod] = useState('lowToHigh');

    const handleSortLowToHigh = () => {
        setSortingMethod('lowToHigh');
    };

    const handleSortHighToLow = () => {
        setSortingMethod('highToLow');
    };
    const filteredData = Travdata.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }
        return product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1];
    });

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangePerPage = (event) => {
        setPerPage(event.target.value);
    };

    const handleChangePriceRange = (event, newValue) => {
        setSelectedPriceRange(newValue);
    };

    const indexOfLastProduct = page * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    var currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);
    if (sortingMethod === 'lowToHigh') {
        currentProducts = currentProducts.sort((a, b) => a.price - b.price);
    } else {
        currentProducts = currentProducts.sort((a, b) => b.price - a.price);
    }
    // ################################################  Main  ##############################################################
    return (
        <div className='container-fluid'>
            <h1 className="text-center">Travelers</h1>
            <div className="row mt-5 mx-2">
                <div className="col-md-3">
                    <div>
                        <p class="font-monospace fs-4 btn w-100 mb-4">Category</p>
                        <Button variant="text" className="btn w-100 mb-4" onClick={() => setSelectedCategory(null)}>All</Button>
                        {categories.map((category) => (
                            <Button variant="text" className="btn w-100 mb-4" key={category} onClick={() => setSelectedCategory(category)}>{category}</Button>
                        ))}
                    </div>
                    <p class="font-monospace fs-4 btn w-100 mb-4">Price</p>
                    <div>
                        <Slider
                            value={selectedPriceRange}
                            onChange={handleChangePriceRange}
                            min={1200}
                            max={8400}
                            step={100}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div>
                        <Button variant="text" className="btn w-50 mb-4" onClick={handleSortLowToHigh}>Low to High</Button>
                        <Button variant="text" className="btn w-50 mb-4" onClick={handleSortHighToLow}>High to Low</Button>
                    </div>
                </div>
                <div className="col-md-9">
                    <Stack direction="row" spacing={2}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <Pagination count={Math.ceil(filteredData.length / perPage)} page={page} onChange={handleChangePage} />
                            <select value={perPage} onChange={handleChangePerPage}>
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                        <div className="col-md-4"></div>
                    </Stack>
                    <div className='row'>
                        {currentProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;