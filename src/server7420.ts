
const express = require('express')
import {handler7420} from "./handler7420";
const app = express()
app.get('/7420', handler7420)
app.listen(3000, () => {})
        