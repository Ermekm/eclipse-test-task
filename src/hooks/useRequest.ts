// import { useEffect, useState } from "react";

// interface useRequestProps {
//   request: () => any;
// }

// const useRequest = ({ request }: useRequestProps): void => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     request()
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   }, []);
// };

// export default useRequest;
