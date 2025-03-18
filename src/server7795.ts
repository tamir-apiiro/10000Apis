
const express = require('express')
import {handler7795} from "./handler7795";
const app = express()
app.get('/7795', handler7795)
app.listen(3000, () => {})
        