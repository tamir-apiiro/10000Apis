
const express = require('express')
import {handler3460} from "./handler3460";
const app = express()
app.get('/3460', handler3460)
app.listen(3000, () => {})
        