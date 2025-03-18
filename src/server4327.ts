
const express = require('express')
import {handler4327} from "./handler4327";
const app = express()
app.get('/4327', handler4327)
app.listen(3000, () => {})
        