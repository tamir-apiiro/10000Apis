
const express = require('express')
import {handler7093} from "./handler7093";
const app = express()
app.get('/7093', handler7093)
app.listen(3000, () => {})
        