
const express = require('express')
import {handler1415} from "./handler1415";
const app = express()
app.get('/1415', handler1415)
app.listen(3000, () => {})
        