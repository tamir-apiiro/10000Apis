
const express = require('express')
import {handler4640} from "./handler4640";
const app = express()
app.get('/4640', handler4640)
app.listen(3000, () => {})
        