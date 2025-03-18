
const express = require('express')
import {handler7839} from "./handler7839";
const app = express()
app.get('/7839', handler7839)
app.listen(3000, () => {})
        