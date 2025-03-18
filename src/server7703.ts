
const express = require('express')
import {handler7703} from "./handler7703";
const app = express()
app.get('/7703', handler7703)
app.listen(3000, () => {})
        