
const express = require('express')
import {handler4808} from "./handler4808";
const app = express()
app.get('/4808', handler4808)
app.listen(3000, () => {})
        