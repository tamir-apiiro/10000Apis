
const express = require('express')
import {handler7720} from "./handler7720";
const app = express()
app.get('/7720', handler7720)
app.listen(3000, () => {})
        