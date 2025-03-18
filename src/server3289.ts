
const express = require('express')
import {handler3289} from "./handler3289";
const app = express()
app.get('/3289', handler3289)
app.listen(3000, () => {})
        