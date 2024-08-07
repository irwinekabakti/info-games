"use client";
import styled from "styled-components";

export const GameListWrapper = styled.div``;

export const GameItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .card-top {
    height: 280px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.27) 92.08%
    );
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .ratings-count {
      position: absolute;
      left: 18px;
      bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      padding: 0px 12px;
      border-radius: 16px;
      background-color: var(--clr-white);
      z-index: 1;
    }
  }

  .card-bottom {
    flex: 1;
    background-color: var(--clr-violet-light);
    padding: 20px 18px;

    .card-title {
      font-size: 18px;
      font-weight: 800px;
      font-family: var(--font-family-poppins) !important;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }

    .card-button {
      height: 34px;
      text-align: center;
      border: 1px solid var(--clr-green-normal);
      padding: 0px 16px;
      min-width: 108px;
      color: var(--clr-white);
      font-weight: 600;
      letter-spacing: 0.03em;
      display: flex;
      align-items: center;
      transition: var(--transition-default);

      &:hover {
        background-color: var(--clr-green-normal);
      }
    }
  }

  .details-group {
    padding-top: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;

export const GameDetailsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.16);
  padding: 32px 14px;
  margin-top: 32px;

  .details-title {
    margin-bottom: 36px;

    &-text {
      font-size: 28px;
      letter-spacing: 0.04em;
      font-family: var(--font-family-poppins);
    }
  }

  .details-left {
    min-height: 320px;
  }

  .details-right {
    margin-top: 24px;

    &-title {
      font-size: 24px;
      letter-spacing: 2px;
    }
    .para-text {
      font-weight: 200;
      opacity: 0.9;
    }

    .details-list-group {
      padding: 30px 0;

      .list-group-item {
        margin: 8px 0;
      }

      .item-icon {
        overflow: hidden;
        width: 32px;
      }
      .item-title {
        letter-spacing: 0.04em;
        margin-right: 12px;
      }
    }
  }

  .platforms-list {
    gap: 16px;

    .platform-img-wrapper {
      height: 180px;
    }
  }

  @media screen and (min-width: 1080px) {
    padding: 60px 42px;

    .details-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      align-items: stretch;
    }

    .details-right {
      margin-top: 0;
    }

    .details-title {
      &-text {
        font-size: 42px;
      }
    }
  }

  @media (max-width: 576px) {
    .react-tabs__tab-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    .react-tabs__tab {
      flex: 0 0 auto;
    }

    .list-group-item {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
    }

    .item-left {
      flex: 0 0 auto;
      margin-right: 10px;
    }

    .item-right {
      flex: 1 1 auto;
      // text-align: right;
    }

    .item-icon {
      display: none;
    }
  }

  .react-tabs {
    margin-top: 48px;

    &__tab {
      border-radius: 0;
      color: var(--clr-white);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.08em;
      padding: 8px 16px;
      margin-top: 6px;
      text-transform: uppercase;

      &--selected {
        color: var(--clr-dark);
        font-weight: 700;
      }

      &:after {
        display: none;
      }
    }

    &__tab-panel {
      padding: 16px 0;
    }

    &__tab-list {
    }
  }

  @media screen and (min-width: 992px) {
    .react-tabs {
      &__tab {
        font-size: 18px;
        padding: 10px 32px;
        display: inline-block;
        &--selected {
          color: var(--clr-dark);
        }
      }
    }

    .platforms-list {
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }
`;
