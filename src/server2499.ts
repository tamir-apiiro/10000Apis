
const express = require('express')
import {handler2499} from "./handler2499";
const app = express()
app.get('/2499', handler2499)
app.listen(3000, () => {})
        