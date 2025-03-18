
const express = require('express')
import {handler4308} from "./handler4308";
const app = express()
app.get('/4308', handler4308)
app.listen(3000, () => {})
        