
const express = require('express')
import {handler4507} from "./handler4507";
const app = express()
app.get('/4507', handler4507)
app.listen(3000, () => {})
        