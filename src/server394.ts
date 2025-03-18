
const express = require('express')
import {handler394} from "./handler394";
const app = express()
app.get('/394', handler394)
app.listen(3000, () => {})
        