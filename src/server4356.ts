
const express = require('express')
import {handler4356} from "./handler4356";
const app = express()
app.get('/4356', handler4356)
app.listen(3000, () => {})
        