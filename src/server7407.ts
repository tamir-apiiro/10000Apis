
const express = require('express')
import {handler7407} from "./handler7407";
const app = express()
app.get('/7407', handler7407)
app.listen(3000, () => {})
        