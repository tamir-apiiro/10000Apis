
const express = require('express')
import {handler3963} from "./handler3963";
const app = express()
app.get('/3963', handler3963)
app.listen(3000, () => {})
        