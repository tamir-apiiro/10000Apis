
const express = require('express')
import {handler4234} from "./handler4234";
const app = express()
app.get('/4234', handler4234)
app.listen(3000, () => {})
        