
const express = require('express')
import {handler7711} from "./handler7711";
const app = express()
app.get('/7711', handler7711)
app.listen(3000, () => {})
        