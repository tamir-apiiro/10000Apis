
const express = require('express')
import {handler9828} from "./handler9828";
const app = express()
app.get('/9828', handler9828)
app.listen(3000, () => {})
        