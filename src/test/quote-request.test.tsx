import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { QuoteRequest } from "@/sections/QuoteRequest";

function renderQuoteRequest() {
  return render(
    <LanguageProvider>
      <QuoteRequest />
    </LanguageProvider>,
  );
}

describe("quote request", () => {
  it("shows validation errors instead of advancing an incomplete request", () => {
    renderQuoteRequest();

    fireEvent.click(screen.getByRole("button", { name: /submit rfq/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Please correct the highlighted fields.");
    expect(screen.getByText("Please enter your full name.")).toBeInTheDocument();
    expect(screen.queryByText("Your RFQ is ready to send")).not.toBeInTheDocument();
  });

  it("prepares a valid request with explicit email and WhatsApp send options", () => {
    renderQuoteRequest();

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Sam Taylor" } });
    fireEvent.change(screen.getByLabelText("Company Name"), { target: { value: "BuildCo" } });
    fireEvent.change(screen.getByLabelText("Phone / WhatsApp"), { target: { value: "+971 50 123 4567" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "sam@buildco.ae" } });
    fireEvent.change(screen.getByLabelText("Project / Site Location"), { target: { value: "Sharjah" } });
    fireEvent.click(screen.getByLabelText("Power Tools"));
    fireEvent.change(screen.getByLabelText("Message / Requirements"), { target: { value: "Please quote 10 cordless drills." } });
    fireEvent.click(screen.getByRole("button", { name: /submit rfq/i }));

    expect(screen.getByText("Your RFQ is ready to send")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /send on whatsapp/i })).toHaveAttribute("href", expect.stringContaining("https://wa.me/"));
    expect(screen.getByRole("link", { name: /send by email/i })).toHaveAttribute("href", expect.stringContaining("mailto:aintradegen@gmail.com"));
  });
});
