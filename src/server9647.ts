
const express = require('express')
import {handler9647} from "./handler9647";
const app = express()
app.get('/9647', handler9647)
app.listen(3000, () => {})
        