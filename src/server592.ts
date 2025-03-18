
const express = require('express')
import {handler592} from "./handler592";
const app = express()
app.get('/592', handler592)
app.listen(3000, () => {})
        