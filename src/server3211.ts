
const express = require('express')
import {handler3211} from "./handler3211";
const app = express()
app.get('/3211', handler3211)
app.listen(3000, () => {})
        