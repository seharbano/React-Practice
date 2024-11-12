import React, { useState, useEffect } from 'react';
type Props = {
// interface UserData {
  name: string;
  email: string;
}

const UseEffectFetchDataOnMount = ({name,email}: Props) => {
  const [userData, setUserData] = useState<Props | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Props = await response.json();
        setUserData(data);
      } catch (err) {
        // Type assertion for error
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Information</h1>
      {userData && (
        <>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </>
      )}
    </div>
  );
};

export default UseEffectFetchDataOnMount;
