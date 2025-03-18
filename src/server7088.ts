
const express = require('express')
import {handler7088} from "./handler7088";
const app = express()
app.get('/7088', handler7088)
app.listen(3000, () => {})
        