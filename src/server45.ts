
const express = require('express')
import {handler45} from "./handler45";
const app = express()
app.get('/45', handler45)
app.listen(3000, () => {})
        