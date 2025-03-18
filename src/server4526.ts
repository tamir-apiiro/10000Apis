
const express = require('express')
import {handler4526} from "./handler4526";
const app = express()
app.get('/4526', handler4526)
app.listen(3000, () => {})
        