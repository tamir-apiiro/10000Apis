
const express = require('express')
import {handler7597} from "./handler7597";
const app = express()
app.get('/7597', handler7597)
app.listen(3000, () => {})
        