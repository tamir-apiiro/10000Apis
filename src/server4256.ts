
const express = require('express')
import {handler4256} from "./handler4256";
const app = express()
app.get('/4256', handler4256)
app.listen(3000, () => {})
        