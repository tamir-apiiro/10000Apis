
const express = require('express')
import {handler4268} from "./handler4268";
const app = express()
app.get('/4268', handler4268)
app.listen(3000, () => {})
        