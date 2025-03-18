
const express = require('express')
import {handler7417} from "./handler7417";
const app = express()
app.get('/7417', handler7417)
app.listen(3000, () => {})
        