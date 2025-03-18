
const express = require('express')
import {handler7167} from "./handler7167";
const app = express()
app.get('/7167', handler7167)
app.listen(3000, () => {})
        