
const express = require('express')
import {handler7444} from "./handler7444";
const app = express()
app.get('/7444', handler7444)
app.listen(3000, () => {})
        