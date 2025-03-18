
const express = require('express')
import {handler7179} from "./handler7179";
const app = express()
app.get('/7179', handler7179)
app.listen(3000, () => {})
        