
const express = require('express')
import {handler984} from "./handler984";
const app = express()
app.get('/984', handler984)
app.listen(3000, () => {})
        