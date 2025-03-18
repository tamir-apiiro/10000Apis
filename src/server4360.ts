
const express = require('express')
import {handler4360} from "./handler4360";
const app = express()
app.get('/4360', handler4360)
app.listen(3000, () => {})
        