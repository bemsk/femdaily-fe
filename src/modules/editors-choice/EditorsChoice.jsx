import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EditorsChoiceList from "../../components/editors-choice-list/EditorsChoiceList";

export default function EditorsChoice() {
  const { entities, status, error } = useSelector(
    (state) => state.editorsChoice
  );

  return (
    <>
      <EditorsChoiceList choices={entities} />
    </>
  );
}
