
const express = require('express')
import {handler7243} from "./handler7243";
const app = express()
app.get('/7243', handler7243)
app.listen(3000, () => {})
        