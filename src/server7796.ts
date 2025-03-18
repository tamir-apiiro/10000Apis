
const express = require('express')
import {handler7796} from "./handler7796";
const app = express()
app.get('/7796', handler7796)
app.listen(3000, () => {})
        