
const express = require('express')
import {handler2237} from "./handler2237";
const app = express()
app.get('/2237', handler2237)
app.listen(3000, () => {})
        