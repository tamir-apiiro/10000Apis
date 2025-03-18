
const express = require('express')
import {handler9118} from "./handler9118";
const app = express()
app.get('/9118', handler9118)
app.listen(3000, () => {})
        