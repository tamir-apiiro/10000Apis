
const express = require('express')
import {handler6415} from "./handler6415";
const app = express()
app.get('/6415', handler6415)
app.listen(3000, () => {})
        