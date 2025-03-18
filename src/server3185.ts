
const express = require('express')
import {handler3185} from "./handler3185";
const app = express()
app.get('/3185', handler3185)
app.listen(3000, () => {})
        