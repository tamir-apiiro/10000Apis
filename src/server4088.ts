
const express = require('express')
import {handler4088} from "./handler4088";
const app = express()
app.get('/4088', handler4088)
app.listen(3000, () => {})
        