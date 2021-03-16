import React, { useEffect, useState } from "react";
import MainPageLayout from "../mainPageLayout/MainPageLayout";
import BtnRectangle from "../../btn/BtnRectangle";
import Searchbar from "./Searchbar";
import SortingParamSelector from "./SortingParamSelector";
import PageNav from "./PageNav";
import CampaignList from "../../campaignList/CampaignList";

const CampaignListing = () => {
  const [pageMaxNbr, setPageMaxNbr] = useState(1);
  const [currentPage, setCurrentPage] = useState(new Array(0));
  const [searchParams, setSearchParams] = useState({});
  const [pageLoading, setPageLoading] = useState({
    loading: false,
    error: false,
  });

  const pageSize = 10;
  const loadingDelay = {
    normal: 1000,
    error: 2000,
  };

  const statusParams = ["draft", "running", "cancelled", "finished"];

  const triggerSearch = () => {
    console.log("Trigger Search");
    setPageLoading({ loading: true });
  };

  useEffect(() => {
    if (pageLoading.loading) {
      if (pageLoading.error) setTimeout(() => fetchPage(), loadingDelay.error);
      else setTimeout(() => fetchPage(), loadingDelay.normal);
    }
  }, [pageLoading]);

  let initSearchParams = () => {
    let urlParams = [...new URLSearchParams(window.location.search)];
    let params = {
      size: pageSize,
    };
    urlParams.forEach((param) => {
      params[param[0]] = param[1];
    });

    if (!params.hasOwnProperty("page")) params["page"] = 1;

    setSearchParams({ ...params });
  };

  useEffect(() => {
    if (
      Object.keys(searchParams).length === 0 &&
      searchParams.constructor === Object
    ) {
      initSearchParams();
    } else {
      setPageLoading({ loading: true });
    }
  }, [searchParams]);

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns";

  const getSearchURL = () => {
    let searchURL = "?";
    Object.entries(searchParams).forEach((param, index) => {
      if (index > 0) {
        searchURL += "&";
      }
      searchURL += `${param[0]}=${param[1]}`;
    });
    return searchURL;
  };

  const fetchPage = () => {
    let searchURL = getSearchURL();
    window.history.replaceState("", "Campaigns", `/campaigns${searchURL}`);
    fetch(APIURL + searchURL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((response) => {
        setPageLoading({ loading: false, error: false });
        if (response.total !== pageMaxNbr) setPageMaxNbr(response.total);
        setCurrentPage(response.result);
      })
      .catch((error) => {
        setPageLoading({ loading: false, error: true });
        console.log(error);
      });
  };

  const changeSearchParams = (newParams) => {
    let updatedParams = { ...searchParams };
    Object.entries(newParams).forEach((param) => {
      updatedParams[param[0]] = param[1];
    });
    setSearchParams({ ...updatedParams });
  };

  const renderCampaignList = () => {
    if (pageLoading.error) {
      console.log("ERROR !");
      return <p>Error</p>;
    } else {
      if (pageLoading.loading) {
        return <p>Loading</p>;
      } else {
        return <CampaignList list={currentPage} />;
      }
    }
  };

  return (
    <MainPageLayout>
      <div className={"campaignListing"}>
        <div className={"campaignListing__head"}>
          <h1 className={"title title--page"}>Campaign Listing</h1>
          <BtnRectangle text={"Add campaign"} />
          <div className={"campaignListing__tools"}>
            <Searchbar
              searchName={(name) => changeSearchParams({ search: name })}
            />
            {
              //<SortingParamSelector title={"Status"} paramList={statusParams} />
            }
            <PageNav
              pageIndex={searchParams.page}
              changePage={(pageIndex) =>
                changeSearchParams({ page: pageIndex })
              }
              maxPageIndex={pageMaxNbr}
            />
          </div>
        </div>
        {renderCampaignList()}
      </div>
    </MainPageLayout>
  );
};

export default CampaignListing;
