
const express = require('express')
import {handler4439} from "./handler4439";
const app = express()
app.get('/4439', handler4439)
app.listen(3000, () => {})
        