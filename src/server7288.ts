
const express = require('express')
import {handler7288} from "./handler7288";
const app = express()
app.get('/7288', handler7288)
app.listen(3000, () => {})
        