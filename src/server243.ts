
const express = require('express')
import {handler243} from "./handler243";
const app = express()
app.get('/243', handler243)
app.listen(3000, () => {})
        