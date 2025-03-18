
const express = require('express')
import {handler9217} from "./handler9217";
const app = express()
app.get('/9217', handler9217)
app.listen(3000, () => {})
        