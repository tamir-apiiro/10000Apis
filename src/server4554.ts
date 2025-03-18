
const express = require('express')
import {handler4554} from "./handler4554";
const app = express()
app.get('/4554', handler4554)
app.listen(3000, () => {})
        