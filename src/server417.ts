
const express = require('express')
import {handler417} from "./handler417";
const app = express()
app.get('/417', handler417)
app.listen(3000, () => {})
        