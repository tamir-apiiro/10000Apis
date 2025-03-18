
const express = require('express')
import {handler552} from "./handler552";
const app = express()
app.get('/552', handler552)
app.listen(3000, () => {})
        