
const express = require('express')
import {handler3163} from "./handler3163";
const app = express()
app.get('/3163', handler3163)
app.listen(3000, () => {})
        