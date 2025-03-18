
const express = require('express')
import {handler7007} from "./handler7007";
const app = express()
app.get('/7007', handler7007)
app.listen(3000, () => {})
        