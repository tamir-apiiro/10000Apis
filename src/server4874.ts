
const express = require('express')
import {handler4874} from "./handler4874";
const app = express()
app.get('/4874', handler4874)
app.listen(3000, () => {})
        