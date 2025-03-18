
const express = require('express')
import {handler4446} from "./handler4446";
const app = express()
app.get('/4446', handler4446)
app.listen(3000, () => {})
        