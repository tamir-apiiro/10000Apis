
const express = require('express')
import {handler4251} from "./handler4251";
const app = express()
app.get('/4251', handler4251)
app.listen(3000, () => {})
        