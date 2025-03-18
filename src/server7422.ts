
const express = require('express')
import {handler7422} from "./handler7422";
const app = express()
app.get('/7422', handler7422)
app.listen(3000, () => {})
        