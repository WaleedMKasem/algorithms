// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {

    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    let pageCount = this.pageCount(pageIndex);

    if (pageIndex >= pageCount)
        return -1;

    let valid = this.collection.filter((el, index) => {
        return index > this.itemsPerPage * pageIndex && index < this.itemsPerPage * (pageIndex + 1)
    });
    return valid.length + 1;


}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {

    //console.log(itemIndex);
    // console.log(this.collection);

    if (itemIndex >= this.itemCount())
        return -1;
    if (itemIndex < 0)
        return -1;

    let i = 0;
    while (itemIndex > this.itemsPerPage * (i + 1)) {
        i++;
    }
    return i;


}