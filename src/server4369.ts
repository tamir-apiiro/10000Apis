
const express = require('express')
import {handler4369} from "./handler4369";
const app = express()
app.get('/4369', handler4369)
app.listen(3000, () => {})
        