
const express = require('express')
import {handler3381} from "./handler3381";
const app = express()
app.get('/3381', handler3381)
app.listen(3000, () => {})
        