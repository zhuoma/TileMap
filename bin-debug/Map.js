var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.size = 7;
        this.TextruesSize = 64;
        this.tileArray = [];
        this.init();
        this.startTile = this.tileArray[0];
        this.endTile = this.tileArray[0];
        this.numCols = 8;
        this.numRows = 8;
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var config = [
            { x: 0, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 3, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 4, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 5, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 6, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 0, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 3, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 4, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 5, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 6, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 1, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 3, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 4, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 5, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 6, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 0, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 2, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 3, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 4, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 5, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 6, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 1, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 3, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 4, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 5, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 6, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 0, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 3, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 4, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 5, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 6, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 3, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 4, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 5, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 6, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 0, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 1, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 2, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 3, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 4, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 5, walkable: false, pictureName: "stone_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 6, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 7, walkable: true, pictureName: "grass_png", f: 0, g: 0, h: 0, costMultiplier: 1.0 }
        ];
        for (var i = 0; i < config.length; i++) {
            var tiledata = config[i];
            var tile = new Tile(tiledata);
            this.addChild(tile);
            tile.x = tiledata.x * 64;
            tile.y = tiledata.y * 64;
            this.tileArray.push(tile);
        }
    };
    p.getTile = function (x, y) {
        for (var i = 0; i < this.tileArray.length; i++) {
            if (this.tileArray[i].x / this.TextruesSize == x && this.tileArray[i].y / this.TextruesSize == y) {
                break;
            }
        }
        return this.tileArray[i];
    };
    p.setStartTile = function (x, y) {
        for (var i = 0; i < this.tileArray.length; i++) {
            if (this.tileArray[i].x / this.TextruesSize == x && this.tileArray[i].y / this.TextruesSize == y) {
                break;
            }
        }
        this.startTile = this.tileArray[i];
    };
    p.setEndTile = function (x, y) {
        for (var i = 0; i < this.tileArray.length; i++) {
            if (this.tileArray[i].x / this.TextruesSize == x && this.tileArray[i].y / this.TextruesSize == y) {
                break;
            }
        }
        this.endTile = this.tileArray[i];
    };
    p.getNumCols = function () {
        return this.numCols;
    };
    p.getNumRows = function () {
        return this.numRows;
    };
    p.getStartTile = function () {
        return this.startTile;
    };
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(tiledata) {
        _super.call(this);
        this.bitmapSize = 64;
        this.tileData = tiledata;
        this.bitmaps = new egret.Bitmap();
        this.addChild(this.bitmaps);
        this.bitmaps.texture = RES.getRes(tiledata.pictureName);
        this.bitmaps.width = this.bitmapSize;
        this.bitmaps.height = this.bitmapSize;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var TileData = (function () {
    function TileData() {
        this.costMultiplier = 1.0;
    }
    var d = __define,c=TileData,p=c.prototype;
    return TileData;
}());
egret.registerClass(TileData,'TileData');
//# sourceMappingURL=Map.js.map