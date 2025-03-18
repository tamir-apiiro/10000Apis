
const express = require('express')
import {handler7548} from "./handler7548";
const app = express()
app.get('/7548', handler7548)
app.listen(3000, () => {})
        