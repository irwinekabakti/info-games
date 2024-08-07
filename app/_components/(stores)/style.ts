"use client";
import styled from "styled-components";

export const StoreItemWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  min-height: 120px;
  margin: 16px 0;

  .card-text {
    padding: 16px;

    .card-title {
      letter-spacing: 0.04em;
      color: #0b082d;
      font-size: 16px;
      display: inline-block;
      transition: var(--transition-default);

      &:hover {
        color: #000;
        opacity: 0.9;
      }
    }

    .card-info {
      li {
        /* color: #050415; */
        color: #fff;

        a {
          color: #fff;
        }
      }
    }

    .card-games {
      gap: 8px;
      li {
        background-color: #b9198e;
        border-radius: 100vh;
        padding-right: 8px;
        padding-left: 8px;
        height: 23px;

        * {
          font-weight: 500;
          color: var(--clr-violet-darker);
        }

        a {
          color: var(--clr-white);
          font-size: 13px;
          display: inline-block;
          transform: translateY(-3px);
          font-style: italic;
        }
      }
    }
  }
`;

export const StoreListWrapper = styled.div`
  .store-list {
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;
    }
  }
`;

export const StoreDetailsWrapper = styled.div`
  padding: 32px 0;

  .card-title {
    font-size: 32px;
    display: inline-block;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 992px) {
    padding: 60px 0;

    .details-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }
  }
`;
