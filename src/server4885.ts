
const express = require('express')
import {handler4885} from "./handler4885";
const app = express()
app.get('/4885', handler4885)
app.listen(3000, () => {})
        