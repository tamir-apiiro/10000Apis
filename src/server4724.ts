
const express = require('express')
import {handler4724} from "./handler4724";
const app = express()
app.get('/4724', handler4724)
app.listen(3000, () => {})
        