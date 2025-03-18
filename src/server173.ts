
const express = require('express')
import {handler173} from "./handler173";
const app = express()
app.get('/173', handler173)
app.listen(3000, () => {})
        