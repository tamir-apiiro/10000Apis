
const express = require('express')
import {handler7347} from "./handler7347";
const app = express()
app.get('/7347', handler7347)
app.listen(3000, () => {})
        