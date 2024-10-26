import React from 'react';
function Singers()
{
    const singersList = [
        { name: 'Elvis Presley', year: 1954 },
        { name: 'Michael Jackson', year: 1971 },
        { name: 'Madonna', year: 1982 },
        { name: 'Freddie Mercury', year: 1970 },
      ];
return(
    <div>
<h2>Singers</h2>
<ul>
    {singersList.map((singer,index)=>(
    <li key={index}>
{singer.name}- Active since 
{singer.year}
</li>
    ))}
</ul>
</div>
)
}
export default Singers;
