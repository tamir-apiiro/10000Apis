
const express = require('express')
import {handler4000} from "./handler4000";
const app = express()
app.get('/4000', handler4000)
app.listen(3000, () => {})
        