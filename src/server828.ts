
const express = require('express')
import {handler828} from "./handler828";
const app = express()
app.get('/828', handler828)
app.listen(3000, () => {})
        