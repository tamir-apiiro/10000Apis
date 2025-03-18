
const express = require('express')
import {handler8243} from "./handler8243";
const app = express()
app.get('/8243', handler8243)
app.listen(3000, () => {})
        