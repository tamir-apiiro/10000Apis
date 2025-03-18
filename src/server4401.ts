
const express = require('express')
import {handler4401} from "./handler4401";
const app = express()
app.get('/4401', handler4401)
app.listen(3000, () => {})
        