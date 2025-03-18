
const express = require('express')
import {handler8821} from "./handler8821";
const app = express()
app.get('/8821', handler8821)
app.listen(3000, () => {})
        