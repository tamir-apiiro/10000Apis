
const express = require('express')
import {handler7034} from "./handler7034";
const app = express()
app.get('/7034', handler7034)
app.listen(3000, () => {})
        