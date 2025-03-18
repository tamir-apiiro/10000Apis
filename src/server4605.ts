
const express = require('express')
import {handler4605} from "./handler4605";
const app = express()
app.get('/4605', handler4605)
app.listen(3000, () => {})
        