
const express = require('express')
import {handler4212} from "./handler4212";
const app = express()
app.get('/4212', handler4212)
app.listen(3000, () => {})
        