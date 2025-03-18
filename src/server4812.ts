
const express = require('express')
import {handler4812} from "./handler4812";
const app = express()
app.get('/4812', handler4812)
app.listen(3000, () => {})
        