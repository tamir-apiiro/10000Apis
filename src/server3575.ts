
const express = require('express')
import {handler3575} from "./handler3575";
const app = express()
app.get('/3575', handler3575)
app.listen(3000, () => {})
        