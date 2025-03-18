
const express = require('express')
import {handler4283} from "./handler4283";
const app = express()
app.get('/4283', handler4283)
app.listen(3000, () => {})
        