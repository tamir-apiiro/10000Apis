
const express = require('express')
import {handler4390} from "./handler4390";
const app = express()
app.get('/4390', handler4390)
app.listen(3000, () => {})
        