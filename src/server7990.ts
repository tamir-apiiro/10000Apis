
const express = require('express')
import {handler7990} from "./handler7990";
const app = express()
app.get('/7990', handler7990)
app.listen(3000, () => {})
        