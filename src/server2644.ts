
const express = require('express')
import {handler2644} from "./handler2644";
const app = express()
app.get('/2644', handler2644)
app.listen(3000, () => {})
        