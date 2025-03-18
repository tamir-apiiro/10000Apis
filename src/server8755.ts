
const express = require('express')
import {handler8755} from "./handler8755";
const app = express()
app.get('/8755', handler8755)
app.listen(3000, () => {})
        