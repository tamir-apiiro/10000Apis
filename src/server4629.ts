
const express = require('express')
import {handler4629} from "./handler4629";
const app = express()
app.get('/4629', handler4629)
app.listen(3000, () => {})
        