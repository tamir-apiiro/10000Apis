
const express = require('express')
import {handler7202} from "./handler7202";
const app = express()
app.get('/7202', handler7202)
app.listen(3000, () => {})
        