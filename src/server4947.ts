
const express = require('express')
import {handler4947} from "./handler4947";
const app = express()
app.get('/4947', handler4947)
app.listen(3000, () => {})
        