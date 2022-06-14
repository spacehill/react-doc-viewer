import React, { FC, useContext } from "react";
import styled from "styled-components";
import { DocViewerContext } from "../state";
import { IStyledProps } from "../types";
import { getFileName } from "../utils";

export const FileName: FC<{}> = () => {
  const {
    state: { config, currentDocument },
  } = useContext(DocViewerContext);

  if (!currentDocument || config?.header?.disableFileName) return null;

  const fileName = getFileName(
    currentDocument,
    config?.header?.retainURLParams || false
  );

  return (
    <Container id="file-name" data-testid="file-name">
      {fileName}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  text-align: left;
  color: ${(props: IStyledProps) => props.theme.textPrimary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`;
