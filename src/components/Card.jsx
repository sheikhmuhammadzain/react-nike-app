
const Card = (prop) => {
  return (
    <div >
      <div className="card bg-base-100 w-72 shadow-xl ">
        <figure>
          <img
            src={prop.src}
            alt="Shoes"
            className='h-[300px] w-[300px] object-cover rounded'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card