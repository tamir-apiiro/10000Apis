
const express = require('express')
import {handler7458} from "./handler7458";
const app = express()
app.get('/7458', handler7458)
app.listen(3000, () => {})
        