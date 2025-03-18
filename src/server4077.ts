
const express = require('express')
import {handler4077} from "./handler4077";
const app = express()
app.get('/4077', handler4077)
app.listen(3000, () => {})
        