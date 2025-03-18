
const express = require('express')
import {handler1640} from "./handler1640";
const app = express()
app.get('/1640', handler1640)
app.listen(3000, () => {})
        