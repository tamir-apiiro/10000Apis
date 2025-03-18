
const express = require('express')
import {handler564} from "./handler564";
const app = express()
app.get('/564', handler564)
app.listen(3000, () => {})
        