
const express = require('express')
import {handler7947} from "./handler7947";
const app = express()
app.get('/7947', handler7947)
app.listen(3000, () => {})
        