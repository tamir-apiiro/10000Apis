
const express = require('express')
import {handler29} from "./handler29";
const app = express()
app.get('/29', handler29)
app.listen(3000, () => {})
        