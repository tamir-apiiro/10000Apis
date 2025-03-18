
const express = require('express')
import {handler4206} from "./handler4206";
const app = express()
app.get('/4206', handler4206)
app.listen(3000, () => {})
        