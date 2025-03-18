
const express = require('express')
import {handler4324} from "./handler4324";
const app = express()
app.get('/4324', handler4324)
app.listen(3000, () => {})
        