"use client";
export const runtime = 'edge';
import { useEffect, useState } from "react";

interface CheckResultItem {
  const_name: string;
  const_value: string;
}

interface ApiResponse {
  code: number;
  checkResult: CheckResultItem[];
  error?: string;
}

export default function Home() {
  const [data, setData] = useState<CheckResultItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/ceshi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        const result: ApiResponse = await response.json();

        if (response.ok) {
          setData(result.checkResult);
        } else {
          setError(result.error || "未知错误");
        }
      } catch (error) {
        setError("Error fetching data: " + (error as Error).message);
      }
    };

    getData();
  }, []);

  return (
    <main>
      <h1>测试</h1>
      {error && <p>错误: {error}</p>}
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.const_name}>
              {item.const_name}: {item.const_value}
            </li>
          ))}
        </ul>
      ) : (
        <p>加载中...</p>
      )}
    </main>
  );
}