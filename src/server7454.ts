
const express = require('express')
import {handler7454} from "./handler7454";
const app = express()
app.get('/7454', handler7454)
app.listen(3000, () => {})
        