
const express = require('express')
import {handler4065} from "./handler4065";
const app = express()
app.get('/4065', handler4065)
app.listen(3000, () => {})
        