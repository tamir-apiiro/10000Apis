
const express = require('express')
import {handler9314} from "./handler9314";
const app = express()
app.get('/9314', handler9314)
app.listen(3000, () => {})
        