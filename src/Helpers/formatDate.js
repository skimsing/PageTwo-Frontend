const formatDate = (weirdformat) => {
    let getDate = new Date(weirdformat).toLocaleDateString("en-US");
    return (getDate);
  };

  export default formatDate;