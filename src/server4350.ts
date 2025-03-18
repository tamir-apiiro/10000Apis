
const express = require('express')
import {handler4350} from "./handler4350";
const app = express()
app.get('/4350', handler4350)
app.listen(3000, () => {})
        