
const express = require('express')
import {handler7232} from "./handler7232";
const app = express()
app.get('/7232', handler7232)
app.listen(3000, () => {})
        