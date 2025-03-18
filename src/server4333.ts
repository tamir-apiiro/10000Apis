
const express = require('express')
import {handler4333} from "./handler4333";
const app = express()
app.get('/4333', handler4333)
app.listen(3000, () => {})
        