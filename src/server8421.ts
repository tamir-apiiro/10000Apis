
const express = require('express')
import {handler8421} from "./handler8421";
const app = express()
app.get('/8421', handler8421)
app.listen(3000, () => {})
        