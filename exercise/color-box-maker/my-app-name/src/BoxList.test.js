import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it('renders without crashing', function() {
    render(<BoxList/>)
})

it('matches snapshot', function() {
    const {asFragment} =  render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

it('can add and delete a new box', function() {
    const { getLabelByText, queryByText, getByTestId } = render(<BoxList/>)

    expect(getByTestId(0)).not.toBeInTheDocument();
    
    const widthInput = getLabelByText("width")
    const heightInput = getLabelByText("height")
    const backgroundColorInput = getLabelByText("backgroundColor")
    const submitBtn = queryByText("Add Box")
    const deleteBtn = queryByText("X")

    fireEvent.change(widthInput, {target: { width: "100"}})
    fireEvent.change(heightInput, {target: { height: "100"}})
    fireEvent.change(backgroundColorInput, {target: { backgroundColor: "#0f0f0f"}})
    fireEvent.click(submitBtn)

    expect(getByTestId(0)).toBeInTheDocument();
    
    fireEvent.click(deleteBtn)
    expect(getByTestId(0)).not.toBeInTheDocument();


})

