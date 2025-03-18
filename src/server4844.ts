
const express = require('express')
import {handler4844} from "./handler4844";
const app = express()
app.get('/4844', handler4844)
app.listen(3000, () => {})
        