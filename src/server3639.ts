
const express = require('express')
import {handler3639} from "./handler3639";
const app = express()
app.get('/3639', handler3639)
app.listen(3000, () => {})
        