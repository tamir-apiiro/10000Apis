
const express = require('express')
import {handler4095} from "./handler4095";
const app = express()
app.get('/4095', handler4095)
app.listen(3000, () => {})
        