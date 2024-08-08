import theme from "@/components/ThemeRegistry/theme";
import { IRequestSummary } from "@/types/request-summary";
import { ITopDomains } from "@/types/top-domains";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export interface TopDomainsGridProps {
  data: ITopDomains[];
  denominator: number;
}

export type TopDomainsGridModel = TopDomainsGridProps;

const TopDomainsGrid: React.FC<TopDomainsGridModel> = ({
  data,
  denominator,
}) => {
  return (
    <>
      <TableContainer
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "4px",
        }}
      >
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Domain</TableCell>
              <TableCell align="right">Categories</TableCell>
              <TableCell align="right"># of Requests</TableCell>
              <TableCell align="right">% of Requests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              const isEven = index % 2 == 0;

              return (
                <TableRow
                  key={row.domain}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: isEven
                      ? theme.palette.grey[50]
                      : theme.palette.common.white,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.domain}
                  </TableCell>
                  <TableCell align="right">
                    {getCategoryString(row.categories)}
                  </TableCell>
                  <TableCell align="right">
                    {row.total_requests.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    {((row.total_requests / denominator) * 100).toFixed(2)}%
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

function getCategoryString(categories: number[]): string {
  const categoryTextArray: string[] = [];

  categories.forEach((c) => {
    let cat = categoryLookup.find((cl) => {
      return cl.id === c;
    });

    if (cat) {
      categoryTextArray.push(cat.name);
    }
  });

  if (categoryTextArray.length > 1) {
    return categoryTextArray[0] + `, +${categoryTextArray.length - 1}`;
  }

  return categoryTextArray.join(",");
}

const categoryLookup: { id: number; name: string }[] = [
  { id: 1, name: "Abortion" },
  { id: 2, name: "Adult Content" },
  { id: 4, name: "Alcohol & Tobacco" },
  { id: 5, name: "Blogs & Personal Sites" },
  { id: 6, name: "Business" },
  { id: 8, name: "Dating & Personals" },
  { id: 9, name: "Drugs" },
  { id: 12, name: "Entertainment" },
  { id: 18, name: "Humor" },
  { id: 20, name: "Jobs & Careers" },
  { id: 26, name: "Real Estate" },
  { id: 29, name: "Shopping" },
  { id: 31, name: "Sports" },
  { id: 32, name: "Streaming Media" },
  { id: 36, name: "Vehicles" },
  { id: 38, name: "Weapons" },
  { id: 10, name: "Economy & Finance" },
  { id: 11, name: "Education & Self Help" },
  { id: 13, name: "Food & Recipes" },
  { id: 14, name: "Gambling" },
  { id: 19, name: "Information Technology" },
  { id: 21, name: "Media Sharing" },
  { id: 22, name: "Message Boards & Forums" },
  { id: 23, name: "News & Media" },
  { id: 27, name: "Religion" },
  { id: 28, name: "Search Engines & Portals" },
  { id: 30, name: "Social Networking" },
  { id: 33, name: "Translation Sites" },
  { id: 34, name: "Travel" },
  { id: 37, name: "Virtual Reality" },
  { id: 52, name: "Phishing & Deception" },
  { id: 67, name: "New Domains" },
  { id: 55, name: "Cryptomining" },
  { id: 15, name: "Games" },
  { id: 39, name: "P2P & Illegal" },
  { id: 25, name: "Proxy & Filter Avoidance" },
  { id: 3, name: "Advertising" },
  { id: 16, name: "Hacking & Cracking" },
  { id: 7, name: "Webmail & Chat" },
  { id: 66, name: "Malware" },
  { id: 54, name: "Botnet" },
  { id: 24, name: "Parked Sites & Domains" },
  { id: 70, name: "Government" },
  { id: 17, name: "Health" },
  { id: 71, name: "Trackers" },
  { id: 72, name: "Very New Domains" },
  { id: 73, name: "Contentious & Misinformation" },
  { id: 74, name: "Advertising Lite" },
  { id: 75, name: "Trackers Lite" },
  { id: 68, name: "Terrorism & Hate" },
  { id: 77, name: "Generative AI Tools" },
  { id: 76, name: "Malicious Domain Protection" },
];

export default TopDomainsGrid;
