
const express = require('express')
import {handler4060} from "./handler4060";
const app = express()
app.get('/4060', handler4060)
app.listen(3000, () => {})
        