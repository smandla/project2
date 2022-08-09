# StockWatch

### [Live Page](https://smandla.github.io/stockwatch/)

## Description

This site provides an easy-to-navigate dashboard of current stock market data for a searched company along with historical data back 1 year. This includes the day change, the current price, the previous day's close, today's open, the day's high and low, and the 52 week high and low.

General company information includes the exchange, the CEO, the sector, the IPO date, the industry, and a link to the company's website.

A banner of common indexes also scrolls at the top of the page providing a quick refrence for more general market information.

Alongside the stock market data top headlines for the searched company to provide users with an idea of current events. Currently, this news feed is drawn from the New York Times.

Stock data is drawn from a variety of APIs, and base styling for the layout and features is provided by the CSS framework Bulma (see [Credits](#credits)).

Unifying and omtivating these features is the following simple user story:

```md
As someone who keeps track of the stock market's constant changes, I want a easy to view site with a breakdown of both general market indexes, specific company data (both historical and current), and current events that might shape the market's future.
```

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Learning Objectives

This site was developed in order to learn, practice, and implement basic javasrcipt and API skills.

Our primary learning objectives were:

1. How to navigate data in the form of JSON objects
2. How to effectively manage and combine the data from multiple fetch calls
3. How to effectively implement syntactically sweet javscript features like `async await`, `Promise.method`, template literals, and `=>` functions.
4. How to effectively use unfamiliar CSS frameworks
5. How to implement error handling
6. How to imagine and patch edge cases
7. How to make a site more intuitive with CSS and dynamic design
8. And lastly, how to generally solve problems and find bugs in an extended project with multiple developers.

---

## Installation

Clone repository and run on local machine or use deployed link above

## Usage

On page initialization, the page will look like the following:
![alt text](assets/images/screenshot.png)

To use this application, please use search bar to search for either a US based stock ticker or company.  
Upon searching, the webpage will pull information from the Yahoo API to earch for the appropriate ticker/names

```ruby
const getTicker = async (input) => {
  const response = await fetch(
    `https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${input}`,
    {
      headers: {
        "x-api-key": `${yahooAPIKey}`,
      },
    }
  );
  const data = await response.json();
  if (data.ResultSet.Result[0] === undefined) {
    badSearchModalEl.addClass("is-active");
  }
  symbol = data.ResultSet.Result[0].symbol;
  companyName = data.ResultSet.Result[0].name;
  getNewsData(companyName);
  fetchStockRealTime(symbol);
  fetchStockEODHistorical(symbol);
  getInfo(symbol);
}
```

Upon receiving the api call, we parse out the relevant data: company Name and its respective symbol. We use that information to call on other functions to generate the webpage elements to look like this:
![alt text](assets/images/Example.gif)

On mobile, the website looks like this:

![mobile-demo](./assets/images/mobile-demo.gif)

We utilize the information from the Yahoo API to make other API calls to [StockData's API](https://www.stockdata.org/)
(for realtime pricing and market information as well as historical data for the candlestick Chart),
[Finacial Modeling Prep's API](https://site.financialmodelingprep.com/) (for company information in the About Section)
as well as the [New York Times' API](https://developer.nytimes.com/)(News section on the right).
It will also locally keep a record of your recent searches. For the news section on the right, it take information on the right

---

## Features

In addition to displaying various pieces of information, the site includes several features to improve user experience by handling edge cases and making the site more intuitive. Each of these features have been designed in terms of user needs.

```md
GIVEN I am

WHEN
THEN

WHEN  
THEN

WHEN
THEN

WHEN
THEN

WHEN
THEN

WHEN
THEN

WHEN
THEN

WHEN
THEN

WHEN I scroll on the news feed
THEN the news card blend into their container box in pleasing fashion

WHEN I look at the general information for market indexes
THEN the market index scrolls on a loop to display each item
```

---

## Credits:

### Created by:

[Kavya Mandla](https://github.com/smandla)  
[Jonathan Mengel](https://github.com/)  
[Daniel Stefani](https://github.com/)

### With the Help of:

[JQuery](https://jquery.com/) |
[Javascript](https://www.javascript.com/) |
[Tailwind](https://bulma.io/) |

[Figma](https://www.figma.com/) |

### Logo from:

change to Looku
[Tailor Brands](https://www.tailorbrands.com/)

### Documentation:

[MDN Web docs](https://developer.mozilla.org/en-US/) |
[W3 Schools](https://www.w3schools.com/) |
[Stack Overflow](https://stackoverflow.com/) |

---

## [License](./LICENSE)

MIT License
