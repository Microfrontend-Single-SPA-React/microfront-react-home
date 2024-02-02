import Notes from "../../views/notes";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Provider } from "react-redux";


describe("Notes view testing", () => {
  it("should be in the document", async () => {
    const { queryByTestId, getByRole, getByPlaceholderText } = render(<Provider store={store}><MemoryRouter><Notes /></MemoryRouter></Provider>);
    const add_note = queryByTestId("add_note");
    waitFor(async () => {
      await fireEvent.click(add_note);
    })
    const add_notes_modal = queryByTestId('add_notes_modal');
    expect(add_notes_modal).toBeInTheDocument();
    expect(add_notes_modal).toHaveTextContent('Add a new note');
    const title_note = getByRole('textbox', {
      name: /title/i
    });
    expect(title_note).toBeInTheDocument();
    await waitFor(() => {
       fireEvent.change(title_note, { target: { value: "Test Note" } });
    })
    expect(title_note).toHaveValue('Test Note');

    const description_note = getByPlaceholderText('Description');
    expect(description_note).toBeInTheDocument();
    await waitFor(() => {
       fireEvent.change(description_note, { target: { value: "Test Description" } });
    })
    expect(description_note).toHaveValue('Test Description');

    screen.logTestingPlaygroundURL(add_notes_modal);
  });
});
