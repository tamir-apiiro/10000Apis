
const express = require('express')
import {handler7987} from "./handler7987";
const app = express()
app.get('/7987', handler7987)
app.listen(3000, () => {})
        