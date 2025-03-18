
const express = require('express')
import {handler4012} from "./handler4012";
const app = express()
app.get('/4012', handler4012)
app.listen(3000, () => {})
        