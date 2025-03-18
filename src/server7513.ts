
const express = require('express')
import {handler7513} from "./handler7513";
const app = express()
app.get('/7513', handler7513)
app.listen(3000, () => {})
        