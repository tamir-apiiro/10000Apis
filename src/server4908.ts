
const express = require('express')
import {handler4908} from "./handler4908";
const app = express()
app.get('/4908', handler4908)
app.listen(3000, () => {})
        