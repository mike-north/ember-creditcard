# ember-creditcard

[![Build Status](https://travis-ci.org/Levanto-Financial/ember-creditcard.svg?branch=master)](https://travis-ci.org/Levanto-Financial/ember-creditcard)
[![Code Climate](https://codeclimate.com/github/Levanto-Financial/ember-creditcard/badges/gpa.svg)](https://codeclimate.com/github/Levanto-Financial/ember-creditcard)

This README outlines the details of collaborating on this Ember addon.

## Usage

Credit card type

```hbs
<span class="logo {{cc-number-to-type ccNumber allowedTypes='visa|mastercard|amex|discover'}}"></span>

```

Credit card validity

```hbs

{{#if (cc-luhn ccNumber)}}
This card is valid
{{else}}
This card is invalid
{{/if}}

```

## Setup

**Install this addon with ember-cli** `ember install ember-creditcard`


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

Copyright (c) 2015 Levanto Financial
