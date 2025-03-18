
const express = require('express')
import {handler5776} from "./handler5776";
const app = express()
app.get('/5776', handler5776)
app.listen(3000, () => {})
        