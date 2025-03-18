
const express = require('express')
import {handler7855} from "./handler7855";
const app = express()
app.get('/7855', handler7855)
app.listen(3000, () => {})
        