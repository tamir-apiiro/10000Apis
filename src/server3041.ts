
const express = require('express')
import {handler3041} from "./handler3041";
const app = express()
app.get('/3041', handler3041)
app.listen(3000, () => {})
        