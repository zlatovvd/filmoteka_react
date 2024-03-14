export const checkPage = (currentPage:number, totalPages:number):number => {

    if (!currentPage || currentPage>totalPages) {
        return 1;
      } else {
        return currentPage;
      }

}