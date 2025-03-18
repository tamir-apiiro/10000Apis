
const express = require('express')
import {handler7644} from "./handler7644";
const app = express()
app.get('/7644', handler7644)
app.listen(3000, () => {})
        