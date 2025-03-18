
const express = require('express')
import {handler7632} from "./handler7632";
const app = express()
app.get('/7632', handler7632)
app.listen(3000, () => {})
        