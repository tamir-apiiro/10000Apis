
const express = require('express')
import {handler4190} from "./handler4190";
const app = express()
app.get('/4190', handler4190)
app.listen(3000, () => {})
        