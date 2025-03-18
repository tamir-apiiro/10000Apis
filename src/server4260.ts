
const express = require('express')
import {handler4260} from "./handler4260";
const app = express()
app.get('/4260', handler4260)
app.listen(3000, () => {})
        