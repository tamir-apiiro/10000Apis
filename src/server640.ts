
const express = require('express')
import {handler640} from "./handler640";
const app = express()
app.get('/640', handler640)
app.listen(3000, () => {})
        