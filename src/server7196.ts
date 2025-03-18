
const express = require('express')
import {handler7196} from "./handler7196";
const app = express()
app.get('/7196', handler7196)
app.listen(3000, () => {})
        