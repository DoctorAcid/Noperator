import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import RowContainer from "../RowContainer/RowContainer";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: #fff;
  width: 100%;
`;

const TopSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-bottom: 2px solid #f8f9fa;
`;

const DropDownSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
`;

const DropDown = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

const DropDownButton = styled(motion.div)`
  dispaly: flex;
  justify-content: center;
  align-itmes: center;
  width: 24px;
  height: 24px;
`;

const LargeToggleButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-itmes: center;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #fff;
  &:hover {
    background-color: #0b98e80d;
  }
`;

const SidePanel = () => {
  return (
    <Wrapper>
      <TopSection>
        <h3>position i would take</h3>
        <RowContainer gap="sm">
          <PrimaryButton size="md" width="fit-content">
            Buy
          </PrimaryButton>
          <SecondaryButton size="md" width="fit-content">
            Sell
          </SecondaryButton>
        </RowContainer>
      </TopSection>
      <DropDownSection>
        <DropDown>
          <h3>Charts</h3>
          <DropDownButton>
            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.786 7.27176C17.3598 7.98213 16.4384 8.21248 15.728 7.78626L8.99977 3.7493L2.27152 7.78626C1.56115 8.21248 0.639755 7.98213 0.213535 7.27176C-0.212687 6.56139 0.0176601 5.64 0.728031 5.21378L8.99977 0.250731L17.2715 5.21378C17.9819 5.64 18.2122 6.56139 17.786 7.27176Z"
                fill="#6c757d"
              />
            </svg>
          </DropDownButton>
        </DropDown>

        <ColumnContainer gap="4px">
          <RowContainer gap="sm">
            <LargeToggleButton>
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3335 0C14.7812 0 14.3335 0.447716 14.3335 1V4C13.2289 4 12.3335 4.89543 12.3335 6V18C12.3335 19.1046 13.2289 20 14.3335 20V23C14.3335 23.5523 14.7812 24 15.3335 24C15.8858 24 16.3335 23.5523 16.3335 23V20C17.4381 20 18.3335 19.1046 18.3335 18V6C18.3335 4.89543 17.4381 4 16.3335 4V1C16.3335 0.447715 15.8858 0 15.3335 0ZM3.3335 5C2.78121 5 2.3335 5.44772 2.3335 6V9C1.22893 9 0.333496 9.89543 0.333496 11V23C0.333496 24.1046 1.22893 25 2.3335 25L2.3335 28C2.3335 28.5523 2.78121 29 3.3335 29C3.88578 29 4.3335 28.5523 4.3335 28V25C5.43807 25 6.3335 24.1046 6.3335 23V11C6.3335 9.89543 5.43807 9 4.3335 9V6C4.3335 5.44772 3.88578 5 3.3335 5ZM26.3335 9C26.3335 8.44772 26.7812 8 27.3335 8C27.8858 8 28.3335 8.44772 28.3335 9V12C29.4381 12 30.3335 12.8954 30.3335 14V26C30.3335 27.1046 29.4381 28 28.3335 28V31C28.3335 31.5523 27.8858 32 27.3335 32C26.7812 32 26.3335 31.5523 26.3335 31V28C25.2289 28 24.3335 27.1046 24.3335 26V14C24.3335 12.8954 25.2289 12 26.3335 12V9Z"
                  fill="#0B98E8"
                />
              </svg>
            </LargeToggleButton>
            <LargeToggleButton>
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0C14.4477 0 14 0.447715 14 1V4C12.8954 4 12 4.89543 12 6V18C12 19.1046 12.8954 20 14 20H15H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4V1C16 0.447715 15.5523 0 15 0ZM3 5C2.44772 5 2 5.44772 2 6V9C0.895431 9 0 9.89543 0 11V23C0 24.1046 0.89543 25 2 25H3H4C5.10457 25 6 24.1046 6 23V11C6 9.89543 5.10457 9 4 9V6C4 5.44772 3.55228 5 3 5ZM26 9C26 8.44772 26.4477 8 27 8C27.5523 8 28 8.44772 28 9V12C29.1046 12 30 12.8954 30 14V26C30 27.1046 29.1046 28 28 28H27H26C24.8954 28 24 27.1046 24 26V14C24 12.8954 24.8954 12 26 12V9Z"
                  fill="#0B98E8"
                />
              </svg>
            </LargeToggleButton>
            <LargeToggleButton>
              <svg
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.667 2C12.667 0.895431 13.5624 0 14.667 0H16.667C17.7716 0 18.667 0.895431 18.667 2V14C18.667 15.1046 17.7716 16 16.667 16H14.667C13.5624 16 12.667 15.1046 12.667 14V2ZM0.666992 7C0.666992 5.89543 1.56242 5 2.66699 5H4.66699C5.77156 5 6.66699 5.89543 6.66699 7V19C6.66699 20.1046 5.77156 21 4.66699 21H2.66699C1.56242 21 0.666992 20.1046 0.666992 19V7ZM26.667 9H28.667C29.2193 9 29.667 9.44771 29.667 10V22C29.667 22.5523 29.2193 23 28.667 23H26.667C26.1147 23 25.667 22.5523 25.667 22V10C25.667 9.44772 26.1147 9 26.667 9ZM24.667 10C24.667 8.89543 25.5624 8 26.667 8H28.667C29.7716 8 30.667 8.89543 30.667 10V22C30.667 23.1046 29.7716 24 28.667 24H26.667C25.5624 24 24.667 23.1046 24.667 22V10Z"
                  fill="#0B98E8"
                />
              </svg>
            </LargeToggleButton>
          </RowContainer>
        </ColumnContainer>
      </DropDownSection>
    </Wrapper>
  );
};

export default SidePanel;
