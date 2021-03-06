import React from "react";
import styled from "styled-components/macro";
import { useWizard } from "apps/admin/wizard/Wizard";
import { ensureElement } from "services/react-utils";

const FooterWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-top: 1px solid #ccc;
`;

export default () => {
  const { currentStep } = useWizard();

  return (
    <FooterWrapper>
      {currentStep && ensureElement(currentStep.buttons)}
    </FooterWrapper>
  );
};
