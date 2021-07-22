import './search.css';
import React from 'react';


export default function SearchPage() {
    
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Need A Team Name Gaming </a>
                </div>
            </header>

            <main>
                <div className="GameFilter">
                
                    <div className ="GameFilterMain">
                    
                    <div class="list-game-filter-item">
                        <label for="filter-name">Name</label>
                        <form>   
                            <input class="w3-input" type="text"></input>   
                        </form>
                        </div>
                    
                    
                    <div class="list-game-filter-item">
                        <label for="filter-category">Category</label>
                        <select class="form-control">
                            <option value="">All</option>
                            <option value="1">Action</option>
                            <option value="2">FPS</option>
                            <option value="3">TPS</option>
                            </select>
                        </div>

                        <div class="list-game-filter-item">
                        <label for="filter-price">Price</label>
                        <select class="form-control">
                            <option value="">All</option>
                            <option value="1">Ascending</option>
                            <option value="2">Descending</option>
                            </select>
                        </div>

                        <div class="list-game-filter-item">
                        <label for="filter-rating">Rating</label>
                        <select  class="form-control">
                            <option value="">All</option>
                            <option value="1">Ascending</option>
                            <option value="2">Descending</option>
                            </select>
                        </div>

                        <div class="list-game-filter-item">
                        <label for="filter-review">Review</label>
                        <select  class="form-control">
                            <option value="">All</option>
                            <option value="1">Ascending</option>
                            <option value="2">Descending</option>
                            </select>
                        </div>

                        <div class="list-game-filter-item">
                        <button className="apply-search"> APPLY</button>
                        </div>


                    
                    </div>
                </div>
            </main>

            <footer className="row center">All right reserved</footer>
        </div>
    )

}