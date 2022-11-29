import axios from "./axios";

export const handleInputs = (e, setForm, form) => {
  //   e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  setForm({
    ...form,
    [name]: value,
  });
};

export const fetcher = async (path, method, form) => {
  try {
    const { data } = await axios[method](`${path}`, form);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// create businesss  fetcher('businesses/create','post',form)
// the payment_plan name is selected from a list of available plans

// getting current user businesses   fetcher('businesses/getCurrentUserBusinesses','get')

// updating a business   fetcher('businesses/updateBusiness/:business_id','put',form)
// pass what needs to be updated in the req body

// user deleting their business    fetcher('businesses/deleteBusiness/:business_id','delete')

// user geting one of their businesses    fetcher('businesses/getBusiness/:business_id','get')

// searching for a business    fetcher('businesses/search','get')
// provide a query called business
// example/api/v1/businesses/search?business=Elect

// creating comment for tweet    fetcher('comments/create/:tweetId','post',form)

// get a tweet comments    fetcher('comments/:tweetId','get')

// liking a comment fetcher('comments/like/:commentId','post')

// retweeting a tweet fetcher('comments/retweet/:tweetId','post')

// creating a comment on comment      fetcher('comments/comment/:commentId','post')

// getting comments for a comment    fetcher('comments/getComments/:commentId','get')

// getting departments belonging to a faculty   fetcher('departments/:faculty','get')
