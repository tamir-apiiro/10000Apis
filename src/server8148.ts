
const express = require('express')
import {handler8148} from "./handler8148";
const app = express()
app.get('/8148', handler8148)
app.listen(3000, () => {})
        