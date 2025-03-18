
const express = require('express')
import {handler7234} from "./handler7234";
const app = express()
app.get('/7234', handler7234)
app.listen(3000, () => {})
        