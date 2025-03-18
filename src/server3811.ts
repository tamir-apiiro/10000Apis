
const express = require('express')
import {handler3811} from "./handler3811";
const app = express()
app.get('/3811', handler3811)
app.listen(3000, () => {})
        