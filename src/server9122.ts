
const express = require('express')
import {handler9122} from "./handler9122";
const app = express()
app.get('/9122', handler9122)
app.listen(3000, () => {})
        