
const express = require('express')
import {handler4924} from "./handler4924";
const app = express()
app.get('/4924', handler4924)
app.listen(3000, () => {})
        