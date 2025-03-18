
const express = require('express')
import {handler6776} from "./handler6776";
const app = express()
app.get('/6776', handler6776)
app.listen(3000, () => {})
        