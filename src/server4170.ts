
const express = require('express')
import {handler4170} from "./handler4170";
const app = express()
app.get('/4170', handler4170)
app.listen(3000, () => {})
        