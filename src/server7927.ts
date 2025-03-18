
const express = require('express')
import {handler7927} from "./handler7927";
const app = express()
app.get('/7927', handler7927)
app.listen(3000, () => {})
        