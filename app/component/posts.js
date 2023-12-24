'use client';

import Link from "next/link";
import { useEffect, useState } from "react";



const Posts = ({data}) => {
const [mounted, setMounted] = useState(false);
useEffect(() => {
  setMounted(true);
})

    return (
      <>
        {mounted && (
          <table border={1}>
            <thead>
              <tr>
                <th>id</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>
                    <Link href={`./posts/${a.id}`}>{a.body}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
};
export default Posts;