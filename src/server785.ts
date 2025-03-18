
const express = require('express')
import {handler785} from "./handler785";
const app = express()
app.get('/785', handler785)
app.listen(3000, () => {})
        