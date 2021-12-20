// import React, { useEffect, useState } from 'react';

// const ContentIndexMaker = ({indexs, setIndexs, name}) =>
// {
//     console.log(indexs);
//     const [indexText, setIndexText] = useState('');

//     useEffect(() => {
//         makeText();
//     }, []);

//     const makeText = () =>
//     {
//         indexs.map((i) =>
//         {
//             console.log(i);
//             setIndexText(indexText + i.toString()+ '.');
            
//             console.log(indexText);
//             setIndexs(i+1);
//         });
//     }
//     return (
//         <>
//             <li> <a href="">{indexText}</a> {name} </li>
//         </>
//     );
// };

// export default ContentIndexMaker;