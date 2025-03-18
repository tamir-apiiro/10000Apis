
const express = require('express')
import {handler7487} from "./handler7487";
const app = express()
app.get('/7487', handler7487)
app.listen(3000, () => {})
        