
const express = require('express')
import {handler51} from "./handler51";
const app = express()
app.get('/51', handler51)
app.listen(3000, () => {})
        