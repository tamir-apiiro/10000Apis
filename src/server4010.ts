
const express = require('express')
import {handler4010} from "./handler4010";
const app = express()
app.get('/4010', handler4010)
app.listen(3000, () => {})
        