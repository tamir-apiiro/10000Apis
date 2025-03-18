
const express = require('express')
import {handler7581} from "./handler7581";
const app = express()
app.get('/7581', handler7581)
app.listen(3000, () => {})
        