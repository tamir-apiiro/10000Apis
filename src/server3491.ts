
const express = require('express')
import {handler3491} from "./handler3491";
const app = express()
app.get('/3491', handler3491)
app.listen(3000, () => {})
        