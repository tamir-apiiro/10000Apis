
const express = require('express')
import {handler4400} from "./handler4400";
const app = express()
app.get('/4400', handler4400)
app.listen(3000, () => {})
        