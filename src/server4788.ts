
const express = require('express')
import {handler4788} from "./handler4788";
const app = express()
app.get('/4788', handler4788)
app.listen(3000, () => {})
        