
const express = require('express')
import {handler6871} from "./handler6871";
const app = express()
app.get('/6871', handler6871)
app.listen(3000, () => {})
        