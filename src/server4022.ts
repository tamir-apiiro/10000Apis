
const express = require('express')
import {handler4022} from "./handler4022";
const app = express()
app.get('/4022', handler4022)
app.listen(3000, () => {})
        