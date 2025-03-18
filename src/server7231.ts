
const express = require('express')
import {handler7231} from "./handler7231";
const app = express()
app.get('/7231', handler7231)
app.listen(3000, () => {})
        