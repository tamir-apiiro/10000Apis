
const express = require('express')
import {handler8799} from "./handler8799";
const app = express()
app.get('/8799', handler8799)
app.listen(3000, () => {})
        