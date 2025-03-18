
const express = require('express')
import {handler8635} from "./handler8635";
const app = express()
app.get('/8635', handler8635)
app.listen(3000, () => {})
        