
const express = require('express')
import {handler4216} from "./handler4216";
const app = express()
app.get('/4216', handler4216)
app.listen(3000, () => {})
        