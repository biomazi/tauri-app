import { Box, LinearProgress } from "@mui/material";
import CardList from "../components/CardList";
import MainSectionTitle from "../components/MainSectionTitle";
import PageLayout from "../components/PageLayout";
import { generateCards } from "../data/generateCards";
import PromoSectionTitle from "../components/PromoSectionTitle";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const cardListRows = new Array(10)
  .fill("")
  .map(() => generateCards(Math.ceil(Math.random() * 10) + 5));

const cards = generateCards(10);

const MainPage = () => {
  const [cardListRowsData, setCardListRowsData] = useState(cardListRows);

  const fetchMoreData = () => {
    if (cardListRowsData.length >= 100) return;
    setTimeout(() => {
      setCardListRowsData((rows) => [
        ...rows,
        ...new Array(10)
          .fill("")
          .map(() => generateCards(Math.ceil(Math.random() * 10) + 5)),
      ]);
    }, 2000);
  };

  return (
    <PageLayout>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottom: "0.5px solid rgba(94, 101, 126, 0.5);",
          "& > :last-child .MuiImageList-root": {
            marginTop: "-8px",
          },
        }}
        key="promo-box"
      >
        <PromoSectionTitle title="Product recommendations" />
        <CardList key="promo-cards" cards={cards} />
      </Box>
      <InfiniteScroll
        dataLength={cardListRowsData.length}
        next={fetchMoreData}
        hasMore={cardListRowsData.length < 100}
        loader={
          <Box sx={{ marginBottom: "16px", padding: "0 16px" }}>
            <LinearProgress />
          </Box>
        }
      >
        {cardListRowsData.map((c, i) => {
          return (
            <Box
              sx={{
                backgroundColor: "#F4F4F4",
                "&:first-child": {
                  paddingTop: "16px",
                },
              }}
              key={i}
            >
              <MainSectionTitle title="Medium size category name" />
              <CardList cards={c} />
            </Box>
          );
        })}
      </InfiniteScroll>
    </PageLayout>
  );
};

export default MainPage;
