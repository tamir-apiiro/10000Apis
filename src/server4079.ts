
const express = require('express')
import {handler4079} from "./handler4079";
const app = express()
app.get('/4079', handler4079)
app.listen(3000, () => {})
        