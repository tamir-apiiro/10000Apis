
const express = require('express')
import {handler335} from "./handler335";
const app = express()
app.get('/335', handler335)
app.listen(3000, () => {})
        