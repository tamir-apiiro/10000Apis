
const express = require('express')
import {handler4489} from "./handler4489";
const app = express()
app.get('/4489', handler4489)
app.listen(3000, () => {})
        