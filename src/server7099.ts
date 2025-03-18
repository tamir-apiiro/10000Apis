
const express = require('express')
import {handler7099} from "./handler7099";
const app = express()
app.get('/7099', handler7099)
app.listen(3000, () => {})
        