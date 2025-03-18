
const express = require('express')
import {handler3640} from "./handler3640";
const app = express()
app.get('/3640', handler3640)
app.listen(3000, () => {})
        