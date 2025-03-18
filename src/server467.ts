
const express = require('express')
import {handler467} from "./handler467";
const app = express()
app.get('/467', handler467)
app.listen(3000, () => {})
        