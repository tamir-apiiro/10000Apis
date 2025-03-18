
const express = require('express')
import {handler4269} from "./handler4269";
const app = express()
app.get('/4269', handler4269)
app.listen(3000, () => {})
        