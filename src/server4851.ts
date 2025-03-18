
const express = require('express')
import {handler4851} from "./handler4851";
const app = express()
app.get('/4851', handler4851)
app.listen(3000, () => {})
        