
const express = require('express')
import {handler78} from "./handler78";
const app = express()
app.get('/78', handler78)
app.listen(3000, () => {})
        