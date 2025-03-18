
const express = require('express')
import {handler4716} from "./handler4716";
const app = express()
app.get('/4716', handler4716)
app.listen(3000, () => {})
        