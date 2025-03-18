
const express = require('express')
import {handler4500} from "./handler4500";
const app = express()
app.get('/4500', handler4500)
app.listen(3000, () => {})
        