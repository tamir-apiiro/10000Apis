
const express = require('express')
import {handler9415} from "./handler9415";
const app = express()
app.get('/9415', handler9415)
app.listen(3000, () => {})
        