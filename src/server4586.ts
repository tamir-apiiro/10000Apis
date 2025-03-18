
const express = require('express')
import {handler4586} from "./handler4586";
const app = express()
app.get('/4586', handler4586)
app.listen(3000, () => {})
        