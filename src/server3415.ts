
const express = require('express')
import {handler3415} from "./handler3415";
const app = express()
app.get('/3415', handler3415)
app.listen(3000, () => {})
        