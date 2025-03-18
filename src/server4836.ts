
const express = require('express')
import {handler4836} from "./handler4836";
const app = express()
app.get('/4836', handler4836)
app.listen(3000, () => {})
        