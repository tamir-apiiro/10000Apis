
const express = require('express')
import {handler3358} from "./handler3358";
const app = express()
app.get('/3358', handler3358)
app.listen(3000, () => {})
        