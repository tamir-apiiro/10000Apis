
const express = require('express')
import {handler7584} from "./handler7584";
const app = express()
app.get('/7584', handler7584)
app.listen(3000, () => {})
        