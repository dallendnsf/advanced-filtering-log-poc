"use client";
import * as React from "react";
import { RefreshOutlined } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function GridRefresh() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  // fake timeout to simulate fetching data
  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <LoadingButton
      onClick={handleClick}
      startIcon={<RefreshOutlined />}
      loading={loading}
      loadingPosition="start"
      size="small"
    >
      <span>Refresh</span>
    </LoadingButton>
  );
}
