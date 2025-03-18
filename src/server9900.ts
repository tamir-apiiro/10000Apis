
const express = require('express')
import {handler9900} from "./handler9900";
const app = express()
app.get('/9900', handler9900)
app.listen(3000, () => {})
        