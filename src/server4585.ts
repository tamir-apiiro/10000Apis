
const express = require('express')
import {handler4585} from "./handler4585";
const app = express()
app.get('/4585', handler4585)
app.listen(3000, () => {})
        