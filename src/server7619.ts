
const express = require('express')
import {handler7619} from "./handler7619";
const app = express()
app.get('/7619', handler7619)
app.listen(3000, () => {})
        