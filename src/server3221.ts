
const express = require('express')
import {handler3221} from "./handler3221";
const app = express()
app.get('/3221', handler3221)
app.listen(3000, () => {})
        