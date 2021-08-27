import React from "react";

class Tile {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    tile_swap = (grid, tile1, tile2) => {
        const temp = grid[tile1.x][tile1.y];
        grid[tile1.x][tile1.y] = grid[tile2.x][tile2.y];
        grid[tile2.x][tile2.y] = temp;
    };

    top_coord() {
        if (this.y === 0) return null;
        return new tile(this.x, this.y - 1);
    }
  
    bot_coord() {
        if (this.y === 3) return null;
        return new tile(this.x, this.y + 1);
    }

    right_coord() {
        if (this.x === 3) return null;
        return new tile(this.x + 1, this.y);
    }

    left_coord() {
        if (this.x === 0) return null;
        return new tile(this.x - 1, this.y);
    }

  
    win_cond = grid => {
        return (
        grid[0][0] === 1 &&
        grid[0][1] === 2 &&
        grid[0][2] === 3 &&
        grid[1][0] === 4 &&
        grid[1][1] === 5 &&
        grid[1][2] === 6 &&
        grid[2][0] === 7 &&
        grid[2][1] === 8 &&
        grid[2][2] === 0 
        );
    };
};


class State {
    constructor(grid, status) {
        this.grid = grid;
        this.status = status;
    };
};

 

  
  