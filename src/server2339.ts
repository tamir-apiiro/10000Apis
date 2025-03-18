
const express = require('express')
import {handler2339} from "./handler2339";
const app = express()
app.get('/2339', handler2339)
app.listen(3000, () => {})
        