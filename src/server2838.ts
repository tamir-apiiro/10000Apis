
const express = require('express')
import {handler2838} from "./handler2838";
const app = express()
app.get('/2838', handler2838)
app.listen(3000, () => {})
        