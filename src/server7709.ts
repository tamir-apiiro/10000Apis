
const express = require('express')
import {handler7709} from "./handler7709";
const app = express()
app.get('/7709', handler7709)
app.listen(3000, () => {})
        