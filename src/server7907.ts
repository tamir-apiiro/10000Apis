
const express = require('express')
import {handler7907} from "./handler7907";
const app = express()
app.get('/7907', handler7907)
app.listen(3000, () => {})
        