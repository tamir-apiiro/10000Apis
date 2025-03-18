
const express = require('express')
import {handler4767} from "./handler4767";
const app = express()
app.get('/4767', handler4767)
app.listen(3000, () => {})
        