
const express = require('express')
import {handler373} from "./handler373";
const app = express()
app.get('/373', handler373)
app.listen(3000, () => {})
        