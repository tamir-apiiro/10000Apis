
const express = require('express')
import {handler4366} from "./handler4366";
const app = express()
app.get('/4366', handler4366)
app.listen(3000, () => {})
        