// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

const filterByExpiration = (items) => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    if(day<10) {
        day = '0'+day
    }
    if(month<10) {
        month = '0'+month
    }
    today = month+ '-' + day + '-' +year;
    let returnedItems = [];

    for(let i = 0; i < menuItems.length;i++){
      if (menuItems[i].expirationDate > today){
        returnedItems.push(menuItems[i]);

      }

    }

    items = returnedItems;
    return items;
};