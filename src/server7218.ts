
const express = require('express')
import {handler7218} from "./handler7218";
const app = express()
app.get('/7218', handler7218)
app.listen(3000, () => {})
        