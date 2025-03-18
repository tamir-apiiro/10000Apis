
const express = require('express')
import {handler4557} from "./handler4557";
const app = express()
app.get('/4557', handler4557)
app.listen(3000, () => {})
        