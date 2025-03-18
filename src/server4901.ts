
const express = require('express')
import {handler4901} from "./handler4901";
const app = express()
app.get('/4901', handler4901)
app.listen(3000, () => {})
        