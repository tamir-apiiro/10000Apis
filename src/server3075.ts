
const express = require('express')
import {handler3075} from "./handler3075";
const app = express()
app.get('/3075', handler3075)
app.listen(3000, () => {})
        