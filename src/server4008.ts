
const express = require('express')
import {handler4008} from "./handler4008";
const app = express()
app.get('/4008', handler4008)
app.listen(3000, () => {})
        