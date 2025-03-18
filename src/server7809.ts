
const express = require('express')
import {handler7809} from "./handler7809";
const app = express()
app.get('/7809', handler7809)
app.listen(3000, () => {})
        