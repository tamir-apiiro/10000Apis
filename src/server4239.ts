
const express = require('express')
import {handler4239} from "./handler4239";
const app = express()
app.get('/4239', handler4239)
app.listen(3000, () => {})
        