
const express = require('express')
import {handler4993} from "./handler4993";
const app = express()
app.get('/4993', handler4993)
app.listen(3000, () => {})
        