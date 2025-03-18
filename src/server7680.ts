
const express = require('express')
import {handler7680} from "./handler7680";
const app = express()
app.get('/7680', handler7680)
app.listen(3000, () => {})
        