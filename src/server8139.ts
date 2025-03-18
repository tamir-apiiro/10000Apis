
const express = require('express')
import {handler8139} from "./handler8139";
const app = express()
app.get('/8139', handler8139)
app.listen(3000, () => {})
        